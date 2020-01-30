import express from "express";

import { DialogModel, MessageModel } from "../models";

class DialogController {
  index(req: express.Request, res: express.Response) {
    const userId = req.body._id;

    DialogModel.find()
      .or([{ author: userId }, { partner: userId }])
      .populate({
        path: "lastMessage",
        populate: {
          path: "user"
        }
      })
      .exec((err, dialogs) => {
        if (err) {
          return res.status(404).json({
            message: "Dialogs not found"
          });
        }
        return res.json(dialogs);
      });
  }

  create(req: express.Request, res: express.Response) {
    const postData = {
      partner: req.body.partner,
      author: req.body.author
    };
    const newDialog = new DialogModel(postData);
    newDialog
      .save()
      .then((dialogObj: any) => {
        const newMessage = new MessageModel({
          text: req.body.text,
          user: req.body.author,
          dialog: dialogObj._id
        });

        newMessage
          .save()
          .then(() => {
            res.json(dialogObj);
          })
          .catch(reason => {
            res.json(reason);
          });
      })
      .catch(reason => {
        res.json(reason);
      });
  }

  delete(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    DialogModel.findByIdAndRemove(id)
      .then(dialog => {
        if (dialog) {
          res.json({
            message: "Dialog deleted"
          });
        } else {
          res.json({
            message: "Dialog not fount"
          });
        }
      })
      .catch(() => {
        res.json({
          message: "Dialog not fount"
        });
      });
  }
}

export default DialogController;

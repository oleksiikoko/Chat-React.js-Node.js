import express from "express";

import { DialogModel } from "../models";

class DialogController {
  index(req: express.Request, res: express.Response) {
    const authorId: string = req.params.id;

    DialogModel.find({ author: authorId })
      .populate(["author", "partner"])
      .exec((err, dialogs) => {
        if (err) {
          return res.status(404).json({
            message: "Dialogs not found"
          });
        }
        res.json(dialogs);
      });
  }

  create(req: express.Request, res: express.Response) {
    const postData = {
      partner: req.body.partner,
      author: req.body.author,
      lastMessage: req.body.lastMessage
    };
    const newDialog = new DialogModel(postData);
    newDialog
      .save()
      .then((obj: any) => {
        res.json(obj);
      })
      .catch(reason => {
        res.json(reason);
      });
  }
}

export default DialogController;

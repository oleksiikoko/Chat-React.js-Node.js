import express from "express";

import { MessageModel } from "../models";

class MessageController {
  index(req: express.Request, res: express.Response) {
    const dialogId: string = req.params.id;

    MessageModel.find({ dialog: dialogId })
      .populate("dialog")
      .exec((err, messages) => {
        if (err) {
          return res.status(404).json({
            message: "Messages not found"
          });
        }
        res.json(messages);
      });
  }

  create(req: express.Request, res: express.Response) {
    const postData = {
      text: req.body.text,
      dialog: req.body.dialog,
      user: req.body.user
    };
    const newMessage = new MessageModel(postData);
    newMessage
      .save()
      .then((obj: any) => {
        res.json(obj);
      })
      .catch(reason => {
        res.json(reason);
      });
  }

  delete(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    MessageModel.findByIdAndRemove(id)
      .then(message => {
        if (message) {
          res.json({
            message: "Message deteted"
          });
        } else {
          res.json({
            message: "Message not found"
          });
        }
      })
      .catch(() => {
        res.json({
          message: "Message not found"
        });
      });
  }
}

export default MessageController;

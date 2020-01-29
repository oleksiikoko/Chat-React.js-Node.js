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
    console.log("req.body.text");
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
}

export default MessageController;

import express from "express";

import { UserModel } from "../models";

export default (req: express.Request, res: express.Response, next: any) => {
  UserModel.findOneAndUpdate(
    { _id: "5e3147e39104f029583a0ea8" },
    {
      last_seen: new Date()
    },
    { new: true },
    () => {}
  );
  next();
};

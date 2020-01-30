import { UserModel } from "../models";

export default (req, res, next) => {
  UserModel.updateOne({
    _id: "5e3147e39104f029583a0ea8",
    last_seen: new Date()
  });
  next();
};

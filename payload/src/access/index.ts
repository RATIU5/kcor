import type { Access, AccessArgs } from "payload/config";

import type { User } from "../payload-types";

import { checkRole } from "../collections/users/check-role";

type IsRole = (args: AccessArgs<unknown, User>) => boolean;

export const supers: IsRole = ({ req: { user } }) => {
  return checkRole(["super"], user);
};

export const admins: IsRole = ({ req: { user } }) => {
  return checkRole(["admin"], user);
};

export const viewers: IsRole = ({ req: { user } }) => {
  return checkRole(["viewer"], user);
};

export const adminsOrPublished: Access = ({ req: { user } }) => {
  if (user && checkRole(["admin"], user)) {
    return true;
  }

  return {
    _status: {
      equals: "published",
    },
  };
};

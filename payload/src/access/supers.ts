import type { AccessArgs } from "payload/config";

import type { User } from "../payload-types";

import { checkRole } from "../collections/users/check-role";

type IsAdmin = (args: AccessArgs<unknown, User>) => boolean;

export const admins: IsAdmin = ({ req: { user } }) => {
  return checkRole(["super"], user);
};

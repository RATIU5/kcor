import type { CollectionConfig } from "payload/types";

import { supers } from "@/payload/access";
import { checkRole } from "./check-role";
import { ensureFirstUserIsSuper } from "./hooks/ensure-first-user-is-admin";
import { loginAfterCreate } from "./hooks/login-after-create";

const Users: CollectionConfig = {
  access: {
    admin: ({ req: { user } }) => checkRole("super", user.role),
    create: () => false,
    delete: () => false,
  },
  admin: {
    defaultColumns: ["email", "role"],
    useAsTitle: "id",
  },
  auth: true,
  fields: [
    {
      // override default email field to add a custom validate function to prevent users from changing the login email
      name: "email",
      type: "email",
      validate: (value, _) => {
        if (value?.endsWith("@maloufcompanies.com")) {
          return true;
        }
        return "invalid email address";
      },
    },
    {
      name: "role",
      access: {
        create: supers,
        read: supers,
        update: supers,
      },
      defaultValue: "viewer",
      hasMany: false,
      hooks: {
        beforeChange: [ensureFirstUserIsSuper],
      },
      options: [
        {
          label: "super",
          value: "super",
        },
        {
          label: "admin",
          value: "admin",
        },
        {
          label: "viewer",
          value: "viewer",
        },
      ],
      type: "select",
    },
  ],
  hooks: {
    afterChange: [loginAfterCreate],
  },
  slug: "users",
  timestamps: true,
};

export default Users;

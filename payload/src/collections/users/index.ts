import type { CollectionConfig } from "payload/types";

import { email as validateEmail } from "payload/dist/fields/validations";

import { admins } from "../../access/admins";
import { checkRole } from "./check-role";
import { ensureFirstUserIsAdmin } from "./hooks/ensure-first-user-is-admin";
import { loginAfterCreate } from "./hooks/login-after-create";

const Users: CollectionConfig = {
  access: {
    admin: ({ req: { user } }) => checkRole(["admin"], user),
    create: ({ req: { user } }) => checkRole(["admin"], user),
    delete: () => false,
  },
  admin: {
    defaultColumns: ["name", "email", "roles"],
    useAsTitle: "name",
  },
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      // override default email field to add a custom validate function to prevent users from changing the login email
      name: "email",
      type: "email",
      validate: (value, args) => {
        // call the payload default email validation
        return validateEmail(value, args);
      },
    },
    {
      name: "roles",
      access: {
        create: admins,
        read: admins,
        update: admins,
      },
      defaultValue: ["user"],
      hasMany: true,
      hooks: {
        beforeChange: [ensureFirstUserIsAdmin],
      },
      options: [
        {
          label: "admin",
          value: "admin",
        },
        {
          label: "user",
          value: "user",
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

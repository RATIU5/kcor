import type { CollectionConfig } from "payload/types";

import { email as validateEmail } from "payload/dist/fields/validations";

import { supers } from "../../access";
import { checkRole } from "./check-role";
import { ensureFirstUserIsSuper } from "./hooks/ensure-first-user-is-super";
import { loginAfterCreate } from "./hooks/login-after-create";

const Users: CollectionConfig = {
  access: {
    admin: ({ req: { user } }) => checkRole("super", user),
    create: ({ req: { user } }) => checkRole("super", user),
    delete: ({ req: { user } }) => checkRole("super", user),
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
        create: supers,
        update: supers,
      },
      defaultValue: ["viewer"],
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

import { GlobalConfig } from "payload/types";
import { anyone } from "../access";

const Header: GlobalConfig = {
  access: {
    read: anyone,
  },
  fields: [
    {
      name: "navItems",
      type: "array",
      fields: [
        {
          type: "group",
          name: "link",
          admin: {
            hideGutter: true,
          },
          fields: [
            {
              type: "row",
              fields: [
                {
                  name: "type",
                  type: "radio",
                  admin: {
                    layout: "horizontal",
                    width: "50%",
                  },
                  defaultValue: "internal",
                  options: [
                    {
                      label: "Page Link",
                      value: "internal",
                    },
                    {
                      label: "Custom Link",
                      value: "custom",
                    },
                  ],
                },
                {
                  type: "checkbox",
                  name: "newTab",
                  label: "Open in New Tab",
                  admin: {
                    style: {
                      alignSelf: "flex-end",
                    },
                    width: "50%",
                  },
                },
                {
                  type: "relationship",
                  name: "reference",
                  admin: {
                    condition: (_, siblingData) => {
                      console.log(siblingData);
                      return siblingData?.type === "internal";
                    },
                  },
                  relationTo: ["pages"],
                  required: true,
                  maxDepth: 1,
                  label: "Link to Page",
                },
                {
                  type: "text",
                  name: "url",
                  admin: {
                    condition: (_, siblingData) => {
                      console.log(siblingData);
                      return siblingData?.type === "custom";
                    },
                  },
                  label: "Custom URL",
                  required: true,
                },
                {
                  type: "text",
                  name: "label",
                  required: true,
                  label: "Label",
                },
              ],
            },
            {
              type: "row",
              fields: [],
            },
          ],
        },
      ],
      maxRows: 6,
    },
  ],
  slug: "header",
};

export default Header;

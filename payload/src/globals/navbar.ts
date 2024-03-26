import { GlobalConfig } from "payload/types";

import link from "../fields/link";

const Nav: GlobalConfig = {
  slug: "nav",
  fields: [
    {
      name: "items",
      type: "array",
      required: true,
      maxRows: 8,
      fields: [
        {
          name: "navItems",
          fields: [
            link({
              appearances: false,
            }),
          ],
          maxRows: 6,
          type: "array",
        },
      ],
    },
  ],
};

export default Nav;

import type { CollectionConfig } from "payload/types";
import { admins, adminsOrPublished, supers } from "../../access";
import { Hero1 } from "../../blocks/hero1";
import formatSlug from "../../utils/format-slug";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt"],
  },
  // hooks: {
  //   afterChange: [revalidatePage],
  //   afterRead: [populateArchiveBlock],
  // },
  versions: {
    drafts: true,
  },
  access: {
    read: adminsOrPublished || supers,
    update: admins || supers,
    create: admins || supers,
    delete: admins || supers,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      type: "tabs",
      tabs: [
        {
          label: "Hero",
          fields: [
            {
              name: "hero",
              type: "blocks",
              required: true,
              blocks: [Hero1],
            },
          ],
        },
        // {
        //   label: "Content",
        //   fields: [
        //     {
        //       name: "layout",
        //       type: "blocks",
        //       required: true,
        //       blocks: [CallToAction, Content, MediaBlock, Archive],
        //     },
        //   ],
        // },
      ],
    },
    {
      name: "slug",
      admin: {
        position: "sidebar",
      },
      hooks: {
        beforeValidate: [formatSlug("title")],
      },
      index: true,
      label: "Slug",
      type: "text",
    },
  ],
};

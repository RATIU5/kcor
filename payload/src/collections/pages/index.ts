import type { CollectionConfig } from "payload/types";
import { anyoneOrPublished, supersOrAdmins } from "../../access";
import { Carousel1 } from "../../blocks/carousel";
import { CTA1 } from "../../blocks/cta";
import { Hero1 } from "../../blocks/hero1";
import formatSlug from "../../utils/format-slug";

export const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "updatedAt", "status"],
  },
  versions: {
    drafts: true,
    maxPerDoc: 10,
  },
  access: {
    read: anyoneOrPublished,
    update: supersOrAdmins,
    create: supersOrAdmins,
    delete: supersOrAdmins,
  },
  fields: [
    {
      type: "text",
      admin: {
        position: "sidebar",
      },
      name: "title",
      required: true,
    },
    {
      name: "sections",
      type: "blocks",
      blocks: [Hero1, Carousel1, CTA1],
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

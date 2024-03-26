import { CollectionConfig } from "payload/types";

const AboutPage: CollectionConfig = {
  slug: "about-page",
  auth: false,
  admin: {
    group: "Pages",
    description: "The about page of the site"
  },
  fields: [
    {
      name: "title",
      type: "text",
    }
  ]
}

export default AboutPage;
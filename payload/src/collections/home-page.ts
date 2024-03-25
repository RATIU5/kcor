import { CollectionConfig } from "payload/types";

const HomePage: CollectionConfig = {
  slug: "home-page",
  auth: false,
  admin: {
    group: "Pages",
    description: "The home page of the site"
  },
  fields: [
    {
      name: "title",
      type: "text",
    }
  ]
}

export default HomePage;
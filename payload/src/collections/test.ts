import { CollectionConfig } from "payload/types";

const Test: CollectionConfig = {
  slug: "test",
  auth: false,
  admin: {
    group: "Test Group"
  },
  fields: [
    {
      name: "title",
      type: "text",
    }
  ]
}

export default Test;
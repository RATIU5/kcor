import { webpackBundler } from "@payloadcms/bundler-webpack"; // bundler-import
import { postgresAdapter } from "@payloadcms/db-postgres";

import { payloadCloud } from "@payloadcms/plugin-cloud";
// import formBuilder from '@payloadcms/plugin-form-builder'
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload/config";
import { Pages } from "./collections/pages";
import Users from "./collections/users";

export default buildConfig({
  editor: lexicalEditor({}),
  admin: {
    bundler: webpackBundler(),
  },
  collections: [Users, Pages],
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  rateLimit: {
    max: 10000, // limit each IP per windowMs
    trustProxy: true,
    window: 2 * 60 * 1000, // 2 minutes
  },
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
});

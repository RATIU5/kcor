import { webpackBundler } from "@payloadcms/bundler-webpack"; // bundler-import
import { postgresAdapter } from "@payloadcms/db-postgres";

import { payloadCloud } from "@payloadcms/plugin-cloud";
// import formBuilder from '@payloadcms/plugin-form-builder'
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload/config";
import Users from "./collections/users";

const m = path.resolve(__dirname, "./emptyModuleMock.js");

export default buildConfig({
  admin: {
    autoLogin: {
      email: "demo@payloadcms.com",
      password: "demo",
      prefillOnly: true,
    },
    bundler: webpackBundler(), // bundler-config
    // livePreview: {
    //   breakpoints: [
    //     {
    //       name: 'mobile',
    //       height: 667,
    //       label: 'Mobile',
    //       width: 375,
    //     },
    //   ],
    // },
    webpack: (config) => ({
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          express: m,
          [path.resolve(__dirname, "./cron/reset")]: m,
        },
      },
    }),
  },
  collections: [Users],
  editor: lexicalEditor({}),
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  rateLimit: {
    max: 10000, // limit each IP per windowMs
    trustProxy: true,
    window: 2 * 60 * 1000, // 2 minutes
  },
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
  plugins: [payloadCloud()],
});

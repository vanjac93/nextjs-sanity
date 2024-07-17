import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import schemas from "./sanity/schemas";

const config = defineConfig({
  dataset: "production",
  projectId: "x11kjwgt",
  title: "Testing the sanity",
  apiVersion: "1",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemas,
  },
});

export default config;

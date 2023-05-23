import { createClient } from "@sanity/client";

export default createClient({
  projectId: "yhlvd5oe", // find this at manage.sanity.io or in your sanity.json
  dataset: "production", // this is from those question during 'sanity init'
  apiVersion: "2023-05-22",
  useCdn: true,
});

import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "k94um126",
  dataset: "production",
  apiVersion: "2025-02-01",
  useCdn: false,
});
import { createClient } from "@sanity/client"

export const client = createClient({
  projectId: '76jk1b04',
  dataset: process.env.REACT_APP_SANITY_DATASET || "production",
  apiVersion: "2023-03-01",
  useCdn: false,
})


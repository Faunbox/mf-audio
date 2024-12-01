import {
    ContentType,
    EntrySkeletonType,
    createClient,
  } from "contentful";
  
  export type Post = {
    date: string;
    title: string;
    content: ContentType;
    image: string;
    imageAlt: string;
    id: string;
    category: string;
    shortDescription: string;
    tags: string[];
    total?: number;
  };
  
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process?.env.CONTENTFUL_ACCESS_TOKEN as string,
  });

  export function contentfulClient() {
    return client;
  }

  export async function getHomePageData() {
    const data = await client.getEntry<EntrySkeletonType>(
      "1KQjX2P9PpwAkvCxYbLeOm"
    );
    return data;
  }
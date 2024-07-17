import { PortableTextBlock } from "next-sanity";

export type Page = {
  title: string;
  slug: string;
  content: PortableTextBlock[];
};

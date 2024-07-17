import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";

const getProjectsQuery = groq`*[
_type=="project"
]{
  _id,
  createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content
}`;

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(getProjectsQuery);
}

const getProjectQuery = groq`*[
  _type=="project" && slug.current == $slug
][0]{
_id,
  createdAt,
  name,
  "slug": slug.current,
  "image": image.asset->url,
  url,
  content}`;

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(getProjectQuery, { slug });
}

const getPagesQuery = groq`
*[_type=="page"]{
  _id,
  title,
  "slug": slug.current,
}
`;

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(getPagesQuery);
}

const getPageQuery = groq`
*[_type=="page" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  content
}
`;

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(getPageQuery, { slug });
}

import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "next-sanity";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const page = await getPage(slug);

  return (
    <div>
      <h1 className="text-5xl drop-shadow font-extrabold bg-gradient-to-tr from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
        {page.title}
      </h1>
      <div className="text-lg text-gray-700 mt-10">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}

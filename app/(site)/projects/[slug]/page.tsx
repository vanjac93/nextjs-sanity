import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Project(props: { params: { slug: string } }) {
  const {
    params: { slug },
  } = props;

  const project = await getProject(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-5xl drop-shadow font-extrabold bg-gradient-to-tr from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          {project.name}
        </h1>

        <a
          className="bg-gray-100 rounded-lg text-gray-500 font-bold py-3 px-4 whitespace-nowrap hover:bg-pink-100 transition"
          target="_blank"
          rel="noopener noreferrer"
          href={project.url}
        >
          View project
        </a>
      </header>

      {/* content */}
      <div className="text-lg text-gray-700 mt-5 ">
        <PortableText value={project.content} />
      </div>

      <Image
        src={project.image}
        width={1920}
        height={1080}
        alt={project.name}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}

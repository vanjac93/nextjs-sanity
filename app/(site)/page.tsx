import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="mt-3">
      <div>
        <h1 className="text-7xl font-extrabold">
          This is &nbsp;
          <span className="bg-gradient-to-tr from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            Vanja
          </span>
        </h1>
        <p className="mt-3 text-xl text-gray-600">
          Aloha, check out my project
        </p>
        <h2 className="text-3xl font-bold mt-20">My projects</h2>
        <div className="grid mt-5 md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <Link
              href={`/projects/${p.slug}`}
              className="p-1 border border-gray-500 rounded-lg hover:scale-105 hover:border-blue-500 transition "
            >
              <div className="font-extrabold ">
                {p.image && (
                  <Image
                    src={p.image}
                    priority
                    alt={p.name}
                    width={750}
                    height={300}
                    className="object-cover rounded-lg "
                  />
                )}
                <p className="mt-3 bg-gradient-to-tr from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
                  {p.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

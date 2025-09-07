import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { ContentFolder, getContent, getContents } from "@/data/content";
import { DATA } from "@/data/resume";
import { formatDate, formatDateMonthYear } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { Suspense } from "react";

export async function generateStaticParams() {
  const projects = await getContents(ContentFolder.PROJECT);
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}): Promise<Metadata | undefined> {
  let project = await getContent(params.slug, ContentFolder.PROJECT);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = project.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/project/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Project({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  let project = await getContent(params.slug, ContentFolder.PROJECT);

  if (!project) {
    notFound();
  }

  // Find the project in DATA to get technology icons
  const projectData = DATA.projects.find(
    (p) => p.href === `/project/${params.slug}`
  );

  // Create a mapping from technology names to skillicons identifiers
  const getTechnologyIcons = (technologies: readonly string[]) => {
    const techIconMap: { [key: string]: string } = {
      "Next.js": "nextjs",
      React: "react",
      TypeScript: "typescript",
      Typescript: "typescript",
      JavaScript: "javascript",
      Javascript: "javascript",
      "Node.js": "nodejs",
      NestJS: "nestjs",
      Go: "go",
      PostgreSQL: "postgresql",
      MySQL: "mysql",
      MongoDB: "mongodb",
      Docker: "docker",
      Kubernetes: "kubernetes",
      AWS: "aws",
      Prisma: "prisma",
      "Tailwind CSS": "tailwindcss",
      Angular: "angular",
      Flutter: "flutter",
      Dart: "dart",
      Java: "java",
      Python: "python",
      RabbitMQ: "rabbitmq",
      Redis: "redis",
      GraphQL: "graphql",
      Firebase: "firebase",
      Vercel: "vercel",
      Git: "git",
      GitHub: "github",
      "VS Code": "vscode",
      Linux: "linux",
      Cloudflare: "cloudflare",
    };

    return technologies
      .map((tech) => techIconMap[tech])
      .filter(Boolean) // Remove undefined values
      .slice(0, 8); // Limit to 8 icons to avoid URL length issues
  };

  let technologyIcons: string[] = [];

  if (projectData) {
    technologyIcons = getTechnologyIcons(projectData.technologies);
  }

  const iconUrl =
    technologyIcons.length > 0
      ? `https://skillicons.dev/icons?i=${technologyIcons.join(
          ","
        )}&theme=light`
      : null;

  return (
    <section
      id="project"
      className="absolute left-0 right-0 w-full flex flex-col 
      max-w-5xl mx-auto px-6"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProjectPosting",
            headline: project.metadata.title,
            datePublished: project.metadata.publishedAt,
            dateModified: project.metadata.publishedAt,
            description: project.metadata.summary,
            image: project.metadata.image
              ? `${DATA.url}${project.metadata.image}`
              : `${DATA.url}/og?title=${project.metadata.title}`,
            url: `${DATA.url}/project/${project.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <Link
        href="/"
        className="text-neutral-500 hover:text-neutral-600 dark:text-neutral-400 
        dark:hover:text-neutral-300 transition-colors mb-8 flex items-center gap-1"
      >
        <ChevronLeft className="w-4 h-4" />
        Back
      </Link>
      <h1 className="title font-bold text-4xl tracking-tighter flex justify-between">
        {project.metadata.title}
        <div className="space-x-2">
          {projectData?.links?.map((link, idx) => {
            const Icon = link.icon;
            return (
              <Link
                href={link?.href}
                key={idx}
                target="_blank"
                className="relative group"
              >
                {React.cloneElement(link.icon, {
                  className: "inline-block h-7 w-7",
                })}
                <span
                  className="absolute -top-7 left-1/2 -translate-x-1/2 
                  bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded text-sm
                  opacity-0 group-hover:opacity-100 transition-opacity tracking-tight
                  whitespace-nowrap pointer-events-none"
                >
                  {link.type}
                </span>
              </Link>
            );
          })}
        </div>
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm ">
        {iconUrl && (
          <img src={iconUrl} alt="Technologies used" className="h-8" />
        )}

        {/* <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDateMonthYear(project.metadata.publishedAt, )}
          </p>
        </Suspense> */}
      </div>
      <article
        className="prose dark:prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: project.source }}
      ></article>
    </section>
  );
}

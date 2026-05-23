import GithubProjectsItem from "@/components/items/GithubProjectsItem";
import { siteConfig } from "@/static/site";
import { GithubApiResponse } from "@/types";
import Head from "next/head";
import { useEffect, useState } from "react";

const curatedProjectNames = [
  "joaoptgaino.github.io",
  "order",
  "microservice",
  "spring",
  "nestjs",
  "api",
];

const getProjectDate = (project: GithubApiResponse) =>
  new Date(project.pushed_at || project.updated_at || 0).getTime();

const curateProjects = (projects: GithubApiResponse[]) => {
  const activeProjects = projects
    .filter((project) => !project.archived && !project.fork)
    .sort((a, b) => getProjectDate(b) - getProjectDate(a));

  const featured = activeProjects
    .filter((project) =>
      curatedProjectNames.some((term) =>
        `${project.name} ${project.description || ""}`
          .toLowerCase()
          .includes(term.toLowerCase())
      )
    )
    .slice(0, 6);

  return {
    featured: featured.length ? featured : activeProjects.slice(0, 6),
    latest: activeProjects,
  };
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<GithubApiResponse[]>([]);
  const [featuredProjects, setFeaturedProjects] = useState<
    GithubApiResponse[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProjects = async () => {
      try {
        setIsLoading(true);
        setError("");
        const username = siteConfig.githubUsername;
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=pushed&direction=desc&per_page=100`
        );

        if (!response.ok) {
          throw new Error("GitHub projects could not be loaded.");
        }

        const data = (await response.json()) as GithubApiResponse[];
        const curated = curateProjects(data);
        setFeaturedProjects(curated.featured);
        setProjects(curated.latest);
      } catch (err) {
        setError(
          err instanceof Error
            ? err.message
            : "Something went wrong while loading GitHub projects."
        );
      } finally {
        setIsLoading(false);
      }
    };

    getProjects();
  }, []);

  return (
    <>
      <Head>
        <title>{`${siteConfig.name} | Projects`}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords} />
        <link rel="canonical" href={`${siteConfig.url}/projects`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${siteConfig.name} | Projects`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={`${siteConfig.url}/projects`} />
        <meta
          property="og:image"
          content={`${siteConfig.url}/assets/cover_image.jpg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${siteConfig.name} | Projects`} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta
          name="twitter:image"
          content={`${siteConfig.url}/assets/cover_image.jpg`}
        />
        <link rel="icon" href="/assets/logo_dark_theme.png" />
      </Head>
      <main className="w-full min-h-screen text-center flex flex-col bg-slate-50 pt-24 dark:bg-[#0b0f14]">
        <div className="max-w-[1240px] mx-auto px-4 py-16 w-full">
          <p className="section-eyebrow">Projects</p>
          <h1 className="py-4 text-slate-900 dark:text-white">
            GitHub projects
          </h1>
          <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            A curated look at my public work, ordered by the most recently
            updated repositories.
          </p>

          {isLoading && (
            <div
              className="my-16 grid md:grid-cols-3 gap-8"
              aria-live="polite"
            >
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="surface-card rounded-xl p-8 animate-pulse"
                >
                  <div className="h-5 bg-slate-200 rounded dark:bg-slate-800" />
                  <div className="h-20 mt-6 bg-slate-200 rounded dark:bg-slate-800" />
                  <div className="h-4 mt-6 bg-slate-200 rounded dark:bg-slate-800" />
                </div>
              ))}
            </div>
          )}

          {error && (
            <div
              className="my-12 rounded-xl border border-red-200 bg-red-50 p-6 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200"
              role="alert"
            >
              {error}
            </div>
          )}

          {!isLoading && !error && (
            <>
              <h2 className="pt-14 pb-6 text-left text-2xl text-slate-900 dark:text-white">
                Featured
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {featuredProjects.map((project) => (
                  <GithubProjectsItem
                    key={project.id}
                    name={project.name}
                    fullName={project.full_name}
                    description={project.description}
                    stars={project.stargazers_count}
                    url={project.html_url}
                    homepage={project.homepage}
                    forks={project.forks_count}
                    language={project.language}
                    updatedAt={project.pushed_at || project.updated_at}
                    featured
                  />
                ))}
              </div>

              <h2 className="pt-14 pb-6 text-left text-2xl text-slate-900 dark:text-white">
                Latest repositories
              </h2>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
                {projects.map((project) => (
                  <GithubProjectsItem
                    key={project.id}
                    name={project.name}
                    fullName={project.full_name}
                    description={project.description}
                    stars={project.stargazers_count}
                    url={project.html_url}
                    homepage={project.homepage}
                    forks={project.forks_count}
                    language={project.language}
                    updatedAt={project.pushed_at || project.updated_at}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
}

import { GithubProjectProps } from "@/types";
import Link from "next/link";
import { MdInsertLink } from "react-icons/md";
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";

const GithubProjectsItem = ({
  name,
  fullName,
  description,
  stars,
  url,
  homepage,
  forks,
  language,
  updatedAt,
  featured,
}: GithubProjectProps) => {
  const formattedDate = updatedAt
    ? new Intl.DateTimeFormat("en", {
        month: "short",
        year: "numeric",
      }).format(new Date(updatedAt))
    : null;

  return (
    <Link
      className={`card compact surface-card cursor-pointer rounded-xl text-left hover:-translate-y-1 hover:border-emerald-400 transition duration-300 ${
        featured ? "ring-1 ring-emerald-400/60" : ""
      }`}
      href={url}
      key={name}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open ${fullName} on GitHub`}
    >
      <div className="flex justify-between flex-col p-8 h-full w-full">
        <div>
          <div className="flex items-center">
            <div className="card-title text-lg tracking-wide flex text-slate-700 dark:text-slate-200">
              <MdInsertLink className="my-auto mr-0.5" />
              <p className="font-bold text-slate-900 dark:text-green-400">
                {name}
              </p>
            </div>
          </div>
          <p className="mb-5 mt-3 text-sm font-medium text-slate-600 dark:text-slate-300">
            {description || "Repository without a public description yet."}
          </p>
          {homepage && (
            <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-emerald-700 dark:text-green-400">
              Live demo available
            </p>
          )}
        </div>
        <div className="flex justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex flex-grow">
            <span className="mr-3 flex items-center">
              <AiOutlineStar className="mr-0.5" />
              <span>{stars}</span>
            </span>
            <span className="flex items-center">
              <AiOutlineFork className="mr-0.5" />
              <span>{forks}</span>
            </span>
          </div>
          <div>
            <span className="flex items-center">
              <span>{language || "Code"}</span>
            </span>
          </div>
        </div>
        {formattedDate && (
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            Updated {formattedDate}
          </p>
        )}
      </div>
    </Link>
  );
};

export default GithubProjectsItem;

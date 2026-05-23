import { ExperienceProps } from "@/types";
import { calculateDate } from "@/utils/date.util";

const ExperienceItem = ({
  companyName,
  position,
  description,
  from,
  to,
  skills,
  responsabilities,
}: ExperienceProps) => {
  return (
    <li className="mb-10 ml-4 cursor-default">
      <div className="absolute w-3 h-3 bg-emerald-500 rounded-full mt-1.5 -left-1.5 border border-white dark:border-slate-950 dark:bg-green-400"></div>
      <time className="mb-1 text-sm font-normal leading-none text-slate-500 dark:text-slate-400">
        {from} - {to}
      </time>
      <div className="flex items-center mb-2 space-x-2">
        <p className="mb-1 text-xs font-normal leading-none text-slate-500 dark:text-slate-400">
          {calculateDate(from, to)}
        </p>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-green-400">
        {companyName}
      </h3>
      <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
        {position}
      </h4>
      {!responsabilities?.length && (
        <p className="mb-4 text-base font-normal text-slate-600 dark:text-slate-300">
          <span className="inline-block md:max-w-sm lg:max-w-xl">
            {description}
          </span>
        </p>
      )}

      <ul className="ml-4 list-disc marker:text-emerald-600 marker:dark:text-green-400">
        {responsabilities?.length
          ? responsabilities.map((responsability, index) =>
              index === 0 ? (
                <li
                  key={index}
                  className="text-sm font-bold leading-none text-slate-700 dark:text-slate-200 cursor-default"
                >
                  {responsability}
                </li>
              ) : (
                <li
                  key={index}
                  className="text-sm font-normal leading-none text-slate-600 dark:text-slate-300 cursor-default"
                >
                  {responsability}
                </li>
              )
            )
          : null}
      </ul>
      <p className="mt-2 text-xs font-normal leading-none text-slate-500 dark:text-slate-400">
        {skills}
      </p>
    </li>
  );
};

export default ExperienceItem;

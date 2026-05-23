import { experiences } from "@/static/experience";
import ExperienceItem from "./items/ExperienceItem";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full p-2 flex items-center py-16 bg-white dark:bg-slate-950"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="section-eyebrow">Experience</p>
        <h2 className="py-4 text-slate-900 dark:text-white">Where I&apos;ve worked</h2>

        <ol className="relative border-l border-slate-200 dark:border-slate-700">
          {experiences.map((experience, index) => (
            <ExperienceItem key={index} {...experience} />
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;

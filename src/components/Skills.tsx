import { SkillProps } from "@/types";
import SkillItem from "./items/SkillItem";
import { useState } from "react";
import { skills } from "@/static/skills";

const Skills = () => {
  const [loadMore, setLoadMore] = useState(false);
  const displayedSkills: SkillProps[] = loadMore ? skills : skills.slice(0, 8);

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  const handleShowLess = () => {
    setLoadMore(false);
  };

  return (
    <section id="skills" className="w-full p-2 py-16 dark:bg-[#0b0f14]">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="section-eyebrow">Skills</p>
        <h2 className="py-4 text-slate-900 dark:text-white">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedSkills.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} img={skill.img} />
          ))}
        </div>
        {!loadMore ? (
          <button
            className="py-3 px-5 mt-4 w-full sm:w-auto shadow-lg shadow-emerald-900/10"
            onClick={handleLoadMore}
          >
            Load more
          </button>
        ) : (
          <button
            className="py-3 px-5 mt-4 w-full sm:w-auto shadow-lg shadow-emerald-900/10"
            onClick={handleShowLess}
          >
            Show less
          </button>
        )}
      </div>
    </section>
  );
};

export default Skills;

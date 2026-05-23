import { about_p1, about_p2 } from "@/static/information";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="w-full p-2 flex items-center py-16 dark:bg-[#0b0f14]">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="section-eyebrow">About</p>
          <h2 className="py-4 text-slate-900 dark:text-white">Who I am</h2>
          <p className="py-2 text-slate-600 dark:text-slate-300">{about_p1}</p>
          <p className="py-2 text-slate-600 dark:text-slate-300">{about_p2}</p>
          <p className="py-2 text-emerald-700 underline cursor-pointer dark:text-green-400">
            <Link href="/#projects">Check out some of my latest projects.</Link>
          </p>
        </div>
        <div className="w-full h-auto m-auto surface-card rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl"
            src="/assets/laptop_img.jpg"
            alt="Laptop on a desk representing software engineering work"
            width="500"
            height="150"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

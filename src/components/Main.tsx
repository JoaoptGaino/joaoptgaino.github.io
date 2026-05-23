import Image from "next/image";
import propertyImg from "../../public/assets/eu.jpg";
import SocialMediaComponent from "./items/SocialMediaComponent";

const Main = () => {
  return (
    <section
      id="home"
      className="w-full min-h-screen text-center flex flex-col bg-gradient-to-b from-white via-slate-50 to-emerald-50/60 dark:from-[#0b0f14] dark:via-slate-950 dark:to-emerald-950/20"
    >
      <div className="flex-grow max-w-[1240px] w-full h-full mx-auto px-4 pt-24 flex justify-center items-center">
        <div className="max-w-4xl">
          <p className="uppercase text-sm tracking-widest text-emerald-700 font-bold dark:text-green-400">
            Backend Software Engineer
          </p>
          <h1 className="py-4 text-slate-900 dark:text-white">
            Hi, I&apos;m <span className="text-emerald-600 dark:text-green-400">João Gaino</span>
          </h1>
          <div className="flex flex-col items-center">
            <Image
              className="rounded-full border-4 border-white shadow-xl shadow-emerald-900/15 hover:scale-105 ease-in duration-300 dark:border-slate-800 dark:shadow-black/50"
              src={propertyImg}
              alt="Joao Pedro Theodoro Gaino profile photo"
              width={150}
              height={150}
              priority
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="py-2 text-3xl sm:text-4xl md:text-5xl text-slate-800 dark:text-slate-100">
              Java, Spring Boot, NestJS, AWS
            </h2>
            <p className="pt-4 pb-0.5 text-slate-600 max-w-3xl m-auto dark:text-slate-300">
              I build microservices, BFFs, serverless applications, and secure integrations for banking,
              marketplace, transport, and web platforms.
            </p>
            <p className="pb-4 text-slate-600 max-w-3xl m-auto dark:text-slate-300">
              Focused on reliability, maintainable architecture, CI/CD, and practical AI-assisted
              engineering workflows.
            </p>
          </div>
          <SocialMediaComponent
            containerStyle="flex items-center justify-between max-w-[330px] m-auto py-4"
            iconStyle="rounded-full surface-card p-5 cursor-pointer hover:scale-105 hover:text-emerald-600 ease-in duration-300 dark:hover:text-green-400"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;

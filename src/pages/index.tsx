import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { siteConfig } from "@/static/site";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{`${siteConfig.name} | ${siteConfig.role}`}</title>
        <meta name="description" content={siteConfig.description} />
        <meta name="keywords" content={siteConfig.keywords} />
        <meta name="author" content={siteConfig.name} />
        <link rel="canonical" href={siteConfig.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${siteConfig.name} | Backend Software Engineer`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:url" content={siteConfig.url} />
        <meta property="og:image" content={`${siteConfig.url}/assets/cover_image.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${siteConfig.name} | Backend Software Engineer`} />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={`${siteConfig.url}/assets/cover_image.jpg`} />
        <link rel="icon" href="/assets/logo_dark_theme.png" />
      </Head>
      <Main />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

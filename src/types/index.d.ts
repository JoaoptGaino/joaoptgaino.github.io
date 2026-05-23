import { StaticImageData } from "next/image";

interface SkillProps {
  name: string;
  img: string;
}

interface ProjectProps {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
  tech: string;
}

interface SocialMediaComponentProps {
  containerStyle: string;
  iconStyle: string;
}

interface ExperienceProps {
  companyName: string;
  from: string;
  to: string;
  position: string;
  description: string;
  skills: string;
  responsabilities?: string[];
}

interface GithubApiResponse {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  html_url: string;
  homepage?: string | null;
  fork?: boolean;
  archived?: boolean;
  updated_at?: string;
  pushed_at?: string;
}
interface GithubProjectProps {
  name: string;
  fullName: string;
  description: string | null;
  stars: number;
  url: string;
  homepage?: string | null;
  language: string | null;
  forks: number;
  updatedAt?: string;
  featured?: boolean;
}

import { SocialMediaComponentProps } from "@/types";
import { siteConfig } from "@/static/site";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const SocialMediaComponent = ({
  containerStyle,
  iconStyle,
}: SocialMediaComponentProps) => {
  return (
    <div className={containerStyle}>
      <div className={iconStyle}>
        <a
          href="https://www.linkedin.com/in/joao-pedro-theodoro-gaino/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open LinkedIn profile"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div className={iconStyle}>
        <a
          href="https://github.com/JoaoPtGaino/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open GitHub profile"
        >
          <FaGithub />
        </a>
      </div>
      <div className={iconStyle}>
        <a
          href="https://www.youtube.com/@joaoptgaino"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open YouTube channel"
        >
          <FaYoutube />
        </a>
      </div>
      <div className={iconStyle}>
        <a href={`mailto:${siteConfig.email}`} aria-label="Send email">
          <AiOutlineMail />
        </a>
      </div>
      <div className={iconStyle}>
        <a
          href="https://www.linkedin.com/in/joao-pedro-theodoro-gaino/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open professional profile"
        >
          <BsFillPersonLinesFill />
        </a>
      </div>
    </div>
  );
};
export default SocialMediaComponent;

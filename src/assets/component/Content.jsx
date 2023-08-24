import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
export default function Content() {
  return (
    <div className="content">
      <div className="button">
        <span>
          <AiOutlineYoutube />
        </span>
        <a href="https://www.youtube.com/channel/UCFMYowlO2a5baqzJfjhy1ew" target="_blank" rel="noreferrer noopener">
          Youtube
        </a>
      </div>
      <div className="button">
        <span>
          <AiOutlineInstagram />
        </span>
        <a href="https://www.instagram.com/ahmadain54/" target="_blank" rel="noreferrer noopener">
          Instagram
        </a>
      </div>
      <div className="button">
        <span>
          <AiOutlineGithub />
        </span>
        <a href="https://github.com/ahmadnurain" target="_blank" rel="noreferrer noopener">
          Github
        </a>
      </div>
    </div>
  );
}

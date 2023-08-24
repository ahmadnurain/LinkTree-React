import profile from "./image/profil.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Header() {
  const [text] = useTypewriter({
    words: ["Student, Web Developer, Freelancer"],
    loop: Infinity,
    typeSpeed: 110,
    deleteSpeed: 80,
  });
  return (
    <div className="profile">
      <img src={profile} />
      <h1>Ahmad Nur Ain</h1>
      <p>
        {text}
        <Cursor cursorStyle="|" />
      </p>
    </div>
  );
}

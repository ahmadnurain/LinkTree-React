import Content from "./assets/component/Content";
import Header from "./assets/component/Header";
import ParticlesBg from "particles-bg";

export default function App() {
  return (
    <div className="card">
      <ParticlesBg type="thick" bg={true} />
      <Header />
      <Content />
    </div>
  );
}

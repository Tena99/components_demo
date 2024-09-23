import "./App.css";

import profile1 from "./assets/profile1.jpg";
import profile2 from "./assets/profile2.jpg";
import img_avatar from "./assets/img_avatar.png";

import Card from "./components/Card";
import Flip_Card from "./components/Flip-card";

function App() {
  return (
    <>
      <header>App</header>
      <main>
        <Card imageSrc={profile1} title={"Jane Doe"} text={"Developer"}></Card>
        <Card imageSrc={profile2} title={"John Doe"} text={"Artist"}></Card>

        <Flip_Card
          imgSrc={img_avatar}
          title={"John Doe"}
          profession={"Architect & Engineer"}
          comment={"We love that guy"}
        ></Flip_Card>
      </main>
      <footer>Photos from unsplash.com</footer>
    </>
  );
}

export default App;

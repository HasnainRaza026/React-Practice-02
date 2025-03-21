import { Link } from "react-router-dom";
import Button from "../components/Button";
import Header from "../components/Header";
import Heading from "../components/Heading";
import Paragraph from "../components/Paragraph";

function Home() {
  return (
    <div className="relative bg-[url('/src/assets/bg.jpg')] bg-cover bg-center h-full w-full flex justify-center items-center">
      <div class="absolute inset-0 bg-[#0C1810]/60"></div>
      <Header />
      <div class="relative z-10 w-[1122px] flex flex-col gap-[40px] items-center">
        <div className="flex flex-col items-center">
          <Heading>You travel the world.</Heading>
          <Heading>WorldWise keeps track of your adventures</Heading>
        </div>
        <Paragraph classToAdd="text-center">
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </Paragraph>
        <Link to="/login">
          <Button text={"START TRACKING NOW"} />
        </Link>
      </div>
    </div>
  );
}

export default Home;

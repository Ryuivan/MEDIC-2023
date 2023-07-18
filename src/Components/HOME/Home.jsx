import Carousel from "./Carousel/Carousel";
import Info from "./Main/Info";
import Visi from "./Visi/Visi";
import Misi from "./Misi/Misi";
// import Alamat from "./Alamat/Alamat";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <Carousel />
      <div id="home-bg">
        <Info />
        <div className="mainLine2 container"></div>
        <Visi />
        <div className="mainLine2 container"></div>
        <Misi />
        {/* <div className="mainLine2 container"></div>
        <Alamat /> */}
      </div>
    </main>
  );
}

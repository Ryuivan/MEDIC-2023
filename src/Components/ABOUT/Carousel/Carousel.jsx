import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import './Carousel.css'

export default function AboutCarousel() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Splide
        id="about-carousel"
        options={{
          type: "loop",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          rewind: true,
          interval: 5000,
          waitForTransition: true,
          flickMaxPages: 1,
        }}
      >
        <SplideSlide className="img-wrap">
          <img src='https://cdn.discordapp.com/attachments/1079650552830513222/1123229215895072858/rame.webp' alt="banner-1" className="img-carousel img-fluid" />
        </SplideSlide>

        <SplideSlide className="img-wrap">
          <img src='https://cdn.discordapp.com/attachments/1079650552830513222/1123229216293539950/bphkoor.webp' alt="banner-2" className="img-carousel img-fluid" />
        </SplideSlide>

        <SplideSlide className="img-wrap">
          <img src='https://cdn.discordapp.com/attachments/1079650552830513222/1123229216624881704/ketuawakil1.webp' alt="banner-3" className="img-carousel img-fluid" />
        </SplideSlide>
      </Splide>
    </div>
  );
}

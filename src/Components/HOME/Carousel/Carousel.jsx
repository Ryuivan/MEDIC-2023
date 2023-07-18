import "./Carousel.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";

export default function Carousel() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Splide
        id="home-carousel"
        aria-label="My Favorite Images"
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
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScZZlR08m5HbQP0i0CIiso9mdMNsSlUVRT-Ih1Q8z9jqLJyQg/viewform">
            <img
              src="https://cdn.discordapp.com/attachments/1079650552830513222/1123227872572747776/pukis.webp"
              alt="banner-1"
              className="img-carousel img-fluid"
            />
          </a>
        </SplideSlide>

        <SplideSlide className="img-wrap">
          <img
            src="https://cdn.discordapp.com/attachments/1079650552830513222/1123227873088639096/fasilitas.webp"
            alt="banner-2"
            className="img-carousel img-fluid"
          />
        </SplideSlide>

        <SplideSlide className="img-wrap">
          <img
            src="https://cdn.discordapp.com/attachments/1079650552830513222/1123227873461928048/Kolase_piket.webp"
            alt="banner-3"
            className="img-carousel img-fluid"
          />
        </SplideSlide>
      </Splide>
    </div>
  );
}

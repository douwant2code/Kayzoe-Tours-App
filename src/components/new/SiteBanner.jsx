import sliderImg2 from "../../assets/images/packages/madrid2.webp";
import sliderImg1 from "../../assets/images/slider10.jpg";

const SiteBanner = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block w-100" src={sliderImg1} alt="First slide" />
        </div>
      </div>
    </div>
  );
};

export default SiteBanner;

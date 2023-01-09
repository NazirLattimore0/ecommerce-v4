import "../components/slider/slider.css";
import "../components/slider/sliderrepeater.js";
import "../components/slider/sliderManual.js";
import slider0 from "../images/Belovedblacktee.png ";

function Home() {
  return (
    <div className="Home">
      <h1>Kozy Collection</h1>
      <section class="slider">
        <div class="slides">
          <div class="slide active">
            <img src={slider0} alt="hoodie" />
          </div>
          <div class="slide-manual">
            <div class="btn active"></div>
            <div class="btn"></div>
            <div class="btn"></div>
            <div class="btn"></div>
            <div class="btn"></div>
          </div>
        </div>
      </section>
      <div class="paragraph-container">
        <p>
          Kozy Collection is a clothing E-commerce site that resells exclusize
          clothes that the world wants.
        </p>
      </div>
    </div>
  );
}

export default Home;

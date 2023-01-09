import "../components/slider/slider.css";
import "../components/slider/sliderrepeater.js";
import "../components/slider/sliderManual.js";
import slider0 from "../images/Slider0.jpg";
import slider1 from "../images/Slider1.jpg";
import slider2 from "../images/Slider2.jpg";
import slider3 from "../images/Slider3.jpg";
import slider4 from "../images/Slider4.jpg";

function Home() {
  return (
    <div className="Home">
      <section class="slider">
        <div class="slides">
          <div class="slide active">
            <img src={slider0} alt="a wand on a book" />
          </div>
          <div class="slide">
            <img src={slider1} alt="a wand on a book" />
          </div>
          <div class="slide">
            <img src={slider2} alt="a wand on a book" />
          </div>
          <div class="slide">
            <img src={slider3} alt="a wand on a book" />
          </div>
          <div class="slide">
            <img src={slider4} alt="a wand on a book" />
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
          Waxing Wandlight consists of the world's greatest wand makers. We put
          time and care into each of our works, guaranteeing our customers
          unique and powerful wands.
        </p>
      </div>
    </div>
  );
}

export default Home;

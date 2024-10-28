import "./sectionAbout.css";
import img from "./about.png";

function SectionAbout() {
  return (
    <div class="section-about">
      <div class="section-item">
        <img src={img} alt="" />
      </div>
      <div class="section-item">
        <h1 class="title">\ About us \</h1>
        <h1 class="title-second">
          One of the Fastest Way to <br />
          Business Growth
        </h1>
        <p>
          It is a long established fact that a reader will be distracted by the{" "}
          <br />
          readable content of a page when looking at its layout. The point of{" "}
          <br />
          using Lorem Ipsum is that it has a more-or-less normal distribution of{" "}
          <br />
          letters, as opposed
        </p>
      </div>
    </div>
  );
}

export default SectionAbout;

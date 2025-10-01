import "./../App.css";
import image1 from "./../assets/couple2.jpg";
import image2 from "./../assets/couple3.jpg";
import image3 from "./../assets/couple4.jpg";

function Gallery() {
  return (
    <section className="gallery">
      <h2 className="gallery-title">Gallery</h2>
      <div className="gallery-row">
        <div className="gallery-item">
          <img src={image1} alt="Couple 2" />
        </div>
        <div className="gallery-item">
          <img src={image2} alt="Couple 3" />
        </div>
        <div className="gallery-item">
          <img src={image3} alt="Couple 4" />
        </div>
      </div>
    </section>
  );
}

export default Gallery;


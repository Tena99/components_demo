import profile1 from "../../assets/profile1.jpg";
import "./styles.css";

function Card({ imageSrc, title, text }) {
  return (
    <section className="card">
      <img className="card-image" src={imageSrc} alt="person_photo" />
      <h4>{title}</h4>
      <p>{text}</p>
    </section>
  );
}

export default Card;

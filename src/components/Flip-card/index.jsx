import "./styles.css";

function Flip_Card({ imgSrc, title, profession, comment }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imgSrc} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          <h1>{title}</h1>
          <p>{profession}</p>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
}

export default Flip_Card;

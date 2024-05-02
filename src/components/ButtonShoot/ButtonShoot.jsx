
import './ButtonShoot.css';


function ButtonShoot({text,onClick, animatonEspClass=""}) {
  return (
<button  className={`pushable ${animatonEspClass}`} onClick={onClick}>
  <span className="shadow"></span>
  <span className="edge"></span>
  <span className="front">
 {text}
  </span>

</button>

  );
}

export default ButtonShoot;

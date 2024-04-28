
import './ButtonShoot.css';


function ButtonShoot({text,onClick}) {
  return (
<button  className="pushable" onClick={onClick}>
  <span className="shadow"></span>
  <span className="edge"></span>
  <span className="front">
 {text}
  </span>

</button>

  );
}

export default ButtonShoot;

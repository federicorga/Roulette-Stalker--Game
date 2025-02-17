import { Link } from "react-router-dom";
import './ButtonGeneric.css'
function ButtonGeneric({titleButton="Button",linkDirection="", ClassBtnGeneric='btnGenericClass'}) {
  return (

            <button className='pushable'>
            <div>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className={ClassBtnGeneric}>
            <Link to={linkDirection}>{titleButton}</Link>
            </span>
            </div>
          
            </button>
      
  );
}

export default ButtonGeneric;

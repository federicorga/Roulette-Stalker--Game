
import React from 'react';

import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
 
  BrowserRouter as Router,
} from "react-router-dom";

import { Link } from 'react-router-dom';


import RouletteGame from './components/RouletteGame';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {RouletteFunctionsProvider} from './components/providers/RouletteFunctionsProvider';
import Menu from './components/Menu/Menu';

function ReloadButton() {
    
  window.location.reload(); // Recargar la página
};


const action = useNavigationType();
const location = useLocation();
const pathname = location.pathname;

useEffect(() => {
  if (action !== "POP") {
    window.scrollTo(0, 0);
  }
}, [action, pathname]);

useEffect(() => {
  let title = "";
  let metaDescription = "";

  switch (pathname) {
    case "/":
      title = "";
      metaDescription = "";
      break;
  }

  if (title) {
    document.title = title;
  }

  if (metaDescription) {
    const metaDescriptionTag = document.querySelector(
      'head > meta[name="description"]'
    );
    if (metaDescriptionTag) {
      metaDescriptionTag.content = metaDescription;
    }
  }
}, [pathname]);



const App = () => {

  return (
    <Router>
    <>
   
    <RouletteFunctionsProvider>

      <section className='section-titulo-ruleta'>
      <h1>R.U.L.E.T.A ~ <img className='img-ruleta-titulo' src="/img/cargando.webp" alt="" /> ~ S.T.A.L.K.E.R</h1>

      </section>

      <Routes> 
      <Route path="/" element={  
      <div className='content-buton-playgame-menu'>
            <button className='pushable' onClick={ReloadButton}>
            <span className="shadow"></span>
            <span className="edge"></span>
            <span className="front-initial">
              
            <Link to="/select">iniciar Juego</Link>
            </span>
            </button>
       </div>}></Route>
      <Route path="/select" element={ <Menu></Menu>}></Route>
     
      <Route path="/game" element={ <RouletteGame />}></Route>
      
      </Routes>
   

      </RouletteFunctionsProvider>

      <ToastContainer/>
    </>
    </Router>
  );
};

export default App;

import { Button } from "./components/Button";
import { Div } from "./components/Teste";
import "./styles.css";

import { CgCloseO,CgUndo,CgSortAz,CgMenu,CgEye } from "react-icons/cg";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { AiFillCaretDown } from "react-icons/ai";

// BsFillCaretLeftFill AiFillCaretDown
export default function App() {
  return (
    <div className="App">

      <div className="organize"> {/* Button Login */}
        <Button
          onClick={() => {}}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--little"
        >
          Login
        </Button>
      </div>

      <div className="organize"> {/* Button Entrar */}
        <Button
          onClick={() => {}}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--little"
        >
          Entrar
        </Button>
      </div>


      <div className="organize"> {/* Button Register */}
        <Button
          onClick={() => {}}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--little"
        >
          Cadastrar
        </Button>
      </div>

      <div className="organize"> {/* Button Items */}
        <Button
          onClick={() => {}}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--medium"
        >
          Papel
        </Button>
      </div>

      <div className="organize"> {/* Button Points */}
        <Button
          onClick={() => {}}
          type="button"
          buttonStyle="btn--second--solid"
          buttonSize="btn--wide"
        >
        <p className="p">Ver pontos de coleta</p><p className="icon"><CgEye /></p> 
        </Button>
      </div>

      <div className="organize"> {/* Button Filter */}
        <Button
          onClick={() => {}}
          type="button"
          buttonStyle="btn--second--solid"
          buttonSize="btn--wide"
        >
        <p className="p2">Filtrar</p><p className="icon2"><CgSortAz /></p> 
        </Button>
      </div>

      <div className="organize"> {/* Button Ofert */}
        <Button
          onClick={() => {}}
          type="button"
          buttonStyle="btn--second--solid"
          buttonSize="btn--wide"
        >
        <p className="p3">Ofertar Recicláveis</p><p className="icon3"><CgUndo /></p> 
        </Button>
      </div>

      <div className="organize"> {/* Button Menu */}
        <Button
          onClick={() => {}}
          type="button"
          buttonStyle="btn--second--solid"
          buttonSize="btn--square"
        >
          <CgMenu />
        </Button>     
      </div>

      <div className="organize"> {/* Button Close */}
        <Button
          onClick={() => {}}
          type="button"
          buttonStyle="btn--second--solid"
          buttonSize="btn--circle"
        >
         <CgCloseO />
        </Button>     
      </div>

      <div className="organize"> {/* Button Login */}
        <Button
          onClick={() => {}}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--square2"
        >
          <BsFillCaretLeftFill />
        </Button>
      </div>

      <div className="organize"> {/* Button Login */}
        <Button
          onClick={() => {}}
          type="button"
          buttonStyle="btn--primary--solid"
          buttonSize="btn--square2"
        >
          <AiFillCaretDown />
        </Button>
      </div>

      <div className="organize"> {/* Div Alert */}
        <Div
          // onClick={() => {}}
          type="div"
          divStyle="div--primary--solid"
          divSize="div--medium"
        >
          <p className="text">Error :(</p>
            <div className="divButton">
              <Button
                onClick={() => {}}
                type="button"
                buttonStyle="btn--second--solid"
                buttonSize="btn--circle"
              >
                <CgCloseO />
              </Button> 
            </div> 
        </Div>
      </div>
      
    </div>
  );
}

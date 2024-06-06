import { useState } from 'react'
import AccordionExample from './Acordion'
import Carousel from './Carousel'
import IconExample from './Icon'
// import ModalExample from './Modal'


import { Button, Icon } from "@ussebastian/kitdigital-react/dist/uss-react.es.js";
const App=()=> {
  const [modalState, setModalState] = useState(false);
  const handlePress = () => {
    setModalState(!modalState);
  };
  return (
    <>
     <div style={{display:"flex",flexDirection:"row"}}>
      <h2 className='px-24 py-24'>Juegos que estan en stream </h2>
      <div className="col-3 my-8 flex justify-content-center align-items-center">
        <Button
          onClick={() => {
           
            window.toggleTheme();
          }}
          variant="theme-toggle"
        >
          <Icon icon="" /> {/* se asigna automaticamente */}
        </Button>
      </div>
      <div className="col-3 my-8 flex justify-content-center align-items-center">
        <Button
          variant="primary"
          onClick={handlePress}
        >
         Abrir Modal
        </Button>
     
      </div>
    </div> 
    {/* Descomentar esto y ver el error */}
    {/* <ModalExample/> */}
    <Carousel/>
    <IconExample/>
      <AccordionExample />
          

      
       
    </>
  )
}

export default App

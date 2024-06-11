import { useState } from "react";

import { Modal } from "@ussebastian/kitdigital-react/dist/uss-react.es.js";
import { Button } from "@ussebastian/kitdigital-react/dist/uss-react.es.js";

const ModalExample = () => {
  const [modalState, setModalState] = useState(false);

  const handlePress = () => {
    setModalState(!modalState);
  };

  const performAction = () => {
    alert("Action performed");
    handlePress();
  };

  return (
    <div className="w-full mx-auto my-40">
      <div>
        <Button variant="secondary" onClick={handlePress}>
          Modal de ejemplo
        </Button>
        <Modal isOpen={modalState} setOpen={setModalState}>
          <Modal.Body iconVariant="success">
            <h4>Lorem ipsum</h4>
            <p>
              Lectus magna fringilla urna, porttitor rhoncus dolor purus non
              enim praesent elementum facilisis leo, vel fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam quis
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handlePress}
              className={"justify-content-center col-6 col-sm-3"}
            >
              Volver
            </Button>
            <Button
              variant="primary"
              onClick={performAction}
              className={"justify-content-center col-6 col-sm-3"}
            >
              Acción
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ModalExample;

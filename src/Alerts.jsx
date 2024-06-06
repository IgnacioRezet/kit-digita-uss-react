import { AlertMessage } from "@ussebastian/kitdigital-react/dist/uss-react.es.js";

 const AlertMessageExample = ({titulo, mensaje, tipo}) => {
  return (
    <div className="container my-40  ">
      <div className="col-10 mx-auto">
        <AlertMessage
          className="mb-20"
          title={titulo}
          variant={tipo}
          onClose={() => console.log("close info")}
        >
          <p>
            {mensaje}
          </p>
        </AlertMessage>
       
      </div>
    </div>
  );
};

export default AlertMessageExample;
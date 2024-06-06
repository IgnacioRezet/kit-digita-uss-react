import { Accordion, AccordionItem } from "@ussebastian/kitdigital-react/dist/uss-react.es.js";
import AlertMessageExample from './Alerts'
const AccordionExample=()=> {
  return (
    <div className="mx-auto p-32 w-full">
      <Accordion autoClose={true}>
        <AccordionItem title="título de item #1 de acordeón" open={true}>
          <AlertMessageExample 
            mensaje={'Con estrella. Lorem ipsum dolor sit amet consectetur, link adipisicing elit. Optio incidunt exercitationem distinctio ipsum mollitia! Rem facere, sequi quibusdam veniam, voluptate provident culpa sint et vitae corporis ab. Culpa, iure totam!'}
            titulo={'Información importante'}
            tipo={'info'}
            />
        </AccordionItem>
        <AccordionItem title="título de item #2 de acordeón">
        <AlertMessageExample 
            mensaje={'Con estrella. Lorem ipsum dolor sit amet consectetur, link adipisicing elit. Optio incidunt exercitationem distinctio ipsum mollitia! Rem facere, sequi quibusdam veniam, voluptate provident culpa sint et vitae corporis ab. Culpa, iure totam!'}
            titulo={'Información importante'}
            tipo={'warning'}
            />
        </AccordionItem>
        <AccordionItem title="título de item #3 de acordeón">
        <AlertMessageExample 
            mensaje={'Con estrella. Lorem ipsum dolor sit amet consectetur, link adipisicing elit. Optio incidunt exercitationem distinctio ipsum mollitia! Rem facere, sequi quibusdam veniam, voluptate provident culpa sint et vitae corporis ab. Culpa, iure totam!'}
            titulo={'Información importante'}
            tipo={'error'}
            />
        </AccordionItem>
        <AccordionItem title="título de item #3 de acordeón">
        <AlertMessageExample 
            mensaje={'Con estrella. Lorem ipsum dolor sit amet consectetur, link adipisicing elit. Optio incidunt exercitationem distinctio ipsum mollitia! Rem facere, sequi quibusdam veniam, voluptate provident culpa sint et vitae corporis ab. Culpa, iure totam!'}
            titulo={'Información importante'}
            tipo={'success'}
            />
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionExample;
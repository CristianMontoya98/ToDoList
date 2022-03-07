import React, { useState } from "react";
import './FormTodo.scss';
const FormTodo = (props) => {
   const [description, setDescription] = useState("");
   const { handleAddItem } = props;
   const handleSubmit = e => {
      e.preventDefault();
      handleAddItem({
         done: false,
         id: (+new Date()).toString(),
         description
      });
      console.log(description);
      setDescription("");
   }

   return(
      <form onSubmit={handleSubmit}>
         <h2>Esta es la prueba de GIT para practica</h2>
         <h3>Cambio Cristian</h3>
         <div className="todo-list">
            <div className="file-input">
               <input type="text" className="text" value={description} onChange={e => setDescription(e.target.value)}/>
               <button className="button" disabled={description ? "" : "disabled"}>Add</button>
            </div>
         </div>
         <h4>CAMBIO DE HERNANDO EN MAYUSCULAS</h4>
         <h4>Cambios realizados por Hernando2</h4>
         <h4>Cambios realizados por Hernando3</h4>
      </form>
   )
}

export default FormTodo;
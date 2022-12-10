import React from "react";
import Card from "../Components/Card";
import { useEstadoGlobal } from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {favoriteDentists} = useEstadoGlobal();

  return (
    <div>
      <h1>Dentists Favs</h1>
      {favoriteDentists.length === 0 
        ? <h5 style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>Go back to back to our home page to add any dentists as your favorites.</h5>
        : <div className="card-grid">
          {favoriteDentists?.map(dentist => (<Card key={dentist.id} id={dentist.id} username={dentist.username} name={dentist.name} />))}
          </div>
      }
    </div>
  );
};

export default Favs;

import React from "react";
import { Link } from "react-router-dom";
import { useEstadoGlobal } from "./utils/global.context";



const Card = ({ name, username, id }) => {
  const {favoriteDentists, dispatchFavorites} = useEstadoGlobal();

  let isFavorite = favoriteDentists.some(dentist => dentist.id === id);

  // Aqui iria la logica para agregar la Card en el localStorage
  const addFav = (name, username, id) => {
    dispatchFavorites({
      type: "ADD",
      payload: {
        id,
        username,
        name
      }
    });
  }

  const deleteFav = (id) => {
    dispatchFavorites({
      type: "REMOVE",
      payload: {
        id
      }
    });
  }

  return (
    <>
    <div className="card">
        <img src="./images/doctor.jpg" alt="dentist portrait" />
        <Link to={"/dentist/" + id}>
          <h3>{name}</h3>
        </Link>
        <p>{username}</p>
        {isFavorite
          ? <button onClick={() => deleteFav(id)} className="removeButton"></button>
          : <button onClick={() => addFav(name, username, id)} className="favButton"></button>
        }
    </div>
    </>
  );
};

export default Card
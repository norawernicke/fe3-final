import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const [dentista, setDentista] = useState({})
  const [notFound, setNotFound] = useState(false)
  const { id } = useParams();

  useEffect(()=> {
    async function fetchData() {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      setNotFound(!response.ok);
      let info = await response.json();
      return info;
    }
    fetchData().then(data => {
      setDentista(data);
    })
  }, [id])

  return (
    <>
      {notFound 
      ? <h1>Dentist N{id} is not found!</h1> 
      : <>
        <h1>Detail Dentist id {id}</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{dentista.name}</td>
              <td>{dentista.email}</td>
              <td>{dentista.phone}</td>
              <td>{dentista.website}</td>
            </tr>
          </tbody>
        </table>
        </>}
    </>
  )
}

export default Detail
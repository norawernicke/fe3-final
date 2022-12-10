import React from 'react'
import Card from '../Components/Card'
import { useEstadoGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context



const Home = () => {
  const {dentists} = useEstadoGlobal();
  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists?.map(dentist => (<Card key={dentist.id} id={dentist.id} username={dentist.username} name={dentist.name} />))}
      </div>
    </main>
  )
}

export default Home
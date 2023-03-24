import React from 'react'
import Modales from '../modales.json'
import Card from '../components/Card'


const {modales} = Modales

const Modals = () => {
  return (
    <div className=' '>
     <section className='container mt-5 '>
       
       {modales.map(verb=>(
            <Card 
            key={verb.id}
            verb={verb}
            />
       ))}
       
        
      </section>
    </div>
  )
}

export default Modals

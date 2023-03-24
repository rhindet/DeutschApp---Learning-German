import React from 'react'
import Card from '../components/Card'
import Verbos from '../db.json'



const {verbos} = Verbos


   
const Verbs = () => {

   

  return (
    <div>
     
      <section className='container mt-5 '>
       
       {verbos.map(verb=>(
            <Card 
            key={verb.id}
            verb={verb}
            />
       ))}
       
        
      </section>
    </div>
  )
}

export default Verbs

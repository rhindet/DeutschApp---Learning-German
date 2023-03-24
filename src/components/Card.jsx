import React, { useState } from 'react'



const Card = ({verb}) => {

   const {palabra} = verb
   const {traduccion} = verb

   const [verbo,setVerbo] = useState(palabra)
   const [flipped,setFlipped] = useState(false)
   const [color,setColor] = useState()

   
  const flipCard = () =>{


       if(flipped === false){
            setVerbo(traduccion)
            setColor('color')
            setFlipped(true)
       }else{
        setVerbo(palabra)
        setFlipped(false)
        setColor('')
       }
        
  }
  return (
    <button 
    onClick={flipCard}
    className={ `card-item ${color}`}>
       {verbo}
    </button>
  )
}

export default Card

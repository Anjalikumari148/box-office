import React from 'react'
import ActorCard from './actorCard'
import IMAGE_NOT_FOUND from '../../image/images.png'

function actorGrid({data}) {
  return (
   <div>
    {
      data.map(({person}) => (
       <ActorCard key={person.id}
       name ={person.name}
       country ={person.country?person.country.name:null}
       birthday ={person.birthday}
       deathday ={person.deathday}
       gender ={person.gender}
       image= {person.image?person.image.medium:IMAGE_NOT_FOUND}
       
       />
      ) )
    }
   </div>
  )
}

export default actorGrid
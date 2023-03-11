import React from 'react'
import ShowCard from './showCard'
import IMAGE_NOT_FOUND from '../../image/images.png'
import { FlexGrid } from '../styled'

// we defined everything we need inside our card & images we did if found show the image if not show not found image

function showGrid({data}){
  return (
    <FlexGrid>
   {data.map(({show})=> (
   <ShowCard key={show.id} id ={show.id} 
   n ame ={show.name} 
   image={show.image?show.image.medium:IMAGE_NOT_FOUND}
   summary = {show.summary}
   />
   ))
  }
  </FlexGrid>
  )
}

export default showGrid
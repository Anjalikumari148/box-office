/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import ShowCard from './showCard'
import IMAGE_NOT_FOUND from '../../image/images.png'
import { FlexGrid } from '../styled'
import { useShows } from '../../misc/customHook'

// we defined everything we need inside our card & images we did if found show the image if not show not found image

function showGrid({data}){
  const [starredShows,dispatchStarred] = useShows();


  return (
    <FlexGrid>
   {data.map(({show}) => {
    const isStarred = Array(starredShows).includes(show.id)

    const onStarClick =() =>
    {
         if(isStarred){
         dispatchStarred( {type:'REMOVE',showId:show.id})
         }
         else{
          dispatchStarred({type:'ADD' ,showId: show.id})
         }
    }

    return(

      <ShowCard key={show.id} id ={show.id} 
        name ={show.name} 
        image={show.image?show.image.medium:IMAGE_NOT_FOUND}
        summary = {show.summary}
        onStarClick ={onStarClick}
       
        />
        
    )
   })
  }
  </FlexGrid>
  )
}

export default showGrid
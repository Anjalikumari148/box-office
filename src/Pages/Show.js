/* eslint-disable no-underscore-dangle */
import React, {useEffect,useReducer} from 'react'
import {useParams} from 'react-router-dom'
import { apiGet } from '../misc/config';
import ShowMainData from '../Components/show/showMainData';
import Detail from '../Components/show/Detail';
import Seasons from '../Components/show/seasons';
import Cast from '../Components/show/cast';
import {ShowPageWrapper,InfoBlock} from './ShowStyled';



const initialState ={
  show:null,
  Loading:true,
  error:null
}

const reducer = (Prevstate,action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': 
    return{
     Loading :false,
     show:action.show,
     error: null
    }
    case 'FETCH_FAIL': 
    return {
       ...Prevstate,
        Loading:false,
        error:action.error

      }

    default:
      return Prevstate;
    
  }
}



function Show() {
const {id} = useParams();
const[{show,Loading,error},dispatch] = useReducer(reducer,initialState) 

// const[show,setShow] =useState(null)
// const[Loading,setIsLoading] = useState(true)
// const[error,setError] =useState(null)



useEffect(() =>{
   let isMounted = true

  apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
    setTimeout(()=>{
      if(isMounted){
        dispatch({ type:'FETCH_SUCCESS' ,show :results})
       
      } 
    },2000)
   
  }).catch(err =>{
    if (isMounted){
      dispatch({ type:'FETCH_FAIL' ,error:err.message})
    
    }
   
  })

  return () =>{
    isMounted = false
  }

},[id])
 
 if(Loading){
  return <div> The data is Loading </div>
}

if (error){
  return <div>
    error occured: {error}
  </div>
}
  
  return (
<ShowPageWrapper>
 <ShowMainData image={ show.image}
 name={show.name}
  rating={show.rating} 
  summary={show.summary} 
  tags= {show.genres} />
<InfoBlock>
  <h2> Details </h2>
  <Detail status={show.status} 
  network={show.network}
   premiered={show.premiered}
  /> 
</InfoBlock>

<InfoBlock>
  <h2>Seasons </h2>
  <Seasons seasons ={show._embedded.seasons}/>
</InfoBlock>

<InfoBlock>
  <h2> Cast  </h2>
  <Cast cast={show._embedded.cast} />
</InfoBlock>
      
       </ShowPageWrapper>
  )
}

export default Show;
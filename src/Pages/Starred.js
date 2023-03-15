import React ,{ useState ,useEffect} from 'react'
import MainPageLayout from '../Components/MainPageLayout'
import { useShows } from '../misc/customHook'
import {apiGet} from '../misc/config'

function Starred() {


    const [state] =useShows()

    const[shows,setShows]= useState(null);
    const[isLoading,setIsLoading]= useState(true);
    const[error,setError] = useState(null);

    useEffect(()=>{
        if(state && state.length>0)
        {
         const promises = state.map((showId) =>apiGet(`/shows/${showId}`))
        //  starred.map(showId =>apiGet(`/shows/${showId}`));

          Promise.all(promises)
          .then(apiData =>apiData.map(show=>({show})) )
          .then(
            results =>{
                setShows(results)
                setIsLoading(false)
             }).catch(err=>{
                setError(err.message)
                setIsLoading(false)
             })
        }
        else {
            setIsLoading(false)
        }
    } ,[state])

   

    return ( 
       <MainPageLayout>
        {isLoading && <div>Shows are still loading</div>}
         {error && <div>error occured:{error} </div>}
         {!isLoading && !shows && <div>No Shows are added</div>}
         {!isLoading && !error && shows && <showGrid data={shows}/>}
       </MainPageLayout>
    )
}

export default Starred

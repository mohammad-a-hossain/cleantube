
 import { useState,useEffect } from 'react';
 import getPlayList  from '../API/index';
 import storage from '../Utitls/storage';
 
 
 
 const INITIAL_STATE= {
      playLists: {},
      recentPlayLists:[],
      favouratePlayLists:[]
 }
 const STORAGE_KEY='local_storage_key'
 
 const usePlayLists = () => {
 
 const [state, setState] = useState(INITIAL_STATE)
 
 useEffect(()=>{
      const state = storage.get(STORAGE_KEY) 
      if(state){
         setState({...state})
      }
 },[])
 
 useEffect(() => {
     if(state !== INITIAL_STATE){
         storage.save(STORAGE_KEY,state)
     }
 }, [state])
 
 
 
 const [error,setError] = useState('')
 const [loading,setLoading] = useState(false)
 
  const getPlayListById = async(playlistId, refresh = false)=>{
        
        if(state.playLists[playlistId] && !refresh){
         return 
        }
 
      setLoading(true)
      
        try{
 
          const  playList = await getPlayList(playlistId)
          console.log(playList)
             setError('')
             setState((prev) =>({
                 ...prev,
                 playLists:{
                     ...prev.playLists,
                     [playlistId]:playList,
                 },
             
              }));
        } catch(e){
          setError ( 
             e.response?.data?.error?.message || 'something went wrong'
              );
         
        }finally{
          setLoading(false);
        } 
 
  };
 
  
  const addToRecent = (playlistId) =>{
     setState((prev) => ({
         ...prev,
         recents: [...prev, playlistId],
     }));
  }
  const addToFavourite=(playlistId)=>{
     setState((prev) =>({
         ...prev,
         favouratePlayLists:[...prev, playlistId]
 
     }))
 }
 
 const getPlayListsByIds=(ids=[])=>{
     return ids.map( (id) => state.playLists[id])
 }
 
 
 return {
     playLists: state.playLists,
     recentPlayLists: getPlayListsByIds(state.recentPlayLists),
     favouratePlayLists: getPlayListsByIds(state.favouratePlayLists),
     error,
     loading,
     addToRecent,
     addToFavourite,
     getPlayListById
 }
 
 }
 export default usePlayLists;



/* part =2 using localstoreage -----------------------------------



 import { useState,useEffect } from 'react';
import getPlayList  from '../API/index';
import storage from '../Utitls/storage';



const INITIAL_STATE= {
     playLists: {},
     recentPlayLists:[],
     favouratePlayLists:[]
}
const STORAGE_KEY='local_storage_key'

const usePlayLists = () => {

const [state, setState] = useState(INITIAL_STATE)

useEffect(()=>{
     const state = storage.get(STORAGE_KEY) 
     if(state){
        setState({...state})
     }
},[])

useEffect(() => {
    if(state !== INITIAL_STATE){
        storage.save(STORAGE_KEY,state)
    }
}, [state])



const [error,setError] = useState('')
const [loading,setLoading] = useState(false)

 const getPlayListById = async(playlistId, refresh = false)=>{
       
       if(state.playLists[playlistId] && !refresh){
        return 
       }

     setLoading(true)
     
       try{

         const  playList = await getPlayList(playlistId)
         console.log(playList)
            setError('')
            setState((prev) =>({
                ...prev,
                playLists:{
                    ...prev.playLists,
                    [playlistId]:playList,
                },
            
             }));
       } catch(e){
         setError ( 
            e.response?.data?.error?.message || 'something went wrong'
             );
        
       }finally{
         setLoading(false);
       } 

 };

 
 const addToRecent = (playlistId) =>{
    setState((prev) => ({
        ...prev,
        recents: [...prev, playlistId],
    }));
 }
 const addToFavourite=(playlistId)=>{
    setState((prev) =>({
        ...prev,
        favouratePlayLists:[...prev, playlistId]

    }))
}

const getPlayListsByIds=(ids=[])=>{
    return ids.map( (id) => state.playLists[id])
}


return {
    playLists: state.playLists,
    recentPlayLists: getPlayListsByIds(state.recentPlayLists),
    favouratePlayLists: getPlayListsByIds(state.favouratePlayLists),
    error,
    loading,
    addToRecent,
    addToFavourite,
    getPlayListById
}

}
export default usePlayLists; */



 



/* 
 PART -1

import { useState } from 'react';
import getPlayList from '../API/index';
import getPlayList from './../API/index';
import storage from './../Utitls/storage';

const usePlayLists =()=>{
const [state, setState] = useState({
     playLists: {},
     recentPlayLists:[],
     favouratePlayLists:[]
})
const [error,setError] = useState('')
const [loading,setLoading] = useState(false)

 const getPlayListById = async(playListId, refresh = false)=>{
       
       if(state.playLists[playListId] && !refresh){
        return 
       }
     setLoading(true)
       let result
       try{
       result  = await getPlayList(playListId)
       setError('')
       }catch(e){
        //console.log('eerro',e.response?.data?.error?.message)
    
         setError(e.response?.data?.error?.message || 'something went wrong')
        
       }finally{
         setLoading(false)
       }

       let c_id, c_title

       result = result.map((item)=>{
        const {
            channelId,
            title,
            channelTitle,
            description,
            thumbnails:{medium}

        }= item.snippet 

        if(!c_id){
          c_id = channelId
        }
        if(!c_title){
            c_title = channelTitle
        }
     return {
            title,
            description,
            thumbnails:medium,
            contentDetails:item.contentDetails
        }
       })
       setState((prev) =>({
        ...prev,
        playLists:{
            ...prev.playLists,
            [playListId]:{
                items:result,
                playListId:playListId,
                channelId:c_id,
                channelTitle:c_title
            }
        }
       }))
            
 }
 
 const addToRecent=(playListId)=>{
        setState((prev) =>({
            ...prev,
           recentPlayLists:[...prev, playListId]

        }))
 }
 const addToFavourite=(playListId)=>{
    setState((prev) =>({
        ...prev,
        favouratePlayLists:[...prev, playListId]

    }))
}

const getPlayListsByIds=(ids=[])=>{
    return ids.map( id => state.playLists[id])
}


return {
    playLists: state.playLists,
    recentPlayLists: getPlayListsByIds(state.recentPlayLists),
    favouratePlayLists: getPlayListsByIds(state.favouratePlayLists),
    error,
    loading,
    addToRecent,
    addToFavourite,
    getPlayListById
}
}
export default usePlayLists  */
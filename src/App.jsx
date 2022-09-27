import React from 'react'
import usePlayLists  from './Hooks/usePlayList';
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';
import HomePage from './Components/Homepage';
import PlayerPage from './Components/PlayerPage/PlayerPage';
import NotFound from './Components/Notfound';


 

const  App =()=> {
 // const playlists = useStoreState((state) => state.playlists)
//console.log(playlists)
  //const playListst= useStoreActions((actions)=>actions.playlist)
   
    const { getPlayListById, error,playLists} = usePlayLists()
       console.log(playLists)
     const playListArray = Object.values(playLists)
    
 

  return (
    <BrowserRouter>
    <Navbar getPlayListById={getPlayListById} />
    <CssBaseline  />
       <Routes>
       <Route path='/' element={<HomePage  playListArray={playListArray}/>}/>
       <Route path='/player/:playlistId' element={<PlayerPage playLists={playLists}/>}/>
       <Route path='*' element={<NotFound/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App

























/* 
part another




//const playlistId = 'PLO29h8bw3kpJo4kQDgeckVIiJBg4lRhb0'



/* const HomePage =({playListArray})=>{

  const playlist= useStoreActions((actions)=> actions.playlist)
  console.log(playlist)
  u/seEffect(()=>{
      playlist.getPlayList(playlistId)
  },[])

  return(
    <Container maxWidth={'lg'} sx={{ my: 16 }}>
			{playListArray.length > 0 && (
				<Grid container alignItems='stretch'>
					{playListArray.map((item) => (
						<Grid item xs={12} md={6} lg={4} mb={2}>
							<PlaylistCardItem
								key={item.playlistId}
								playlistId={item.playlistId}
								playlistThumbnail={item.playlistThumbnail}
								playlistTitle={item.playlistTitle}
								channelTitle={item.channelTitle}
							/>
						</Grid>
					))}
				</Grid>
			)}
		</Container>
  )
} */



/* 
const NotFound =()=>{
  return(
    <Container  maxWidth={'lg'} sx={{my:13}}>
  <Typography variant='h2' align={'center'}>
					not found this page
				</Typography>
  </Container>
  )
  
}
 */

/* const PlayerPage =({playLists})=>{
  const {playlistId} = useParams()
  const currentId= playLists[playlistId]
  console.log(currentId)
  return(
    <Container  maxWidth={'lg'} sx={{my:13}}>
  <Typography variant='h2' align={'center'}>
				{currentId.playlistTitle}
				</Typography>
        <Typography variant='body1' >
				{currentId.playlistDescription}
				</Typography>
  </Container>
  )
  
}
*/

/* 



part -1 
import usePlayLists  from './Hooks/usePlayList';
import CssBaseline from '@mui/material/CssBaseline'
import Navbar from "./Components/Navbar";
import PlaylistCardItem from './Components/CardItem/index';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { action } from 'easy-peasy';
import getPlayList from './API/index';
import HomePage from './Components/Homepage/index';
import PlayerPage from './Components/PlayerPage/PlayerPage';


 
const  App =()=> {

    const { getPlayListById, error,playLists} = usePlayLists()

    const playListArray = Object.values(playLists)

//  console.log('playlist',playLists)
//  console.log('err',error)


  return (
    <>
    <CssBaseline  />
         <Container  maxWidth={'lg'} sx={{marginTop:16}} >
           <Navbar getPlayListById={getPlayListById} />
           {
            playListArray.length > 0 && ( 
              <Grid container alignItems={'stretch'}>
             
             { playListArray.map((item)=>( 
              <Grid  item sx={12} md={6} lg={4}>
              <PlaylistCardItem 
               key={item.id}
               playlistThumbnail={item.playlistThumbnail}
               playlistTitle={item.playlistTitle}
               channelTitle ={item.channelTitle}
             
              /> 
              </Grid>
            ))}  
              </Grid>
          
              )}
    
         
            </Container>
     
    </>
  )
}

export default App
 */
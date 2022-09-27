import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import YouTubeVideo from './../video/index';
import Grid from '@mui/material/Grid';



  const opts = {
    height: '390',
    width: '340',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
 

const PlayerPage =({playLists})=>{ 
     
  const onReady= (e)=> {
    // access to player in all event handlers via event.target
    e.target.pauseVideo();
  }
 

   // console.log(playLists)
    const {playlistId} = useParams()
    const currentId= playLists[playlistId]
   //console.log(currentId)


    return(
      <Container maxWidth={'lg'} sx={{ my: 16 }}>
      <Grid container alignItems='stretch'>


        <Grid item xs={12} md={4} lg={3} mb={2} >
         
    
            <Typography variant='body1' align={'center'}>
               <h1>recents</h1>  
            </Typography>
            <Typography variant='body1' >
                 <p>list of recent</p>
            </Typography>
        </Grid>    




        <Grid item xs={12} md={4} lg={6} mb={2}  >
          <YouTubeVideo videoId={playlistId} opts={opts} onReady={()=>onReady(e) } />
          <Typography variant='h5'  align={'center'}>
                {currentId.playlistTitle}
          </Typography>
          <hr></hr>
          <Typography variant='body1' >
                {currentId.playlistDescription}
          </Typography>
      </Grid>
      
      


      <Grid item xs={12} md={4} lg={3} mb={2} >
      

        <Typography variant='body1'  align={'center'}>
             <h1>favourate</h1>
        </Typography>
        <Typography variant='body1' >
          list of items 
        </Typography>
    </Grid> 

      </Grid>
    </Container> 
    )
    
  }
  export default PlayerPage

  /* 
  
      <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>
    </Box>


  
  */
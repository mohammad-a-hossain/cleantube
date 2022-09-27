import React,{useEffect} from 'react'
import PlaylistCardItem from './../CardItem/index';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useStoreActions } from 'easy-peasy';
import getPlayList from './../../API/index';


const playlistId = 'PLO29h8bw3kpJo4kQDgeckVIiJBg4lRhb0'




    const HomePage =({playListArray})=>{

        const playlist= useStoreActions((actions)=> actions.playlists)
       console.log(playlist)
        useEffect(()=>{
            playlist.getPlaylist(playlistId)
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
      }

export default HomePage
import React from 'react';
import YouTube from 'react-youtube';



    const YouTubeVideo =({playlistId})=>{
     

        return(
            <YouTube 
            videoId={playlistId}
            
           />
        )
    }
    export default YouTubeVideo
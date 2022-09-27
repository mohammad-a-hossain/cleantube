import * as React from 'react';
import {useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Box, Button, Stack } from '@mui/material';
import { PlayCircleOutline } from '@mui/icons-material';
import { useStoreActions } from 'easy-peasy';

const PlaylistCardItem = ({ 
	playlistThumbnail,
	playlistTitle,
	channelTitle,
	playlistId
	
}) => {

	const favourates= useStoreActions((actions)=> actions.favourate)
	//console.log(favourates.addToFavourate())
     const [favourateData, setFavourateData] = useState([])

	  const addFav =(playlistId)=>{
		setFavourateData([ ...favourateData,favourates.addToFavourate(playlistId)])
	 }  

  
	console.log('fav',favourateData)


	return (
		<Card
		sx={{
			height: '100%',
			display: 'flex',
			flexDirection: 'column',
			margin: 1,
		}}
		>
			<CardMedia
				component='img'
				image={playlistThumbnail.url}
				alt={playlistTitle}
			/>
			<CardContent>
				<Typography variant='h6' color='text.primary'>
					{`${
						playlistTitle.length > 50
							? playlistTitle.substr(0, 50) + '...'
							: playlistTitle
					}`}
				</Typography>
				<Typography variant='body2' color='text.secondary'>
					{channelTitle}
				</Typography>
			</CardContent>
			<Box sx={{ flexGrow: 1 }}></Box>
			<CardActions disableSpacing>
				<Button to={`/player/${playlistId}`} component={Link}>
					<Stack direction={'row'} spacing={1} alignItems={'space-between'}>
						<PlayCircleOutline />
						
					
						<Typography  variant='body2' fontWeight={600}>
							Play
						</Typography>

						<Typography id={playlistId}  variant='body2' fontWeight={600}>
						<FavoriteBorderIcon onClick={()=>addFav(playlistId)} />
					    </Typography>	
						
					</Stack>
				</Button>
			</CardActions>
		</Card>
	);
};

export default PlaylistCardItem;
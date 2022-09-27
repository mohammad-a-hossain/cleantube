import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Stack } from '@mui/material';
import { Container } from '@mui/system';
import PlaylistForm from '../PlaylistForm';

const Navbar = ({getPlayListById}) => { //console.log('id',getPlayListById)
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
    const getPlaylistId = (playlistId) => {
		getPlayListById(playlistId);
		//console.log(playlistid)
	};


	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='fixed' color='default' sx={{ py: 2 }}>
				<Container maxWidth={'lg'}>
					<Toolbar>
						<Stack sx={{ flexGrow: 1 }}>
						
							<Link to ='/' component={RouterLink}
							sx={{ textDecoration: 'none', color: 'black' }} >
							<Typography variant='h4'>
									Clean Youtube
								</Typography>
							</Link>
								
							<Link   href='https://stacklearner.com'
							target={'_blank'}
							sx={{ textDecoration: 'none', color: 'black' }}> 
								<Typography variant='body1'>
									By Stack Learner
								</Typography>
								
								</Link>
							
						</Stack>
						<Button variant='contained' onClick={handleClickOpen}>
							Add Playlist
						</Button>
						<PlaylistForm
							open={open}
							handleClose={handleClose}
							getPlaylistId ={ getPlaylistId}
						/>
					</Toolbar>
				</Container>
			</AppBar>
		</Box>
	);
};

export default Navbar
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useStoreActions, action } from 'easy-peasy';

const PlaylistForm = ({ open, handleClose, getPlaylistId}) => {// console.log(getPlaylistId)
	const [state, setState] = useState('');
      console.log(state)
	//  const playlist = useStoreActions((actions)=> actions.playlists)
     // console.log(playlist)
 	const handleSubmit = () => {
		if (!state) {
			alert('Invalid State');
		} else {
	 
		//playlist.addPlaylist(state)
			getPlaylistId(state)
			setState('');
			handleClose();
		}
	};
 
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Add Playlist</DialogTitle>
			<DialogContent>
				<DialogContentText>
					To add a new playlist please insert the playlist id or
					playlist link. Please make sure the link is correct.
					Otherwise we won't able to fetch the playlist information.
				</DialogContentText>
				<TextField
					autoFocus
					margin='dense'
					label='Playlist ID or Link'
					fullWidth
					variant='standard'
					onChange={e => setState(e.target.value)}
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Cancel</Button>
				<Button  onClick={handleSubmit}>Add Playlist</Button>
			</DialogActions>
		</Dialog>
	);
};

export default PlaylistForm;
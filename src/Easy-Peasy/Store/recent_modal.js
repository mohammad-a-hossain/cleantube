import { action } from 'easy-peasy';

const recentModal ={
     items:[],
     addToRecent: action((state, playlistId)=>{
          state.items.unshift(playlistId);
		state.items = state.items.slice(0, 5);
     })
    
}
export default recentModal
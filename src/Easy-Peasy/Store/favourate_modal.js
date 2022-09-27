
import { action } from 'easy-peasy';

const FavourateModal ={
     items:[],
     addToFavourate: action((state, playlistId)=>{
      state.items.push(playlistId)
     }),
     removeFromFav: action((state,playlistId)=>{
     state.items = state.items.filter( (pId)=> playlistId !== pId)
     })
}
export default FavourateModal
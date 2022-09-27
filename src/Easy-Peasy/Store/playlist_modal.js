
import { action, persist, thunk } from "easy-peasy"
import getPlayList from './../../API/index';


const PlayListModal = persist({
  data: {},
	error: '',
	isLoading: false,

	addPlaylist: action((state, payload) => {
		state.data[payload.playlistId] = payload;
	}),
    setLoading: action((state, payload) => {
		state.isLoading = payload;
	}),
	setError: action((state, payload) => {
		state.error = payload;
	}),

  getPlaylist: thunk(
		async (
			{ addPlayList, setLoading, setError },
			playlistId,
			{ getState }
		) => {
			if (getState().data[playlistId]) {
				return;
			}
			setLoading(true);
			try {
				const playlist = await getPlayList(playlistId);
				addPlayList(playlist);
			} catch (e) {
				setError(
					e.response?.data?.error?.message || 'Something went wrong'
				);
			} finally {
				setLoading(false);
			}
		}
	),
})
export default PlayListModal







/* import { action, persist, thunk } from "easy-peasy"
import getPlayList from './../../API/index';


const PlayListModal = persist({
    items:[],
    id:'',
    title:'',
    description:'',
    thumbnail:'',
   
    

    setPlayListData: action((state,payload)=>{
      state = {...payload}
      return state
    }),

    getPlayListData: thunk(
      async({setPlayListData},payload) => {

        const {playlistId, playlistTitle,playlistDescription,
        playlistThumbnail,channelId,channelTitle,playlistItems
       }= await getPlayList(payload)

          setPlayListData({
            id:playlistId,
            title:playlistTitle,
            description:playlistDescription,
            thumbnail:playlistThumbnail,
            channelId:channelId,
            channelTitle:channelTitle
          })
      }
      ) 
    
} )

export default PlayListModal */
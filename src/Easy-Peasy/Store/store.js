import {createStore} from 'easy-peasy'

import PlayListModal from './playlist_modal'
import FavourateModal from './favourate_modal';
import recentModal from './recent_modal';

const store= createStore({
    playlists:PlayListModal,
    favourate:FavourateModal,
    recent:recentModal
})

export default store
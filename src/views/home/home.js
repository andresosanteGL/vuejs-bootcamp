import { head } from 'ramda';

import { filterBySearchTerm } from '../../utils/filterBySearchTerm';
import { SEARCH_MOCK_DATA } from '../../api/constants';
import TrackList from '../../components/track-list/track-list.vue';
import TrackDetail from '../../components/track-detail/track-detail.vue';

export default {
  name: 'Home',
  components: {
    TrackList,
    TrackDetail,
  },
  data() {
    return {
      category: '',
      podcasts() {
        return [];
      },
      podcastSearch: '',
    };
  },
  computed: {
    podcastListFiltered() {
      return filterBySearchTerm(this.podcastSearch, this.podcasts);
    },
    track() {
      return head(this.podcasts) || {};
    },
  },
  methods: {
    addFavorite(track) {
      console.log('addFavorite -> track', track);
    },
    removeFavorite(track) {
      console.log('removeFavorite -> track', track);
    },
  },
  mounted() {
    this.podcasts = SEARCH_MOCK_DATA;
  },
};

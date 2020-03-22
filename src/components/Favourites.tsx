import React, { useContext } from 'react';
import { Store } from '../Store';
import { IEpisode, IAction, IEpisodeProps } from '../interface'

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'))


const Favourites = (): JSX.Element => {

  const { state, dispatch } = useContext(Store);

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);

    if (episodeInFav) { //Episode exists
      const favWithoutEpisode = state.favourites.filter((fav: IEpisode) => fav.id !== episode.id);
      return dispatch({
        type: 'SUB_FAV',
        payload: favWithoutEpisode
      })
    } else { //Episode does not exist
      return dispatch({
        type: 'ADD_FAV',
        payload: episode
      })
    }
  }

  const props: IEpisodeProps = {
    episodes: state.favourites,
    favourites: state.favourites,
    toggleFavAction
  }


  return (
    <main className="main">
      <React.Suspense fallback={<div><h4>Loading...</h4></div>}>
        <section className="episode-layout">
          <EpisodeList {...props} />
        </section>
      </React.Suspense>
    </main>
  )
}

export default Favourites

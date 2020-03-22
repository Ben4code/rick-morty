import React, { useContext, useEffect } from 'react';
import { Store } from '../Store';
import { IEpisode, IAction, IEpisodeProps } from '../interface'


const EpisodeList = React.lazy<any>(() => import('./EpisodeList'))

const Home = ():JSX.Element => {
  //Get content from state.
  const { state, dispatch } = useContext(Store);

  const fetchDataAction = async () => {
    // const URL = 'http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const URL = 'https://api.tvmaze.com/singlesearch/shows?q=castlevania&embed=episodes'
    const res = await fetch(URL, {
      method: "GET",
        headers: {
            "Access-Control-Allow-Origin": URL
        }
    });
    const data = await res.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: data._embedded.episodes
    })
  }

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

  //Init Fetch
  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  const props: IEpisodeProps  = {
    episodes: state.episodes,
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

export default Home;

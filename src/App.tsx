import React, { useContext, useEffect } from 'react';
import { Store } from './Store'
// import EpisodeList from './components/EpisodeList'
import { IEpisode, IAction } from './interface'
import './app.css'


const EpisodeList = React.lazy<any>(() => import('./components/EpisodeList'))

function App(): JSX.Element {
  //Get content from state.
  const { state, dispatch } = useContext(Store);

  const fetchDataAction = async () => {
    // const URL = 'http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const URL = 'http://api.tvmaze.com/singlesearch/shows?q=castlevania&embed=episodes'
    const res = await fetch(URL);
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


  const props = {
    episodes: state.episodes,
    favourites: state.favourites,
    toggleFavAction
  }

  return (
    <div className="App">
      <header className="header">
        <div>
          <h1>Castlevania</h1>
          <p>Pick your favourite episode!</p>
        </div>

        <p>Favourites: {state.favourites.length}</p>
      </header>
      <main className="main">
        <React.Suspense fallback={<div><h4>Loading...</h4></div>}>
          <section className="episode-layout">
            <EpisodeList {...props} />
          </section>
        </React.Suspense>
      </main>
    </div>
  );
}

export default App;

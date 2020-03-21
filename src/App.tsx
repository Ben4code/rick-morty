import React, { useContext, useEffect } from 'react';
import { Store } from './Store'
import {IEpisode, IAction} from './interface'
import './app.css'


function App(): JSX.Element {
  //Get content from state.
  const { state, dispatch } = useContext(Store);

  const fetchDataAction = async () => {
    const URL = 'http://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes'
    const res = await fetch(URL);
    const data = await res.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: data._embedded.episodes
    })
  }

  const toggleFavAction = (episode: IEpisode): IAction => {
    const episodeInFav = state.favourites.includes(episode);

    if(episodeInFav){ //Episode exists
      const favWithoutEpisode = state.favourites.filter((fav:IEpisode) => fav.id !== episode.id);
      return dispatch({
        type: 'SUB_FAV',
        payload: favWithoutEpisode
      })
    }else{ //Episode does not exist
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

  return (
    <div className="App">
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episode!</p>
        </div>
        
        <p>Favourites: {state.favourites.length}</p>
      </header>
      <main className="main">
        <section className="episode-layout">
          {state.episodes.map((episode: IEpisode) => {
            const isFav = state.favourites.find((fav: IEpisode)=> fav.id === episode.id);
            return (
              <section className="episode-box" key={episode.id}>
                <img src={episode.image.medium} alt={`Rich and Morty- Episode: ${episode.name}`} />
                <div><h4>{episode.name}</h4></div>
                <section>
                  <div>
                  <p>Season: {episode.season} | Number: {episode.number}</p>
                  <button className={isFav ? 'btn btn-disabled':'btn'} type="submit" onClick={()=> toggleFavAction(episode)}>
                    {isFav ? 'Bookmarked' : 'Bookmark'}
                  </button>
                  </div>
                </section>
              </section>
            )
          })}
        </section>
      </main>
    </div>
  );
}

export default App;

import React, { useContext, useEffect } from 'react';
import { Store } from './Store'
import './app.css'


interface IEpisode {
  id: number
  url: string
  name: string
  season: number
  number: number
  airdate: string
  airtime: string
  airstamp: string
  runtime: number
  image: {
    medium: string,
    original: string
  }
  summary: string
}


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

  const toggleFavAction = (episode: IEpisode) => {
    return dispatch({
      type: 'ADD_FAV',
      payload: episode
    })
  }

  //Init Fetch
  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });

  return (
    <div className="App">
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episode!</p>
      </header>
      <main className="main">
        <section className="episode-layout">
          {state.episodes.map((episode: IEpisode) => {
            return (
              <section className="episode-box" key={episode.id}>
                <img src={episode.image.medium} alt={`Rich and Morty- Episode: ${episode.name}`} />
                <div><h4>{episode.name}</h4></div>
                <section>
                  <div>
                  <p>Season: {episode.season} | Number: {episode.number}</p>
                  <button type="submit" onClick={()=> toggleFavAction(episode)}>Fav</button>
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

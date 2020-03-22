import React from 'react'
import { IEpisode } from '../interface'

const EpisodeList = (props: any): JSX.Element => {
  const { episodes, toggleFavAction, favourites } = props
  return episodes.map((episode: IEpisode) => {
    const isFav = favourites.find((fav: IEpisode) => fav.id === episode.id);
    return (
      <section className="episode-box" key={episode.id}>
        <img src={episode.image.medium} alt={`Rich and Morty- Episode: ${episode.name}`} />
        <div><h4>{episode.name}</h4></div>
        <section>
          <div>
            <p>Season: {episode.season} | Number: {episode.number}</p>
            <button className={isFav ? 'btn btn-disabled' : 'btn'} type="submit" onClick={() => toggleFavAction(episode)}>
              {isFav ? 'Bookmarked' : 'Bookmark'}
            </button>
          </div>
        </section>
      </section>
    )
  })
}

export default EpisodeList

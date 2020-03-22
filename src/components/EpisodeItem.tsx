import React from 'react'

const EpisodeItem = (props: any): JSX.Element => {
  const {episode, isFav, toggleFavAction} = props;
  
  return (
    <div>
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
      </div>
  )
}

export default EpisodeItem;

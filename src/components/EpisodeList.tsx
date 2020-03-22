import React from 'react'
import { IEpisode } from '../interface'
import EpisodeItem from './EpisodeItem'


const EpisodeList = (props: any): JSX.Element => {
  const { episodes, favourites } = props;

  return episodes.map((episode: IEpisode) => {
    const isFav = favourites.find((fav: IEpisode) => fav.id === episode.id);

    const itemProps = {...props};
    itemProps.isFav = isFav;
    itemProps.episode = episode;

    return (
      <section className="episode-box" key={episode.id}>
        <EpisodeItem {...itemProps} />
      </section>
    )
  })
}

export default EpisodeList

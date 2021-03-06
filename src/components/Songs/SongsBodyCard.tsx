import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import ArtworkPlay from './ArtworkPlay';
import Heart from '../Heart';
import { Track } from '../../shared/types/soundCloud';
import { getImageUrl } from '../../utils/ImageUtils';
import { IMAGE_SIZES_LARGE } from '../../constants/ImageConstants';

type Props = {
  isActive: boolean;
  isPlaying: boolean;
  track: Track;
  onCardClick?: (track: Track) => void;
}

export default class SongsBodyCard extends Component<Props> {
  render() {
    const {
      isActive,
      isPlaying,
      track,
    } = this.props;

    const { artworkUrl, title, user } = track;
    const { avatarUrl, username } = user as any;
    return (
      <div className={`songs-body-card ${
        isActive ? 'songs-body-card--active' : ''
      }`}>
        <div className="songs-body-card__inner">
          <div 
            className="songs-body-card__artwork"
            style={{
              backgroundImage: `url(${ artworkUrl && getImageUrl(artworkUrl, IMAGE_SIZES_LARGE)})`,
            }}
            onClick={ () => this.props.onCardClick && this.props.onCardClick(track) }
            >
            <ArtworkPlay 
              isActive={isActive}
              isPlaying={isPlaying}
              />
          </div>
          <div className="songs-body-card__main">
            <div
              className="songs-body-card__avatar"
              style={{
                backgroundImage: `url(${getImageUrl(avatarUrl, IMAGE_SIZES_LARGE)})`,
              }}
            >
            </div>
            <div className="songs-body-card__details">
              <Link 
                to=""
                className="songs-body-card__title"
                >
                  { title }
              </Link>
              <Link
                to=""
                className="songs-body-card__username"
                >
                  { username }
              </Link>
            </div>
            <Heart 
              className="songs-body-card__heart popover--right"
            
            />
          </div>
        </div>
      </div>
    )
  }
}

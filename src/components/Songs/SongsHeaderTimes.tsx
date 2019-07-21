import React, { Component } from 'react';
import { TIMES } from '../../constants/PlaylistConstants';
import { Link } from 'react-router-dom';
import { LocationDescriptor } from 'history';


type Props = {
  activeIndex: number;
  times: typeof TIMES;
  handleLinkTo: (query: string, key: string) => LocationDescriptor;
};

export default class SongsHeaderTimes extends Component<Props> {
  render() {
    const { activeIndex, times, handleLinkTo } = this.props;
    return (
      <div className="songs-header__times">
        <div className="songs-header__times__inner">
          <i className="songs-header__times__icon ion-funnel" />
          {
            times.map((time, index) => (
              <div
                className={`songs-header__time ${
                  index === activeIndex ? 'songs-header__time--active' : ''
                }`}
                key={ time.key }
                >
                <Link
                  to={ handleLinkTo('time', time.key) }
                  className="songs-header__time__text"
                >
                  {time.label}
                </Link>
              </div>
          ))
          }
        </div>
      </div>
    );
  }
}

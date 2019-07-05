import React, { Component } from 'react';
import { TIMES } from '../../constants/PlaylistConstants';
import { Link } from 'react-router-dom';

type Props = {
  activeIndex: number;
  times: typeof TIMES;
  changeTime: (i: number) => void;
};

export default class SongsHeaderTimes extends Component<Props> {
  render() {
    const { activeIndex, times, changeTime } = this.props;
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
                onClick={ () =>{
                  activeIndex === index ?  changeTime(-1): changeTime(index);
                } }
                >
                <Link
                  to=""
                  
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

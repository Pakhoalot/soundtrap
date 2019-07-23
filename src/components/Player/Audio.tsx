import React, { Component, createRef } from 'react'
import { getTrackStreamUrl } from '../../utils/trackUtil';
import { MyThunkDispatch } from '../../shared/types/common';
import { AppState } from '../../shared/types/states';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCurrentTime, updateDuration, updateCanPlayed } from '../../store/actions/PlayerActions';


const mapStateToProps = (state: AppState) => {
  return {
    isPlayed: state.player.isPlayed,
    loop: state.player.loop,
    muted: state.player.muted,
    autoPlay: state.player.autoPlay,
    volume: state.player.volume,
    newCurrentTime: state.player.newCurrentTime,
  }
}

const mapDispatchToProps = (dispatch: MyThunkDispatch) => bindActionCreators({
  updateCurrentTime,
  updateDuration,
  updateCanPlayed,
}, dispatch);
type ownProps = {
  src: string;
}

export type AudioProps = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps> & ownProps;

type State =  {

};
class Audio extends Component<AudioProps, State> {
  

  audioRef = createRef<HTMLAudioElement>();

  componentDidMount() {
    this.syncEverything();
    const refDom = this.getAudioRefDom();

    refDom.onwaiting = () => { console.log('waiting'); };
    refDom.onloadstart = () => { console.log('onloadstart'); };
    refDom.oncanplay = () => { this.props.updateCanPlayed(true); console.log('canplay'); };
    refDom.onloadedmetadata = (e) => { console.log('loadedmetadata: ', e)}
    refDom.onloadeddata = (e) => {console.log('loadeddata:', e); };
    refDom.onerror = (e) => { console.log('error:', e); };
    refDom.onsuspend = () => { console.log('suspend'); }
    refDom.onprogress = (e: ProgressEvent) => {
      console.log('progress: ', this.getAudioRefDom().buffered);
    }
    refDom.ontimeupdate = (e) => {
      this.props.updateCurrentTime(this.getAudioRefDom().currentTime);
    }
    refDom.ondurationchange = (e) => {
      this.props.updateDuration(this.getAudioRefDom().duration);
      console.log('durationchange: ', this.getAudioRefDom().duration)
    }
    refDom.onplaying = () => {
      console.log('playing');
    }
    refDom.onplay = () => {
      console.log('play');
    }
    refDom.onpause = () => {
      console.log('pause');
    }
    refDom.onstalled = () => {
      console.log('stalled');
    }
    refDom.onended = (e) => {
      console.log('end');
    }
    
  }
  componentDidUpdate(prevProps: AudioProps) {
    if(prevProps.volume !== this.props.volume) {
      this.syncVolume();
    }
    if(prevProps.isPlayed !== this.props.isPlayed) {
      this.syncPlay();
    }
    if(prevProps.newCurrentTime !== this.props.newCurrentTime) {
      this.syncCurrentTime();
    }
  }
  getAudioRefDom() {
    const refDom = this.audioRef.current;
    if(!refDom) throw Error('audio Element not found');
    return refDom;
  }

  syncEverything = () => {
    this.syncPlay();
    this.syncVolume();
  }

  syncCurrentTime = () => {
    this.props.updateCurrentTime(this.props.newCurrentTime);
    this.getAudioRefDom().currentTime = this.props.newCurrentTime;
  }

  syncPlay = () => {
    const isPlayed = this.props.isPlayed;
    const refDom = this.getAudioRefDom();
    isPlayed ? refDom.play() : refDom.pause();
  }
  syncVolume = () => {
    const volume = Math.max(Math.min(this.props.volume, 100), 0);
    const refDom = this.getAudioRefDom();
    refDom.volume = volume / 100;
  }

  getVolume() {
    return this.getAudioRefDom().volume;
  }

  render() {
    const { src, autoPlay, muted, loop } = this.props;
    return (
      <audio
        id="global-audio"
        ref={ this.audioRef }
        src={ getTrackStreamUrl(src) }
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        preload="auto"/>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Audio);
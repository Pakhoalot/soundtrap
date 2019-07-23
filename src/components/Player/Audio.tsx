import React, { Component, createRef } from 'react'
import { getTrackStreamUrl } from '../../utils/trackUtil';

type Props = {
  src: string;
  autoPlay?: boolean;
  loop: boolean;
  volume: number;
  muted: boolean;
  isPlayed: boolean;
  preload?: 'none' | 'metadata' | 'auto';

  onEnded?: () => void;
  onProgress?: (value: number) => void;
}

type State = Props & {

};
export default class Audio extends Component<Props, State> {
  readonly state: State = {
    src: this.props.src,
    autoPlay: this.props.autoPlay,
    loop: this.props.loop,
    muted: this.props.muted,
    volume: this.props.volume,
    isPlayed: this.props.isPlayed,
    preload: this.props.preload,
  }
  static defaultProps = {
    autoPlay: true,
  }

  audioRef = createRef<HTMLAudioElement>();

  static getDerivedStateFromProps(prevProps: Props, prevState: State) {
    return {
      ...prevState,
      ...prevProps,
      volume: Math.max(Math.min(prevProps.volume, 100), 0),
      src: getTrackStreamUrl(prevProps.src),
    }
  }
  componentDidMount() {
    this.syncEverything();
    const refDom = this.getAudioRefDom();

    refDom.onwaiting = () => { console.log('waiting'); };
    refDom.onloadstart = () => { console.log('onloadstart'); };
    refDom.oncanplay = () => {console.log('canplay'); };
    refDom.onloadedmetadata = (e) => { console.log('loadedmetadata: ', e)}
    refDom.onloadeddata = (e) => {console.log('loadeddata:', e); };
    refDom.onerror = (e) => { console.log('error:', e); };
    refDom.onsuspend = () => { console.log('suspend'); }
    refDom.onprogress = (e: ProgressEvent) => {
      console.log('progress: ', this.getAudioRefDom().buffered.length);
      this.props.onProgress && this.props.onProgress(e.loaded);
    }
    refDom.ontimeupdate = (e) => {
      console.log('timeupdate: ', this.getAudioRefDom().currentTime);
    }
    refDom.ondurationchange = (e) => {
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
  componentDidUpdate(prevProps: Props) {
    if(prevProps.volume !== this.props.volume) {
      this.syncVolume();
    }
    if(prevProps.isPlayed !== this.props.isPlayed) {
      this.syncPlay();
    }
  }
  getAudioRefDom() {
    const refDom = this.audioRef.current;
    if(!refDom) throw Error('audio Element not found');
    return refDom;
  }
  emitEnd() {
    
  }
  syncEverything = () => {
    this.syncPlay();
    this.syncVolume();
  }

  syncPlay = () => {
    const isPlayed = this.state.isPlayed;
    const refDom = this.getAudioRefDom();
    isPlayed ? refDom.play() : refDom.pause();
  }
  syncVolume = () => {
    const volume = this.state.volume;
    const refDom = this.getAudioRefDom();
    refDom.volume = volume / 100;
  }

  getVolume() {
    const refDom = this.audioRef.current;
    
    if(refDom) {
      return refDom.volume;
    } else {
      console.warn('audio Element not found');
    }
  }

  render() {
    const { src, preload, autoPlay, muted, loop } = this.state;
    return (
      <audio
        id="global-audio"
        ref={ this.audioRef }
        src={ src }
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        preload={ preload }/>
    )
  }
}


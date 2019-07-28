import React, { Component, ReactNode } from 'react';
import throttle from 'lodash/throttle';

type Props = {
  dataLength: number;
  next: () => any;
  className?: string;
  style?: any;
  height?: number;
  hasMore?: boolean;
  loader?: ReactNode;
  endMessage?: ReactNode;
  scrollableTarget?: ReactNode;
  scrollThreshold?: number;
  onRefresh?: () => void;
  onScroll?: (event: MouseEvent) => any;
  key?: string;
  initialScrollY?: number;
};

type State = {
  showLoader: boolean;
  actionTriggered: boolean;
};
export default class InfiniteScroll extends Component<Props, State> {
  private _contentRef = React.createRef<HTMLDivElement>();
  private _scrollableNode: HTMLElement | Window | null = null;


  readonly state: State = {
    showLoader: false,
    actionTriggered: false,
  };

  onStart = (event: MouseEvent | TouchEvent) => {};

  onMove = (event: MouseEvent | TouchEvent) => {};
  onEnd = () => {};

  onScrollListener = (event: MouseEvent) => {
    if (this.props.onScroll) {
      setTimeout(() => this.props.onScroll && this.props.onScroll(event), 0);
    }

    const target = this.props.height
      ? event.target
      : document.documentElement.scrollTop
      ? document.documentElement
      : document.body;
    if (this.state.actionTriggered) return;

    const atBottom = this.isElementAtBottom(target);
    if (atBottom && this.props.hasMore) {
      this.setState({
        actionTriggered: true,
        showLoader: true
      });
      this.props.next();
    }
  };

  throttleOnScrollListener = throttle(this.onScrollListener, 150);

  getScrollableTarget() {
    if (this.props.scrollableTarget instanceof HTMLElement)
      return this.props.scrollableTarget;
    if (typeof this.props.scrollableTarget === 'string')
      return document.getElementById(this.props.scrollableTarget) || window;
    return window;
  }

  isElementAtBottom(target: any) {
    const scrollThreshold = this.props.scrollThreshold || 200
    const clientHeight =
      target === document.body || target
        ? window.screen.availHeight
        : target.clientHeight;
    return (
      target.scrollTop + clientHeight >= target.scrollHeight - scrollThreshold
    );
  }

  /**
   * 判定该content是否没有足够的content以撑起整个页面，修复当页面首次加载内容不足以显示scroll，而后scroll不再获取内容的bug
   * @param target 
   */
  isContentNotEnoughHigh(target: any) {
    console.log('content not high enough');
    if(this.getContentDom().scrollHeight < target.clientHeight) {
      return false;
    }
  }

  getContentDom() {
    if(this._contentRef.current) return this._contentRef.current;
    else throw Error('contentRef lost');
  }
  componentDidMount() {
    this._scrollableNode = this.props.height
      ? this._contentRef.current!
      : this.getScrollableTarget();
    this._scrollableNode.addEventListener('scroll', this
      .throttleOnScrollListener as any);
    // 首先获取足够的内容，撑起整个页面。

    if(this.isContentNotEnoughHigh && this.props.hasMore) {
      this.setState({
        actionTriggered: true,
        showLoader: true,
      })
      this.props.next();
    }
    if (this.props.initialScrollY) {
      this._scrollableNode.scrollTo(0, this.props.initialScrollY);
    }
  }
  componentDidUpdate(prevProps: Props) {
    if (
      this.props.key === prevProps.key &&
      this.props.dataLength === prevProps.dataLength
    )
      return;

    this.setState({
      showLoader: false,
      actionTriggered: false,
    });

    // if(this.isContentNotEnoughHigh && this.props.hasMore) {
    //   this.setState({
    //     actionTriggered: true,
    //     showLoader: true,
    //   })
    //   this.props.next();
    // }
  }
  componentWillUnmount() {
    this._scrollableNode &&
      this._scrollableNode.removeEventListener('scroll', this
        .throttleOnScrollListener as any);
  }

  render() {
    const outerDivStyle =
      this.props.height
        ? { overflow: 'auto' }
        : {};
    return (
      <div style={outerDivStyle}>
        <div
          className={`infinite-scroll ${this.props.className || ''}`}
          ref={this._contentRef}

        >
          {this.props.children}
          {this.state.showLoader && this.props.hasMore && this.props.loader}
          {!this.props.hasMore && this.props.endMessage}
        </div>
      </div>
    );
  }
}

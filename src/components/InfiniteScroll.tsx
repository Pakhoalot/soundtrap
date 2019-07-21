import React, { Component, ReactNode } from 'react';
import throttle from 'lodash/throttle';

type Props = {
  dataLength: number;
  next: () => any;
  className?: string;
  style?: any;
  height?: number;
  hasChildren?: boolean;
  hasMore?: boolean;
  loader?: ReactNode;
  endMessage?: ReactNode;
  scrollableTarget?: ReactNode;
  scrollThreshold?: number;
  pullDownToRefresh?: boolean;
  pullDownToRefreshContent?: ReactNode;
  releaseToRefreshContent?: ReactNode;
  pullDownToRefreshThreshold?: number;
  refreshFunction?: () => any;
  onScroll?: (event: MouseEvent) => any;
  key?: string;
  initialScrollY?: number;
};

type State = {
  showLoader: boolean;
  actionTriggered: boolean;
  pullToRefreshThresholdBreached: boolean;
};
export default class InfiniteScroll extends Component<Props, State> {
  private startY = 0;
  private currentY = 0;
  private dragging = false;
  private maxPullDownDistance = 0;
  private _spareScroll = React.createRef<HTMLDivElement>();
  private _pullDown = React.createRef<HTMLDivElement>();
  private _scrollableNode: HTMLElement | Window | null = null;

  static defaultProps = {
    pullDownToRefreshThreshold: 100
  };

  readonly state: State = {
    showLoader: false,
    actionTriggered: false,
    pullToRefreshThresholdBreached: false
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

    const atBottom = this.isElementAtBottom(target, this.props
      .scrollThreshold as number);
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

  isElementAtBottom(target: any, scrollThreshold: number = 200) {
    const clientHeight =
      target === document.body || target
        ? window.screen.availHeight
        : target.clientHeight;
    return (
      target.scrollTop + clientHeight >= target.scrollHeight - scrollThreshold
    );
  }

  componentDidMount() {
    this._scrollableNode = this.props.height
      ? this._spareScroll.current!
      : this.getScrollableTarget();
    this._scrollableNode.addEventListener('scroll', this
      .throttleOnScrollListener as any);

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
      pullToRefreshThresholdBreached: false
    });
  }
  componentWillMount() {
    this._scrollableNode &&
      this._scrollableNode.removeEventListener('scroll', this
        .throttleOnScrollListener as any);
  }

  render() {
    const style = {
      height: this.props.height || 'auto',
      overflow: 'auto',
      webkitOverflowScrolling: 'touch',
      ...this.props.style
    };

    const hasChildren = this.props.hasChildren || !!this.props.children;
    const outerDivStyle =
      this.props.pullDownToRefresh && this.props.height
        ? { overflow: 'auto' }
        : {};
    return (
      <div style={outerDivStyle}>
        <div
          className={`infinite-scroll ${this.props.className || ''}`}
          ref={this._spareScroll}
          // style={style}
        >
          {this.props.pullDownToRefresh && (
            <div style={{ position: 'relative' }} ref={this._pullDown}>
              <div
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: -1 * this.maxPullDownDistance
                }}
              >
                {!this.state.pullToRefreshThresholdBreached &&
                  this.props.pullDownToRefreshContent}
                {this.state.pullToRefreshThresholdBreached &&
                  this.props.releaseToRefreshContent}
              </div>
            </div>
          )}
          {this.props.children}
          {!this.state.showLoader &&
            !hasChildren &&
            this.props.hasMore &&
            this.props.loader}
          {this.state.showLoader && this.props.hasMore && this.props.loader}
          {!this.props.hasMore && this.props.endMessage}
        </div>
      </div>
    );
  }
}

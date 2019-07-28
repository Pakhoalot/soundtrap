import React, { Component, ReactNode } from 'react';
import throttle from 'lodash/throttle';

type Props = {
  next: () => Promise<any>;
  hasMore: boolean;
  className?: string;
  style?: any;
  height?: number;
  loader?: ReactNode;
  endMessage?: ReactNode;
  scrollableTarget?: ReactNode;
  scrollThreshold?: number;
  onRefresh?: () => void;
  onScroll?: (event: MouseEvent) => any;
};

type State = {
  actionTriggered: boolean;
};
export default class InfiniteScroll extends Component<Props, State> {
  private _contentRef = React.createRef<HTMLDivElement>();
  private _scrollableNode!: HTMLElement | Window;


  readonly state: State = {
    actionTriggered: false,
  };

  onScrollListener = (event: MouseEvent) => {
    if (this.props.onScroll) {
      requestAnimationFrame(() => this.props.onScroll && this.props.onScroll(event));
    }
    if (this.state.actionTriggered) return;

    const atBottom = this.isElementAtBottom();
    if (atBottom && this.props.hasMore) {
      this.fetchList();
    }
  };

  fetchList = () => {
    if(this.state.actionTriggered) return;
    this.setState({
      actionTriggered: true,
    });
    this.props.next()
    .then(() => {
      this.setState({
        actionTriggered: false,
      })
    });
  }
  throttleOnScrollListener = throttle(this.onScrollListener, 150);

  getScrollableTarget() {
    if (this.props.scrollableTarget instanceof HTMLElement)
      return this.props.scrollableTarget;
    if (typeof this.props.scrollableTarget === 'string')
      return document.getElementById(this.props.scrollableTarget) || window;
    return window;
  }

  isElementAtBottom() {
    const scrollThreshold = this.props.scrollThreshold || 200;
    const scrollbleNode = this.getScrollableNode();
    const target = scrollbleNode instanceof Window ? 
      document.documentElement.scrollTop ?
      document.documentElement :
      document.body : 
      scrollbleNode;
    const clientHeight =
      target === document.documentElement ? window.innerHeight : target.clientHeight;
    
    
    return (
      target.scrollTop + clientHeight >= target.scrollHeight - scrollThreshold
    );
  }

  /**
   * 判定该content是否没有足够的content以撑起整个页面，修复当页面首次加载内容不足以显示scroll，而后scroll不再获取内容的bug
   * @param target 
   */
  isContentNotEnoughHigh() {
    const scrollbleNode = this.getScrollableNode();
    const innerHeight = scrollbleNode instanceof Window ? window.innerHeight : scrollbleNode.clientHeight;
    return this.getContentDom().scrollHeight < innerHeight;
  }

  getContentDom() {
    if(this._contentRef.current) return this._contentRef.current;
    else throw Error('contentRef lost');
  }
  getScrollableNode() {
    if(this._scrollableNode) return this._scrollableNode;
    else throw Error('scrollableNode lost');
  }

  componentDidMount() {
    this._scrollableNode = this.getScrollableTarget();
    this._scrollableNode.addEventListener('scroll', this
      .throttleOnScrollListener as any);
    // 首先获取足够的内容，撑起整个页面。

    if(this.isContentNotEnoughHigh() && this.props.hasMore) {
      this.fetchList();
    }
  }
  componentDidUpdate(prevProps: Props) {
    if(this.isContentNotEnoughHigh() && this.props.hasMore) {
      this.fetchList();
    }

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
          {this.state.actionTriggered && this.props.hasMore && this.props.loader}
          {!this.props.hasMore && this.props.endMessage}
        </div>
      </div>
    );
  }
}

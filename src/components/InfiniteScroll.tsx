import React, { Component } from 'react';

type InfiniteScrollProps = {
  args?: string[];
  className?: string;
  onScroll: (...args: string[]) => void;
};

class InfiniteScroll extends Component<InfiniteScrollProps> {

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll = () => {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 200)) {
      const { args, onScroll } = this.props;
      args ? onScroll(...args) : onScroll();
    }
  }

  render() {
    const { children, className } = this.props;
    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

export default InfiniteScroll;

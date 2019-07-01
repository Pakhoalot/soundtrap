import React, { Component, EventHandler, MouseEventHandler } from 'react';

type PopoverPanelProps = {
  toggleIsOpen: () => void;
}

export default class PopoverPanel extends Component<PopoverPanelProps> {
  popover = React.createRef<HTMLDivElement>();

  componentDidMount() {
    document.addEventListener('click', this.handleClick);
  }
  
  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick);
  }
  
  handleClick = (e: MouseEvent) => {
    const { target } = e;
    if (!(target instanceof HTMLElement)) return;
    const { tagName } = target;
    const role = target.getAttribute('role');

    // if ref.current is missing, throw an Erorr
    if(!this.popover.current) throw Error('PopoverPanel: ref missing');

    const outsideClick = !this.popover.current.contains(target);
    const targetIsButton = role === 'button';
    const targetIsLink = role === 'link' || tagName === 'A';
    
    if (outsideClick || targetIsButton || targetIsLink) {
      const { toggleIsOpen } = this.props;
      toggleIsOpen();
    }

  }

  render() {
    const { children } = this.props;
    return (
      <div className="popover__panel" ref={ this.popover }>
        { children }
      </div>
    )
  }
}

import React, { Component, ReactNodeArray } from 'react'
import PopoverPanel from './PopoverPanel';

type PopoverProps = {
  className?: string;
}

type PopoverState = {
  isOpen: boolean;
}

export default class Popover extends Component<PopoverProps, PopoverState> {
  
  readonly state = {
    isOpen: false,
  }

  toggleIsOpen = () => {
    this.setState((state: PopoverState) => ({
      isOpen: !state.isOpen,
    }));
  }

  render() {
    const { isOpen } = this.state;
    const { className, children } = this.props;
    
    const trigger = (children as ReactNodeArray)[0];
    const popoverPanelContent = (children as ReactNodeArray)[1];

    if (!trigger || !popoverPanelContent) throw Error('Popover: popover component must have two child nodes');

    return (
      <div className={`popover ${className}`}>
        <span
          className="popover__trigger"
          onClick={this.toggleIsOpen}
          role="button"
          tabIndex={0}
        >
          { trigger }
        </span>
        {
          isOpen
          ? (
            <PopoverPanel toggleIsOpen={this.toggleIsOpen}>
              { popoverPanelContent }
            </PopoverPanel>
          ) : null
        }
      </div>
    )
  }
}

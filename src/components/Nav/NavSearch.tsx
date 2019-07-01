import React, { Component } from 'react'

export default class NavSearch extends Component {
  render() {
    return (
      <div className="nav-search">
        <i className="nav-search__icon ion-search" />
        <input
          type="text"
          className="nav-search__input"
          placeholder="SEARCH"  
        />
      </div>
    )
  }
}

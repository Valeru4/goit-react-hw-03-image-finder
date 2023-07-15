import React, { Component } from 'react';

export class Modal extends Component {
  onOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onModalClose();
    }
  };

  onKeyDown = event => {
    if (event.keyCode === 27) {
      this.props.onModalClose();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    return (
      <div onClick={this.onOverlayClick}>
        <div>
          <img src={this.props.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}

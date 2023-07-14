import { Component } from 'react';

export class Modal extends Component {
  escapeClose = e => {
    if (e.code === 'Escape') {
      this.props.onCloseModal();
    }
  };
  overlayClose = e => {
    if (e.target === e.currentTarget) {
      this.props.onCloseModal();
    }
  };

  componentDidMount = () => {
    window.addEventListener('keydown', this.escapeClose);
  };

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.escapeClose);
  };

  render() {
    return (
      <div onClick={this.overlayClose}>
        <div>
          <img
            src={this.props.largeImage}
            alt=""
            onClick={this.props.onClick}
          />
        </div>
      </div>
    );
  }
}

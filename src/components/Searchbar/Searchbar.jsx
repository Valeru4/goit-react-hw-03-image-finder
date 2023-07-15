import React, { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChangeInput = event => {
    this.setState({ searchQuery: event.target.value });
    // console.log('hello');
  };

  handleSubmitForm = event => {
    event.preventDefault();
    const searchQuery = this.state.searchQuery;
    if (searchQuery.trim() === '') {
      alert('Enter a request!');
      return;
    }
    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
    event.currentTarget.reset();
  };

  render() {
    return (
      <header>
        <form onSubmit={this.handleSubmitForm}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            value={this.state.searchQuery}
            type="text"
            onChange={this.handleChangeInput}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

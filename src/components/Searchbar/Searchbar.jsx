import React, { Component } from 'react';
import { Header, Form, Input, Button } from './Searchbar.styled';
import PropTypes from 'prop-types';

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
      <Header>
        <Form onSubmit={this.handleSubmitForm}>
          <Input
            value={this.state.searchQuery}
            type="text"
            onChange={this.handleChangeInput}
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />

          <Button type="submit">
            <span>Search</span>
          </Button>
        </Form>
      </Header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

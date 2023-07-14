import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleInputChange = event => {
    this.setState({
      searchQuery: event.target.value,
    });
    console.log('change input');
  };

  handleSubmitInput = event => {
    event.preventDefault();
    const searchQuery = this.state.searchQuery.trim();
    this.props.onSubmitInput(searchQuery);
    console.log(searchQuery);
  };

  render() {
    return (
      <>
        <header >
          <form  onSubmit={this.handleSubmitInput}>
            <button type="submit" >
              <span >Search</span>
            </button>

            <input
              
              value={this.state.searchQuery}
              onChange={this.handleInputChange}
              type="text"
              autoсomplete="off"
              //   autofocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

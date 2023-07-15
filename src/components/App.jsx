import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { Button } from './Button/Button';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'services/api';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    currentPage: 1,
    totalHits: 0,
    error: null,
    modal: { isOpen: false, largeImageURL: '' },
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery, currentPage } = this.state;

    if (
      searchQuery !== prevState.searchQuery ||
      currentPage !== prevState.currentPage
    ) {
      this.setState({ isLoading: true });
      this.fetchImagesData(searchQuery, currentPage);
    }
  }

  fetchImagesData = async (searchQuery, currentPage) => {
    try {
      const response = await fetchImages(searchQuery, currentPage);
      if (response.hits.length === 0) {
        alert('Nothing found!');
      }

      this.setState(prevState => ({
        images: [...prevState.images, ...response.hits],
        totalHits: response.totalHits,
      }));
    } catch (error) {
      this.setState({
        error: 'No images are showing',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = searchQuery => {
    this.setState({
      searchQuery,
    });
  };

  loadMore = event => {
    event.preventDefault();

    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  onOpenModal = item => {
    this.setState({
      modal: {
        isOpen: true,
        largeImageURL: item.largeImageURL,
      },
    });
  };

  onModalClose = () => {
    this.setState({
      modal: {
        isOpen: false,
        largeImageURL: '',
      },
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isLoading && <Loader />}
        <Button onClick={this.loadMore} />

        {this.state.modal.isOpen && (
          <Modal
            largeImageURL={this.state.modal.largeImageURL}
            onModalClose={this.onModalClose}
          />
        )}

        <ImageGallery
          images={this.state.images}
          onOpenModal={this.onOpenModal}
        />
      </div>
    );
  }
}

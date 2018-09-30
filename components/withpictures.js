import React, { Component } from 'react';

export var withPictures = OtherComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        pending: 3,
        pictures: [],
      };
    }

    componentDidMount() {}

    componentWillUnmount() {}

    // getPictures = () => this.state.pictures;

    // getPicturesCount = () => this.state.pictures.length;

    addPicture = ({ uri, width, height }) => {
      console.log('**ADD');
      this.setState({
        pictures: [...this.state.pictures, uri],
      });
    };

    deletePicture = (index, pname) => {
      console.log('**DELETE', index, pname);
      const new_pictures = this.state.pictures.filter(
        (item, id) => id + item.name !== index + pname,
      );
      this.setState({
        pictures: new_pictures,
      });
    };

    render = () => (
      <OtherComponent
        {...this.props}
        pictures={this.state.pictures}
        count={this.state.pictures.length}
        uploaderCount={this.state.pending}
        addPicture={this.addPicture}
        deletePicture={this.deletePicture}
      />
    );
  };

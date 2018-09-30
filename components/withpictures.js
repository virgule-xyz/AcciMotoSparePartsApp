import React, { Component } from 'react';

export var withPictures = OtherComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.inter = null;
      this.state = {
        pending: Math.ceil(Math.random() * 19) + 10,
        pictures: [],
      };
    }

    componentDidMount() {
      console.warn('** MOUNT **');
      this.inter = setInterval(() => {
        const p = Math.max(0, this.state.pending - 1);
        this.setState({
          pending: p,
        });
      }, 2000);
    }

    componentWillUnmount() {
      clearInterval(this.inter);
    }

    // getPictures = () => this.state.pictures;

    // getPicturesCount = () => this.state.pictures.length;

    addPicture = ({ uri, width, height }) => {
      this.setState({
        pictures: [...this.state.pictures, uri],
      });
    };

    deletePicture = (index, pname) => {
      const new_pictures = this.state.pictures.filter(
        (item, id) => id + item.name !== index + pname,
      );
      this.setState({
        pictures: new_pictures,
      });
    };

    render = () => {
      const me = this;
      return (
        <OtherComponent
          {...this.props}
          pictures={me.state.pictures}
          count={me.state.pictures.length}
          uploaderCount={me.state.pending}
          onAddPicture={data => me.addPicture(data)}
          onDeletePicture={(index, pname) => me.deletePicture(index, pname)}
          onCallTest={s => console.warn(s)}
        />
      );
    };
  };

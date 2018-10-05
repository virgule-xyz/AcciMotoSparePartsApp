import React from 'react';

const PictureContext = React.createContext({
  pictures: [],
  queue: [],
  addPicture: () => {},
  removePicture: () => {},
  uploadPictures: () => {},
});

export default PictureContext;

import React from 'react';

const PictureContext = React.createContext({
  pictures: [],
  queue: [],
  kind: 'pie',
  partnumber: 0,
  partdatas: null,
  addPicture: () => {},
  removePicture: () => {},
  uploadPictures: () => {},
  selectNewItem: () => {},
});

export default PictureContext;

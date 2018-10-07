import React from 'react';

const PictureContext = React.createContext({
  pictures: [],
  queue: [],
  kind: 'pie',
  partnumber: 0,
  partdatas: { name: '', trademark: '', model: '', type: '', line1: '', line2: '' },
  addPicture: () => {},
  removePicture: () => {},
  uploadPictures: () => {},
  selectNewItem: () => {},
});

export default PictureContext;

import React from 'react';

const PictureContext = React.createContext({
  pictures: [],
  queue: [],
  connected: false,
  kind: 'pie',
  partnumber: 0,
  partdatas: { name: '', trademark: '', model: '', type: '', line1: '', line2: '' },
  motdatas: {
    type: '',
    num: '',
    marque: '',
    modele: '',
    immat: '',
    kms: '',
    couleur: '',
  },

  addPicture: () => {},
  removePicture: () => {},
  uploadPictures: () => {},
  selectNewItem: () => {},
});

export default PictureContext;

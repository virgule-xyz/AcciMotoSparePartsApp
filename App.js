import React from 'react';
import PictureContext from '@components/picturecontext';
import Navigator from './Navigator';
import AcciMoto from '@components/accimoto';

/**
 * L'application principale
 */
class App extends React.Component {
  /**
   * Le constructeur avec le state contenant les images
   * @param {*} props
   */
  constructor(props) {
    super(props);
    this.state = {
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
      pictures: [],
      queue: [],
      addPicture: this.addPicture,
      removePicture: this.removePicture,
      uploadPictures: this.uploadPictures,
      selectNewItem: this.selectNewItem,
    };
  }

  /**
   * Nomme une pièce pour l'upload
   */
  setNameData = (kind, partnumber, index) => {
    const sep = '_';
    const partnumber05 = ('' + partnumber).padStart(5, '0');
    const index02 = ('' + (index + 1)).padStart(2, '0');
    const newname = kind + sep + partnumber05 + sep + index02;
    return newname;
  };

  /**
   * change de type de pièce (pie - pièce ou mot - moto) et de numéro
   */
  selectNewItem = ({ kind, partnumber, partdatas }) => {
    kind === 'pie'
      ? this.setState({ kind: kind, partnumber: partnumber, partdatas: partdatas })
      : this.setState({ kind: kind, partnumber: partnumber, motdatas: partdatas });
  };

  /**
   * charge les images vers le serveur
   */
  uploadPictures = () => {
    const me = this;
    const newToUpload = me.state.pictures.map((item, index) => {
      return { file: item, name: me.setNameData(me.state.kind, me.state.partnumber, index) };
    });
    this.setState(state => ({
      pictures: [],
      queue: [...state.queue, ...newToUpload],
    }));
    this.backgroundRunner();
  };

  /**
   * la tâche de fond pour charger les images
   */
  backgroundRunner = (n = 0) => {
    console.log('backgroundRunner:', n);
    if (this.state.queue.length > 0) {
      const toUpload = this.state.queue[n];

      AcciMoto.FTPPicture(
        toUpload,
        () => {
          this.setState(state => ({
            queue: state.queue.slice(1),
          }));
          this.backgroundRunner(n);
        },
        () => {
          this.backgroundRunner(n + 1);
        },
      );
    }
  };

  /**
   * Ajoute une image au state/array
   */
  addPicture = data => {
    this.setState(state => ({
      pictures: [...state.pictures, data.uri],
    }));
  };

  /**
   * supprime une image du tableau
   */
  removePicture = (index, pname) => {
    const newPictures = this.state.pictures.filter((item, id) => id + item !== index + pname);
    this.setState(state => ({
      pictures: newPictures,
    }));
  };

  /**
   * lancement du background-runner au montage
   */
  componentDidMount = () => {
    this.backgroundRunner();
  };

  /**
   * le renderer contient le provider de contexte avec les images à gérer
   */
  render = () => (
    <PictureContext.Provider value={this.state}>
      <Navigator />
    </PictureContext.Provider>
  );
}

export default App;

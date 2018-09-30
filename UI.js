import React, { Component } from 'react';
export const ColorOrange = '#ff9800';
export const ColorBlack = '#333';
export const ColorGray = '#878787';
export const ColorLightGray = '#B2B2B2';
export const ButtonHeight = 44;
export const ButtonMargins = 10;
export const ButtonRadius = 3;
export const ButtonElevation = 4;
export const ButtonFontSize = 16;
export const TextFontSize = 16;
export const ButtonPadding = 30;
export const AlertTitle = 'AcciMoto';

/**
 * Les chaines utilisées dans l'application
 */
export const UIStrings = {
  fr: {
    oui: 'oui',
    non: 'non',
    changer: '< Changer',
    changerdepiece: 'Changer de pièce',
    annuler: 'Annuler',
    accueil: '< LANGUES',
    selection_de_la_piece: 'Sélection de la pièce',
    indiquer_numero_piece: 'Veuillez indiquer le numéro de la pièce :',
    ok: 'OK',
    code_barres: 'SCANNER LE CODE BARRE',
    question_retour_piece: 'Voulez-vous sélectionner une autre pièce ?',
    question_retour_home: 'Voulez-vous retourner au choix de langues ?',
    selectionnez_une_piece_1: 'Sélectionnez la pièce pour laquelle vous allez prendre des photos.',
    selectionnez_une_piece_2: 'Entrez un numéro de pièce...',
    selectionnez_une_piece_3: 'ou',
    selectionnez_une_piece_4: 'Scannez le code barre...',
    selectionnez_une_piece_5: 'Nous recherchons la pièce...',
    selectionnez_une_piece_6: 'La pièce a bien été trouvée.',
    piece_inexistante: "Cette pièce n'existe pas !",
    next_step: 'Prendre des photos',
    permission_camera_title: "Demande d'autorisation",
    permission_camera_message: "Vous devez autoriser l'usage de la caméra",
    terminer: 'Terminer',
    question_effacer_piece: 'Effacer cette photo ?',
    nouvelle_photo: 'Nouvelle photo',
    les_photos_remontent:
      'Les photos de cette pièce sont en cours de remontée vers les serveurs...',
    le_nombre_de_photos:
      'Le nombre de photos en cours de chargement vers les serveurs est systématiquement indiqué en bas à droite dans le rond bleu.',
  },
  gb: {
    oui: 'yes',
    non: 'no',
    changer: '< Switch',
    changerdepiece: 'Change parts',
    annuler: 'Cancel',
    accueil: '< LANGS',
    selection_de_la_piece: 'Parts select',
    indiquer_numero_piece: 'Please provide parts id:',
    ok: 'OK',
    code_barres: 'SCAN THE BARCODE',
    question_retour_piece: 'Would you like to select another parts?',
    question_retour_home: 'Do you want to go back to the choice of languages?',
    selectionnez_une_piece_1: 'Select the parts for which you will take pictures.',
    selectionnez_une_piece_2: 'Enter parts ID...',
    selectionnez_une_piece_3: 'or',
    selectionnez_une_piece_4: 'Scan the barcode...',
    selectionnez_une_piece_5: 'We are searching for the parts...',
    selectionnez_une_piece_6: 'Parts found.',
    piece_inexistante: 'This parts does not exist!',
    next_step: 'Take pictures',
    permission_camera_title: 'Authorization request',
    permission_camera_message: 'Please allow camera usage',
    terminer: 'Finish',
    question_effacer_piece: 'Scratch that picture?',
    nouvelle_photo: 'New picture',
    les_photos_remontent: 'The photos of this piece are being uploaded to the servers...',
    le_nombre_de_photos:
      'The number of photos being uploaded to the servers is always shown at the bottom right inside the blue circle.',
  },
};

export var withLanguage = OtherComponent =>
  class extends Component {
    constructor(props) {
      super(props);
      this.country = 'fr';
      this.language = UIStrings['fr'];
    }

    componentWillMount = () => {
      this.country =
        this.props.navigation && this.props.navigation.state && this.props.navigation.state.params
          ? this.props.navigation.state.params.country
          : this.props.country
            ? this.props.country
            : 'fr';
      this.language = UIStrings[this.country];
    };

    render = () => (
      <OtherComponent {...this.props} language={this.language} country={this.country} />
    );
  };

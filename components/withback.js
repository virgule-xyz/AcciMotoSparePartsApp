import React, {
    Component
} from 'react';
import {BackHandler} from 'react-native';

export var withBack = OtherComponent => class extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.goBack();
            return true;
        });
    }

    componentWillUnmount() {
        this.backHandler.remove();
    }

    render = () => (
        <OtherComponent {...this.props} />
    )
}
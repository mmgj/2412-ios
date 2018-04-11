/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import FadeInView from './FadeInView';
import DigitsAndWords from './DigitsAndWords';
import OldSchoolClock from './OldSchoolClock';


export default class FrontPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: undefined,
      minute: undefined,
      second: undefined,
      portraitOrientation: undefined,
      showAboutIcon: false,
    };
    this.updateClocks = this.updateClocks.bind(this);
    this.onLayout = this.onLayout.bind(this);
    this.toggleIcon = this.toggleIcon.bind(this);
  }
  componentDidMount() {
    this.updateClocks();
    setInterval(this.updateClocks, 1000);
  }
  onLayout() {
    const { width, height } = Dimensions.get('window');
    const portraitOrientation = (width < height);
    this.setState({
      portraitOrientation,
    });
  }
  updateClocks() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    this.setState({
      hour,
      minute,
      second,
    });
  }
  toggleIcon() {
    if (!this.state.showAboutIcon) {
      this.setState({ showAboutIcon: true });
      setTimeout(() => {
        this.setState({ showAboutIcon: false });
      }, 2000);
    } else {
      this.setState({ showAboutIcon: false });
    }
  }
  render() {
    const { hour, minute, second } = this.state;
    const ready = [hour, minute, second].every(unit => unit !== undefined);
    const orientationContainerStyle = this.state.portraitOrientation ? { flexDirection: 'column', paddingTop: 20 } : { flexDirection: 'row', paddingLeft: 30 };
    const orientationWordBoxStyle = this.state.portraitOrientation ? { top: -20 } : { left: -20 };
    const orientationAboutIconStyle = this.state.portraitOrientation ? { marginRight: 10 } : { marginBottom: 10 };
    return (
      <LinearGradient colors={['#ffffff', '#e5e5e5']} style={{ ...styles.containerStyles, ...orientationContainerStyle }} onLayout={this.onLayout}>
        {ready
        ? (
          <React.Fragment>
            <View style={styles.clockBoxStyles}>
              <OldSchoolClock hour={hour} minute={minute} second={second} />
            </View>
            <View style={{ ...styles.wordBoxStyles, ...orientationWordBoxStyle }}>
              <DigitsAndWords hour={hour} minute={minute} />
            </View>
          </React.Fragment>
        )
        : null}
        <TouchableOpacity
          style={{
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            position: 'absolute',
            width: '100%',
            height: '100%',
            }}
          activeOpacity={1}
          onPress={() => { this.toggleIcon(); }}
        >
          <FadeInView show={this.state.showAboutIcon}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => {
                if (this.state.showAboutIcon) {
                  Actions.backPage();
               } else {
                 this.toggleIcon();
               }
               }}
            >
              <Icon
                name="info-circle"
                color="#ccc"
                size={30}
                style={{ opacity: 1, textAlign: 'right', ...orientationAboutIconStyle }}
              />
            </TouchableOpacity>
          </FadeInView>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const styles = {
  containerStyles: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  clockBoxStyles: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  wordBoxStyles: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
};


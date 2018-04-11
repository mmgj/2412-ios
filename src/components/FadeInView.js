import React from 'react';
import PropTypes from 'prop-types';
import { Animated } from 'react-native';

class FadeInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show) {
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 1,
          duration: 1000,
        },
      ).start();
    } else {
      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 0,
          duration: 1000,
        },
      ).start();
    }
  }

  render() {
    const { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

FadeInView.defaultProps = {
  style: null,
  children: null,
};

FadeInView.propTypes = {
  show: PropTypes.bool.isRequired,
  style: PropTypes.object,
  children: PropTypes.any,
};

export default FadeInView;

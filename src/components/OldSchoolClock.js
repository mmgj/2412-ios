import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import AnalogClock from 'react-native-analog-clock';
import ClockFace from './ClockFace';

class OldSchoolClock extends React.Component {
  constructor(props) {
    super(props);
    const { hour, minute, second } = this.props;
    this.state = {
      hour,
      minute,
      second,
    };
  }
  componentWillReceiveProps(nextProps) {
    const { hour, minute, second } = nextProps;
    this.setState({
      hour,
      minute,
      second,
    });
    this.forceUpdate();
  }

  render() {
    const { hour, minute, second } = this.state;
    return (
      <View>
        {this.state.second !== (undefined || null)
        ? (
          <ClockFace style={{ zIndex: 10 }}>
            <AnalogClock
              style={{
                height: 250,
                width: 250,
                zIndex: 0,
                position: 'absolute',
                marginLeft: 10,
                marginTop: 10,
              }}
              hours={hour}
              minutes={minute}
              seconds={second}
              borderColor="red"
              borderAlpha={0}
              borderWidth={0}
              digitColor="#fff"
              digitOffset={5}
              enableDigit={false}
              enableHub={false}
              hubAlpha={0}
              hubRadius={50}
              enableGraduations={false}
              faceBackgroundColor="#222"
              faceBackgroundAlpha={0}
              hourHandColor="#8f9c6c"
              hourHandLength={60}
              minuteHandColor="#cd6a51"
              minuteHandLength={70}
              secondHandColor="#dfc48c"
              secondHandLength={80}
              onTimeChange={() => null}
            />
          </ClockFace>
        )
          : null
        }
      </View>
    );
  }
}

OldSchoolClock.propTypes = {
  hour: PropTypes.number.isRequired,
  minute: PropTypes.number.isRequired,
  second: PropTypes.number.isRequired,
};

export default OldSchoolClock;

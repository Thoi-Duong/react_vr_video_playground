import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VideoPano,
  VrButton,
  Image,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  constructor (props) {
    super(props);
    this.state =  {
      src: asset('ultra.mp4')
    };
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
  }

  next(){
    this.setState({src: asset('R0010004.test_360.MP4')});
  }
  back(){
    this.setState({src: asset('ultra.mp4')});
  }

  render() {
    return (
      <View>
        <VideoPano style={{width: 1, height: 1}} source={this.state.src}/>
        <View style={{
          flex: 1,
          flexDirection: 'column',
          width: 2,
          alignItems: 'stretch',
          transform: [{translate: [-1, 1, -5]}],
        }}>

        <VrButton style={{ margin: 0.1, height: 0.3, backgroundColor: 'red'}}
            onClick={()=>this.next()}
            >
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>next</Text>
          </VrButton>

          <VrButton style={{ margin: 0.1, height: 0.3, backgroundColor: 'orange'}}
            onClick={()=>this.back()}
            >
            <Text style={{fontSize: 0.2, textAlign: 'center'}}>back</Text>
          </VrButton>
      </View>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);

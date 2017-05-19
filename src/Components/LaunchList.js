import React, { Component } from 'react';
import LaunchItem from './LaunchItem';

class LaunchList extends Component {
  constructor(props) {
    super(props);
    this.state = {launchList: []};
  }

  componentDidMount() {
    var launchList = [
    {
      id: 0,
      site: 'KSC',
      rocket: 'Falcon 9',
      payload: 'Test Cub 1',
      date: '19.01.2022',
      time: '12:00:00',
      counter: 1200,
    },
    {
      id: 1,
      site: 'Vostochniy',
      rocket: 'Proton',
      payload: 'Test',
      date: '22.02.2022',
      time: '04:00:00',
      counter: 1000,
    },
    {
      id: 2,
      site: 'Vostochniy',
      rocket: 'Soyuz',
      payload: 'Telekom-1',
      date: '1.03.2022',
      time: '02:34:45',
      counter: 566,
    }];
    this.setState({launchList: launchList});
  }

  render(){
    return(
      <div>
        {this.state.launchList.map((item) =>
          <div className="item" key={item.id}>
            <LaunchItem counter={item.counter}/>
            Site: {item.site}<br/>
            Rocket: {item.rocket}<br/>
            Payload: {item.payload}<br/>
            Date: {item.date}<br/>
            Time: {item.time}
            <div className="custom-hr"></div>
          </div>
        )}
      </div>
    )
  }
}

export default LaunchList;

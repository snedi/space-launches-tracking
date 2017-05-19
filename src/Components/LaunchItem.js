import React, { Component } from 'react';

class LaunchItem extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: this.props.counter};
  }

  componentDidMount() {
    this.timer = setInterval(
      () => this.count(), 1000
    )
  }

  count() {
    this.setState({
      counter: this.state.counter - 1
    });
  }

  render() {
    return(
      <div>
        {this.state.counter.toString()}
      </div>
    )
  }
}

export default LaunchItem;

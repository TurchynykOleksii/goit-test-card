import { Component } from 'react';
import { Card } from './Card';
import dataUser from '../data/data.json';

export class App extends Component {
  state = {
    data: dataUser[0],
    isFollow: false,
  };

  componentDidMount() {
    const localStorageUser = JSON.parse(localStorage.getItem('user'));
    if (localStorageUser) {
      this.setState({
        data: localStorageUser,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { data } = this.state;
    if (data !== prevState.data) {
      localStorage.setItem('user', JSON.stringify(data));
    }
  }

  handleBtn = () => {
    const newObj = { ...this.state.data };
    newObj.isFollow = !this.state.isFollow;

    this.setState({
      data: newObj,
      isFollow: !this.state.isFollow,
    });
  };

  render() {
    return (
      <>
        <Card handleButton={this.handleBtn} stateInfo={this.state} />
      </>
    );
  }
}

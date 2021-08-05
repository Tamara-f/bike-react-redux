import React, { Component } from 'react';
import { connect } from 'react-redux';

import Section from './Section';
import BikeList from './BikeList';
import BikeEditor from './BikeEditor';
import Stats from './Stats';
import bikeOperations from '../redux/bikes/operations';

class App extends Component {
  componentDidMount() {
    this.props.onFetchBikes();
  }

  render() {
    return (
      <Section>      
       <BikeList />
      <div className='vl'></div>
      <div className='rightBlock'>
        <BikeEditor />
        <div className='hl'></div>
        <Stats />
      </div>
      </Section> 
    );
  }
}

const mapDispatchToProps = {
  onFetchBikes: bikeOperations.fetchBikes,
};
export default connect(null, mapDispatchToProps)(App);

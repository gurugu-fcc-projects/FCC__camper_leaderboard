import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';

export class App extends Component {

  componentWillMount() {

  }

  render() {
    const { testVariable } = this.props;

    return (
      <div>{testVariable}</div>
    );
  }

}

App.propTypes = {
  testVariable: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  testVariable: state.testVariable,
});

export default connect(mapStateToProps, actions)(App);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from './Table';
import Message from './Message';
import * as actions from '../actions';
import '../styles/App.scss';

export class App extends Component {

  componentWillMount() {
    this.props.fetch30();
  }

  render() {
    const {
      isRequesting,
      errorMessage,
      fetch30,
    } = this.props;

    const mainComponent = !isRequesting
      ? <Table />
      : errorMessage
        ? <Message message={`Error: ${errorMessage}`} />
        : <Message message={'Network request in progress...'}/>;

    return (
      <div className="app">

        <header>
          <h1>freeCodeCamp Leaderboard</h1>
        </header>

        {mainComponent}

        <footer>
          <p>2017, created by <a target="blank" href="https://github.com/GuRuGuMaWaRu">Peter Krevenets</a></p>
        </footer>

      </div>
    );
  }

}

App.propTypes = {
  isRequesting: PropTypes.bool,
  errorMessage: PropTypes.string,
  fetch30: PropTypes.func,
};


const mapStateToProps = (state) => ({
  isRequesting: state.isRequesting,
  errorMessage: state.errorMessage,
});

export default connect(mapStateToProps, actions)(App);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from './Table';
import * as actions from '../actions';
import '../styles/App.scss';

export class App extends Component {

  componentWillMount() {
    this.props.fetch30();
  }

  render() {
    const {
      show30days,
      score30days,
      scoreAlldays,
      fetch30,
      fetchAll
    } = this.props;

    const score = show30days ? score30days : scoreAlldays;
    const tableContent = score.map((user, index) => {
      return (
        <tr key={user.username}>
          <td>{index + 1}</td>
          <td className="username-column">
            <a
              target="blank"
              href={`https://www.freecodecamp.com/${user.username}`}>
              <img src={user.img} />
              <span>{user.username}</span>
            </a>
          </td>
          <td>{user.recent}</td>
          <td>{user.alltime}</td>
        </tr>
      );
    });

    return (
      <div className="app">

        <header>
          <h1>freeCodeCamp Leaderboard</h1>
        </header>

        <Table
          tableContent={tableContent}
          handle30days={fetch30}
          handleAllTime={fetchAll} />

        <footer>
          <p>2017, created by <a target="blank" href="https://github.com/GuRuGuMaWaRu">Peter Krevenets</a></p>
        </footer>

      </div>
    );
  }

}

App.propTypes = {
  isRequesting: PropTypes.bool,
  show30days: PropTypes.bool,
  score30days: PropTypes.array,
  scoreAlldays: PropTypes.array,
  error: PropTypes.string,
  fetch30: PropTypes.func,
  fetchAll: PropTypes.func,
};


const mapStateToProps = (state) => ({
  isRequesting: state.isRequesting,
  show30days: state.show30days,
  score30days: state.score30days,
  scoreAlldays: state.scoreAlldays,
  error: state.error,
});

export default connect(mapStateToProps, actions)(App);

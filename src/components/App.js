import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../actions';
import '../styles/App.scss';

export class App extends Component {

  componentWillMount() {
    this.props.fetch30();
  }

  render() {
    const { score30days, scoreAlldays } = this.props;

    const scoreComponent = score30days.map((user, index) => {
      return (
        <tr key={user.username}>
          <td>{index + 1}</td>
          <td>{user.username}</td>
          <td>{user.recent}</td>
          <td>{user.alltime}</td>
        </tr>
      );
    });

    return (
      <div>

        <header>
          <h1>freeCodeCamp Leaderboard</h1>
        </header>

        <section className="table">
          <table>
            <thead>
              <tr>
                <th className="header-position">#</th>
                <th className="header-camper">Camper</th>
                <th className="header-30">Top 30 Days</th>
                <th className="header-all">Top All Time</th>
              </tr>
            </thead>
            <tbody>
              {scoreComponent}
            </tbody>
          </table>
        </section>

        <footer>
          <p>2017, created by <a target="blank" href="https://github.com/GuRuGuMaWaRu">Peter Krevenets</a></p>
        </footer>

      </div>
    );
  }

}

App.propTypes = {
  isRequesting: PropTypes.bool,
  score30days: PropTypes.array,
  scoreAlldays: PropTypes.array,
  error: PropTypes.string,
  fetch30: PropTypes.func,
  fetchAll: PropTypes.func,
};


const mapStateToProps = (state) => ({
  testVariable: state.testVariable,
  isRequesting: state.isRequesting,
  score30days: state.score30days,
  scoreAlldays: state.scoreAlldays,
  error: state.error,
});

export default connect(mapStateToProps, actions)(App);

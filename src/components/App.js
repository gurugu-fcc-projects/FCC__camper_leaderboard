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
    const { score30days } = this.props;

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
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Camper</th>
              <th>Top 30 Days</th>
              <th>Top All Time</th>
            </tr>
          </thead>
          <tbody>
            {scoreComponent}
          </tbody>
        </table>
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

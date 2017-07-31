import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as actions from '../actions';

export default class Table extends Component {

  render() {
    const { tableContent, show30days } = this.props;

    const onRequesting30Days = () => {
      this.props.handle30days();
    };

    const onRequestingAllTime = () => {
      this.props.handleAllTime();
    };

    return (
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Camper</th>
            <th onClick={onRequesting30Days}>
              30 Days {show30days && <i className="fa fa-sort-desc" aria-hidden="true"></i>}
            </th>
            <th onClick={onRequestingAllTime}>
              All Time {!show30days && <i className="fa fa-sort-desc" aria-hidden="true"></i>}
            </th>
          </tr>
        </thead>
        <tbody>
          {tableContent}
        </tbody>
      </table>
    );
  }

}

Table.propTypes = {
  tableContent: PropTypes.array,
};

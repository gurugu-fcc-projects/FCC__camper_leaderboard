import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TableRow from './TableRow';
import * as actions from '../actions';

const Table = ({
  show30days,
  receivedData,
  fetch30,
  fetchAll,
}) => {

  const camperData = receivedData.map((data, index) => (
    <TableRow key={index + 1} data={data} index={index} />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Camper</th>
          <th onClick={fetch30}>
            30 Days {show30days && <i className="fa fa-sort-desc" aria-hidden="true"></i>}
          </th>
          <th onClick={fetchAll}>
            All Time {!show30days && <i className="fa fa-sort-desc" aria-hidden="true"></i>}
          </th>
        </tr>
      </thead>
      <tbody>

          {camperData}
          
      </tbody>
    </table>
  );

}

Table.propTypes = {
  show30days: PropTypes.bool,
  receivedData: PropTypes.array,
  fetch30: PropTypes.func,
  fetchAll: PropTypes.func,
};


const mapStateToProps = (state) => ({
  show30days: state.show30days,
  receivedData: state.receivedData,
});

export default connect(mapStateToProps, actions)(Table);

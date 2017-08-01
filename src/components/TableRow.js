import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ data, index }) => {

  return (
    <tr key={data.username}>
      <td>{index + 1}</td>
      <td className="username-column">
        <a
          target="blank"
          href={`https://www.freecodecamp.com/${data.username}`}>
          <img src={data.img} />
          <span>{data.username}</span>
        </a>
      </td>
      <td>{data.recent}</td>
      <td>{data.alltime}</td>
    </tr>
  );

}

TableRow.propTypes = {
  tableContent: PropTypes.object,
};

export default TableRow;

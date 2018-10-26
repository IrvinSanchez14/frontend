import React from 'react';
import PropTypes from "prop-types";
import Radium from "radium";
import ReactTable from "react-table";

import "react-table/react-table.css";

  const styles = {
    base: {
      display: "inline",
      marginTop: "8px",
    },
    base2: {
      display: "inline",
    }
  };

  export class Table extends React.Component {
    render () {
      return (
        <div style={styles.base}>
          <ReactTable
            columns={this.props.columns}
            data={this.props.data}
            noDataText="Oh Noes!"
            defaultPageSize={5} 
          />
        </div>
      );
    }
  }

  Table.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
  }

export default Radium(Table);
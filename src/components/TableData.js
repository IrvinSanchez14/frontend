import React, { Component } from 'react';
import { makeData } from "./Utils";
import axios from 'axios';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";

const styles = {
    base: {
      display: 'inline',
      marginTop: '8px',
      margin: '1px',
    },
}


export default class tableData extends Component {

    constructor(props) {
        super(props);
        this.state = {
          data: makeData()
        };
      }

      render() {
        const { data } = this.state;
        return (
          <div style={styles.base}>
            <ReactTable
              data={data}
              columns={[
                {
                  Header: "Name",
                  columns: [
                    {
                      Header: "First Name",
                      accessor: "name"
                    }
                  ]
                }
              ]}
              defaultPageSize={10}
              className="-striped -highlight"
            />
          </div>
        );
      }
}
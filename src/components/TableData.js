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

    constructor() {
        super();
        this.state = {
          data: makeData()
        };
      }

      pruebaDatos = () => {
        axios.post('/api/users/mongoq').then(res => {
          console.log(res);
        });
      }

      render() {
          console.log(this.pruebaDatos());
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
                      accessor: "firstName"
                    },
                    {
                      Header: "Last Name",
                      id: "lastName",
                      accessor: d => d.lastName
                    }
                  ]
                },
                {
                  Header: "Info",
                  columns: [
                    {
                      Header: "Age",
                      accessor: "age"
                    },
                    {
                      Header: "Status",
                      accessor: "status"
                    }
                  ]
                },
                {
                  Header: 'Stats',
                  columns: [
                    {
                      Header: "Visits",
                      accessor: "visits"
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
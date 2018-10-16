import React, { Component } from 'react';
import { makeData } from "./Utils";
import { GET_ERRORS } from '../actions/types'; 
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
        const registerUser = (user, history) => dispatch => {
            console.log('[INFO-APP] ---- HISTORY----',history);
            console.log('[INFO-APP] ---- USER-----', user);
            axios.get('/api/users/me', user)
                    .then(res => history.push('/tableData'))
                    .catch(err => {
                        dispatch({
                            type: GET_ERRORS,
                            payload: err.response.data
                        });
                    });
        }
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
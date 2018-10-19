import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from "react-table";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import "react-table/react-table.css";

// redux
import { setUserInformation } from '../actions/actions';
import { makeData } from './Utils';


const styles = {
    base: {
      display: 'inline',
      marginTop: '8px',
      margin: '1px',
    },
    base2: {
      display: 'inline',
    },
}

class tableData extends Component {

      constructor(props) {
        super(props);
        this.state = {
          data: [],
          isLoading: false,
          error: null,
        };
      }

      componentWillMount() {
        axios.get('/api/users/tableData').then(res => {
          this.setState({
            data: res.data
          });
          this.props.setUserInformation(res.data);
         });
      }

      render() {

        return (
          <div style={styles.base}>
            <ReactTable
              data={this.state.data}
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

tableData.propTypes = {
  setUserInformation: PropTypes.func.isRequired,
};
function mapDispatchToProps(dispatch) {
  return {
    setUserInformation: (information) =>
      dispatch(setUserInformation(information)),
    dispatch,
  };
}

const mapStateToProps = (state, props) => ({
  informationUser: setUserInformation(state, props),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(tableData);
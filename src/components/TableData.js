import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table";
import PropTypes from "prop-types";
import { connect } from "react-redux";
//here components
import "react-table/react-table.css";
import Table from '../components/tablesInformation';
//here redux files {reduces,action,selectors and sagas}
import { setUserInformation } from "../actions/actions";
//here declare firs const styles for all styles use in components or containers
const styles = {
  base: {
    display: "inline",
    marginTop: "8px",
    margin: "1px"
  },
  base2: {
    display: "inline"
  }
};




const cabeceras = [];
const header = [];

class tableData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null,
      span: false,
    };
  }

  componentWillMount() {
    axios.get("/api/users/tableData").then(res => {
      this.setState({
        data: res.data
      });
      this.props.setUserInformation(res.data);
    });
  }



  messageAlert = (information) => {
    this.setState({
      span: true
    })
    Object.keys(information).forEach((info) => 
      header.push({Header: info})
    )
    console.log('header',header)
    return header;
  };

  render() {
    console.log('header2',header)
    return (
      <div style={styles.base}>
        <ReactTable
          data={this.state.data}
          columns={[
            {
              Header: "Personal Information",
              columns: [
                {
                  Header: "Name",
                  accessor: "name"
                },
                {
                  Header: "Email",
                  accessor: "email"
                },
                {
                  Header: "Date Created",
                  accessor: "date"
                }
              ]
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
          getTdProps={(state, rowInfo, column, instance) => {
            return {
              onClick: (e, handleOriginal) => {
                this.messageAlert(rowInfo.original);
                if (handleOriginal) {
                  handleOriginal();
                }
              }
            };
          }}
        />
        {!this.state.span ?(
          <span></span>
        ) : (
          <Table columns={header} data={cabeceras} />
        )}
      </div>
    );
  }
}

tableData.propTypes = {
  setUserInformation: PropTypes.func.isRequired
};
function mapDispatchToProps(dispatch) {
  return {
    setUserInformation: information =>
      dispatch(setUserInformation(information)),
    dispatch
  };
}

const mapStateToProps = (state, props) => ({
  informationUser: setUserInformation(state, props)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(tableData);

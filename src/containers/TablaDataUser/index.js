import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Table from '../../components/tablesInformation';

const header = [];
const cabeceras = [];

class tableData extends Component {

  render() {
    return (
      <Table columns={header} data={cabeceras} />
    );
  }

}

export default tableData;
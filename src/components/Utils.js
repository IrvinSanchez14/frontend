import React from "react";
import namor from "namor";
import axios from 'axios';

const datos = [];


export function makeData() {
  axios.post('/api/users/mongoq').then(res => {
    res.data.forEach(element => {
      datos.push({
       name: element.name,
       email: element.email
      });
    });
   });
   return datos;
}



export const Logo = () =>
  <div style={{ margin: '1rem auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
    For more examples, visit {''}
  <br />
  </div>;

export const Tips = () =>
  <div style={{ textAlign: "center" }}>
    <em>Tip: Hold shift when sorting to multi-sort!</em>
  </div>;

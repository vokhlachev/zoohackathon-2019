import React from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import './App.css';
import {find} from './HashStore';
import {BASE_URL} from './settings.js';

export default function QRPrinter(props) {
    const hash = props.match.params.hash;
    const o = find(hash);
    function subproduct() {
      props.history.push("/register/" + hash);
    }
    function history() {
      props.history.push("/history/" + hash);
    }
  return (
    <div>
      <h2>{hash}</h2>
      <h3>Object properties:</h3>
      <table>
        {Object.entries(o).map((entry,index)=> {
          if(entry[0][0] != '_') {
            return <tr><td>{entry[0]}:</td><td>{JSON.stringify(entry[1])}</td></tr>
          }
        })}

      </table>
      <br/>
          <br/>
          <br/>
      <div>
          <a href={BASE_URL + '/printer/' + hash}><QRCode value={BASE_URL + '/printer/' + hash} level="M" size="120"></QRCode></a>
          <br/>
          <br/>
          <br/>
      </div>
      <button onClick={subproduct}>Create subproduct</button>
      <button onClick={history}>Show history</button>
    </div>
  );
}

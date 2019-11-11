import React from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import {history, HASH_ATTR} from './HashStore';
import './App.css';
import {BASE_URL} from './settings';

export default function QRHistory(props) {
    const hash = props.match.params.hash;
    var list = history(hash);
    console.log(list);
  return (
    <div>
        <h2>Ancestry for object <a href={BASE_URL + '/printer/' + hash}>{hash}</a>:</h2>
          {list.map((value, index) => {
          return <div key={index}><a href={BASE_URL + '/printer/' + value[HASH_ATTR]}>{value[HASH_ATTR]}</a></div>
          })}
    </div>
  );
}

import React from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import './App.css';
import {issue} from './HashStore';
import {BASE_URL} from './settings';

export default function QRPrinter() {
  var values = [1,2,3,4,5,6,7,8,9,10];
  var hashes = values.map((value) => {
    return issue({"seq":value});
  });

  return (
    <div>
        <p>Issued {values.length} QR codes</p>
        {hashes
            .map((value, index) => {
        return <div><h2>{value}</h2><a href={BASE_URL + "/printer/" + value}>
          <QRCode value={BASE_URL + "/printer/" + value} level="M" size="120"></QRCode></a></div>
        })}
    </div>
  );
}

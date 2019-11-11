import React from 'react';
import {history, HASH_ATTR, reset} from './HashStore';
import './App.css';

export default function Intro(props) {
  return (
    <div>
      <h2>Forestry blockchain demo</h2>
      <a href="/issue">Issue new raw material codes</a>
      <p>Start by clicking the link above to issue 10 new initial codes. View object data by clicking on the QR codes.
        Object data view also allows creating new subproducts or viewing history of products</p>
        <p>Reset button resets the state of the application.</p>
      <div>
      <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

import React, {useState} from 'react';
import QRCode from 'qrcode.react';
import logo from './logo.svg';
import {create, find, HASH_ATTR} from './HashStore';
import './App.css';

export default class QRRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sku: ""
        }

        this.handleSkuChange = this.handleSkuChange.bind(this);
        this.register = this.register.bind(this);
    }
    handleSkuChange(event) {
        this.setState({sku: event.target.value});
    }
    register(event) {
        var result = create(this.props.match.params.hash, this.state)
        this.props.history.push("/printer/" + result);
    }

    render(props) {
        var parent = this.props.match.params.hash;
        var parentObject = find(parent);
        return (
        <div>
            <h3>Register product</h3>
            <p>Source: {this.props.match.params.hash}></p>
            <label>SKU<input type="text" onChange={this.handleSkuChange} value={this.state.sku}></input></label>
            <button onClick={this.register}>Register</button>
        </div>
        );
    }
}

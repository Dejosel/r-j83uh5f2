import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state = {
			leng:0
		}
	}
	counter(event){
		this.setState({
			leng: event.target.value.length
		})
	}
	render() {
		return (
			<div className="container">
			<textarea onChange={this.counter.bind(this)} rows="3" ></textarea>
			<div className="counter">{this.state.leng}</div>
			</div>
			);
		}
	}

	export default App;

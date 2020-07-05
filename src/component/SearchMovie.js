import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router';
import axios from 'axios';

import MovieDetail from './MovieDetail'

class SearchMovie extends Component {

	constructor(){
		super();

		this.state = {
			movies_result : null,
			selected_movieid : null,
			label_text : null
		};

		this.handleKeyUp = this.handleKeyUp.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){
		if(this.props.location && this.props.location.state){
			this.setState({
				movies_result: this.props.location.state.search_result
			});

			//replace the history with null so that user can search for new movies & will not get stuck to previous search result
			this.props.history.replace('', null);
		}
	}

	handleKeyUp(event){
		

		let inputVal = event.target.value.trim(); //trim whitespaces
		let inputLen = inputVal.length; //gives the length of the input characters
		if(inputLen >= 2){
			
			try {
			//call to api using axios
		      axios.get('http://www.omdbapi.com/?apikey=b9bd48a6&s='+inputVal+'&type=movie')
			  .then((response) => {
			  	console.log("result", response.data);
			  	if(response.data.Response == "False"){
			  		this.setState({
				    	label_text : "No results found"
				    });
			  	}
			  	else {
			  		this.setState({
				    	label_text : null
				    });
			  	}
			    this.setState({
			    	movies_result : response.data.Search
			    });			    
			  });
	        } catch(e) {
	            console.log(e);
	        }
		}
	}	

	handleClick(e, id){
		if(id != null){
			this.setState({
				selected_movieid : id
			});
		}	
	}

	render(){
		if(this.state.selected_movieid){
			return(
				<Redirect to={{pathname: "/movie_detail", state: {id:  this.state.selected_movieid, result: this.state.movies_result}}} />
			)
		}

		return(
			<div className="container pt-5">
				<input className="border-secondary p-2" style={{width: '100%'}}  type="text" placeholder="Search Movies.." onKeyUp = {this.handleKeyUp} />
				<label className="text-danger">{this.state.label_text}</label>
				{
					this.state.movies_result ?
					<div>
						<ul className="list-group pt-2">
						    {
						      this.state.movies_result.map((item, i) => <li className="list-group-item" key={i} onClick={(e) => this.handleClick(e, item.imdbID)}>{item.Title}</li>)
						    }
						</ul>
					</div>
					: null
				}
			</div>
		)		
	}

}

export default SearchMovie;
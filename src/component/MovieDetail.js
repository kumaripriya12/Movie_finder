import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class MovieDetail extends Component {

	constructor(props){
		super(props);

		this.state = {
			movie_detail : null
		};

		this.goBack = this.goBack.bind(this);
	}

	componentDidMount() {
		try {
		//call to api using axios
	      axios.get('http://www.omdbapi.com/?apikey=b9bd48a6&i='+this.props.location.state.id)
		  .then((response) => {
		    this.setState({
		    	movie_detail : response.data 
		    });		    
		  });
        } catch(e) {
            console.log(e);
        }
	}

	goBack(){
		this.props.history.push({
			pathname : '/',
	        state :{
	        search_result : this.props.location.state.result
	        }
		});
	}

	render(){
			if(!this.state.movie_detail)
				return null;

			return(
				<div className="container pt-5">
					<div className="row">
						<div className="col-md-6">
							<img className="img-fluid img-thumbnail" src={this.state.movie_detail.Poster} alt={this.state.movie_detail.Title} style={{width: 350+'px'}} height='250px' />
						</div>
						<div className="col-md-6 text-left">
							<h1 className="font-weight-bold">{this.state.movie_detail.Title}</h1>
							<hr />
							<strong>{this.state.movie_detail.Plot}</strong>
							<hr />
							Starring - {this.state.movie_detail.Actors}
							<hr />
							Genre - {this.state.movie_detail.Genre}
							<hr />
							<small>Released on - {this.state.movie_detail.Released}</small>
						</div>
					</div>

					<div className="row">
						<div className="col text-center">
							<button className="btn btn-outline-dark btn-block" onClick={this.goBack}>Back</button>
						</div>
					</div>					
				</div>
			)
	}

}

export default withRouter(MovieDetail);
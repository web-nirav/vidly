import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Paging from './paging';
import Like from './like';

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleLike = movie => {
    const movies = this.state.movies.map((m) => {
        if(m._id === movie._id){
            m.liked = !m.liked;
        }
        return m;
    });
    this.setState({movies});
 }

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database.</p>;

    let pages = count / 2;

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td><Like onLike={this.handleLike} movie={movie} /></td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Paging pages={pages} />
      </React.Fragment>
    );
  }
}

export default Movies;

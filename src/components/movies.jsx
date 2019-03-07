import React, { Component } from "react";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" }
  };

  componentDidMount = function() {
    // using spread operator(...Array) to add new element and create new array
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres }); // here key and value both named as genres so we will use once
  };

  handleLike = movie => {
    const movies = this.state.movies.map(m => {
      if (m._id === movie._id) {
        m.liked = !m.liked;
      }
      return m;
    });
    this.setState({ movies });
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handlePageChange = page => {
    // console.log(page);
    this.setState({ currentPage: page });
  };

  handleSelectGenre = genre => {
    // console.log(genre);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = path => {
    // console.log(path);
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.setState({ sortColumn });
  };

  render() {
    // using object destructuring and rename it to count
    // const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      genres,
      selectedGenre,
      sortColumn
    } = this.state;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;
    const { length: count } = filtered;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const movies = paginate(sorted, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleSelectGenre}
          />
        </div>
        <div className="co">
          <p>Showing {count} movies in the database.</p>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onSort={this.handleSort}
            onDelete={this.handleDelete}
          />
          <Pagination
            itemCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;

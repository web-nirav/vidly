import React, { Component } from "react";
class MoviesForm extends Component {
  handleSave = () => {
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h2>Movies Form For: {this.props.match.params.id}</h2>
        <button className="btn btn-sm btn-primary" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MoviesForm;

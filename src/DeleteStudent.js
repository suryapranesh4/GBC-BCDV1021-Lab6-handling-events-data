import axios from "axios";
import React from "react";

class AddStudent extends React.Component {
  state = {
    id: "",
  };

  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleDelete = (event) => {
    event.preventDefault();
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(function (response) {
        console.log(response);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="parentAddStudent">
        <div className="inputTitle">Delete Student</div>
        <form onSubmit={this.handleDelete}>
          <label>
            Student Id
            <input type="text" name="id" onChange={this.handleChange} />
          </label>
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;

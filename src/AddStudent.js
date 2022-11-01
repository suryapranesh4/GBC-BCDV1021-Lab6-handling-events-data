import axios from "axios";
import React from "react";
import "./App.css";

class AddStudent extends React.Component {
  state = {
    name: "",
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        user: this.state.name,
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    return (
      <div className="parentAddStudent">
        <div className="inputTitle">Add Student</div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Student Name
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;

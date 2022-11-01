import axios from "axios";
import React from "react";

class UserList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({ users: res.data });
    });
  }

  handleDelete = async (event, id) => {
    event.preventDefault();
    let deleteSuccess = false;
    await axios
      .delete(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(function (response) {
        console.log(response);
        console.log(response.data);
        deleteSuccess = true;
      })
      .catch(function (error) {
        console.log(error);
      });
    if (deleteSuccess) {
      this.setState({
        users: this.state.users.filter((user) => user.id !== id),
      });
    }
  };

  render() {
    return (
      <div className="parentListStudent">
        <div className="listTitle">Student List</div>
        <div className="students">
          {this.state.users.map((user, i) => {
            let { name, id } = user;
            return (
              <div key={i} className="eachStudent">
                <span>
                  {id} {name}
                </span>
                <button onClick={(e) => this.handleDelete(e, id)}>
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default UserList;

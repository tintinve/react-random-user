import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import "./my.scss";

class User extends React.Component {
  onClickCapture = () => {
    console.log(this.props.id);
    this.props.onClickCallback(this.props.id);
  };
  render() {
    return (
      <section>
        <h1>{this.props.name}</h1>
        <h2>{this.props.lastName}</h2>
        <h2>{this.props.login}</h2>
        <h2>{this.props.latitude}</h2>
        <h2>{this.props.longitude}</h2>
        <img src={this.props.image} alt={"logo"} />
        <button onClick={this.onClickCapture}>Delete</button>
      </section>
    );
  }
}
class UserList extends React.Component {
  state = {
    users: []
  };
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then(e => e.json())
      .then(data => {
        this.setState({
          users: data.results
        });
      });
  }
  childClicked = id => {
    console.log(id);
    const copy = this.state.users.slice();
    const index = copy.findIndex(u => {
      return u.login.md5 === id;
    });
    console.log(index);
    copy.splice(index, 1);
    console.log(copy);
    this.setState({
      users: copy
    });
  };
  test() {
    console.log("A");
  }
  render() {
    const users = this.state.users.map(user => {
      return (
        <User
          name={user.name.first}
          lastName={user.name.last}
          login={user.login.username}
          latitude={user.location.coordinates.latitude}
          longitude={user.location.coordinates.longitude}
          image={user.picture.large}
          id={user.login.md5}
          onClickCallback={this.childClicked}
        />
      );
    });
    return (
      <div>
        <h1>User list</h1>
        {users}
      </div>
    );
  }
}

//Lo que está en verde es el nombre de la función que renderea, usualmente es "APP"
ReactDOM.render(<UserList />, document.getElementById("module6"));

/*
const numbers = [1,2,3,4,5];
const newNumbers = numbers.map(n=>{
    return n*2
})*/

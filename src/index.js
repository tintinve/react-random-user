import React from "react";
import ReactDOM from "react-dom";
//import "./index.css";
import "./my.scss";
/*
let namesArray = [];
function FetchUsers() {
  fetch("https://randomuser.me/api/?results=50")
    .then(e => e.json())
    .then(showNames);
  function showNames(names) {
    namesArray.push(names);
  }
  console.log(namesArray);

  return (
    <article>
      <h1>${namesArray}</h1>
    </article>
  );
}*/
function User(props) {
  return (
    <section>
      <h1>{props.firstname}</h1>
    </section>
  );
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
  render() {
    const users = this.state.users.map(user => {
      return <User firstname={user.name.first} />;
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

import React, { Component } from 'react';
import _ from 'lodash';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const students = [
  {id: '12', name: 'J', score: 23},
  {id: '14', name: 'Bank', score: 27},
  {id: '18', name: 'Bob', score: 22}
]

const Home = () => (<div>Home
  <li><Link to="/students">students</Link></li>
</div>)
const Students = () => (
  <div>
    {
      _.map(students, s => <StudentLink {...s} key={s.id}/>)
    }
    <Route path="/students/:id" component={StudentContainer}/>
    <li><Link to="/">back</Link></li>
  </div>
)
const StudentContainer = ({match}) => {
  let s = _.find(students, ['id', match.params.id])
  return (
    <StudentLine {...s} key={s.id}/>
  )
}
const StudentLink = ({id, name}) => (
  <div><Link to={`/students/${id}`}>{name}</Link></div>
)
const StudentLine = ({id, name, score}) => (
  <div>No ={id} Name :{name} Score ={score}</div>
)
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/students" component={Students}/> 
        </div>       
      </Router>
    );
  }
}

export default App;
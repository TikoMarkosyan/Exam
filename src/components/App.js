import React, { Component } from 'react';
import Users from './Users'
import FavoriteUsers from './FavoriteUsers'
import datas from './data.json'
import _ from 'lodash';

const BASE_URL = 'https://api.github.com/users';
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data : datas,
      id:"",
      newdata : [],
      newFavourite:[]
    }
  }

  componentWillReseveProps(nextProps){
    console.log(nextProps + " re");
  }

  getUser(){
    fetch(BASE_URL).then(data => data.json())
    .then(res => {
      this.setState({
        data: res
      })
    })
    .then(res => {
      this.setState({
        newdata: this.randomUsers()
      })
    })
  }

  componentDidMount(){
      this.getUser();
  }

  favoriteUsers = (el) => {
    const { newFavourite } = this.state;
    if(newFavourite.length === 10 ){
      this.setState({
        newFavourite: [],
      })
    }
      this.setState({
        newFavourite: this.state.newFavourite.concat(el),
      })
  }

  randomUsers = () => {
    console.log("random");
    const final = [];
    for (var i = 0; i < 4; i++) {
      final.push(datas[Math.floor(Math.random() * datas.length)])
    }
    this.setState({
      newdata:final
    })
    return final;
  }

  render(){
      const { data, newdata, newFavourite } = this.state;
      console.log(newFavourite);
      return(
        <div>
          { newdata.length != 0 ? <Users  data={newdata}  favoriteUsers={this.favoriteUsers} randomUsers={this.randomUsers}/> : null }
          <FavoriteUsers data={newFavourite} />
        </div>
      )
  }
}

export default App;

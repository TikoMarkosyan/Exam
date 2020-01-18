import React, { Component  } from 'react';
import './user.css'
class Users extends Component  {
  constructor(props){
      super(props)
      console.log(props);
  }

  render(){
    const {data} = this.props
      return(
        <>
        <div>
          {
            data.map(el => {
              return (
                <div className="flexs" onClick={() => { this.props.favoriteUsers(el) } }>
                <img className="user-img" src={el.avatar_url}/>
                <h4>{el.login}</h4>
                </div>
              )
            })
          }
        </div>
        <button className="button" onClick={this.props.randomUsers}>Upload</button>
        </>
      )
  }
}
export default Users;

import React, { Component } from 'react';

class Favorite extends Component {
  constructor(props){
    super(props)
    console.dir(this.props.data + " test");
  }
  render(){
    const { data } = this.props
        return(
          <div>
          <h1>
              {
                data.map(el => {
                  return (
                    <div className="flexs" >
                    <img className="user-img" src={el.avatar_url}/>
                    <h4>{el.login}</h4>
                    </div>
                  )
                })
              }
          </h1>
          </div>
        )
      }
    }

export default Favorite;

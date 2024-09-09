import React, { Component } from 'react'

export default class BoxClass extends Component {
  
    resultStyle = (name) => {
      if(name === "WIN"){
        return { border : '2px dashed blue'}
        }else if(name === "LOSE"){
            return { border : '2px dashed red'}
        }else {
            return { border : '2px dashed green'}
        }
    };
  
  render() {
    return (
      <div style={this.resultStyle(this.props.name)} className="game-box-item">
        <h2>
          {this.props.title}
        </h2>

        <div className="game-img">
            <img src={this.props.img}/>
        </div>

        <div className='state-text'>
          <p>State :</p>
          <p>{this.props.name}</p>
        </div>
      </div>
    )
  }
}

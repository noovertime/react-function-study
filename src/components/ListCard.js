import React, { Component } from 'react';  

class ListCard extends Component {
  constructor(props) {
    super(props); 
    this.onDeleteMe = this.onDeleteMe.bind(this); 
  }

  onDeleteMe(event) {
    console.log("삭제필요, id=", this.props.item.id); 
    this.props.onDeleteCard( this.props.item.id ); 
  }


  render() {
    return (
      <div className="card">
        <div className="cardDelete" onClick={this.onDeleteMe}>X</div>
        <div className="cardItem">
          <img src={this.props.item.image} />
          <div className="cardItemName">{this.props.item.name}</div>
        </div>
      </div>
    );
  } 
}
  
export default ListCard; 
  
import React, { Component } from 'react';  
import ListCard from './ListCard'; 


class List extends Component {
  constructor(props) {
    super(props); 

    this.updateList = this.updateList.bind(this); 
    this.onDeleteCard = this.onDeleteCard.bind(this); 
  }

  updateList() {
    let copyItems = Array.from(this.props.items); 
    let tags = [];  

    for(var i = 0; i < copyItems.length; i++) {
      tags.push(<ListCard key={i} 
                    item={copyItems[i]} 
                    onDeleteCard={this.onDeleteCard}></ListCard>
        ); 
    }

    return tags; 
  }


  render() {
    return (
      <div className="cardList">
          { this.updateList() }
      </div>
    );
  } 


  onDeleteCard(targetId) {
    this.props.onDeleteItem(targetId); 
  }

}
  
export default List; 
  
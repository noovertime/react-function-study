import React, { Component } from 'react'; 
import './App.css';
import List from './components/List'; 
import Create from './components/Create'; 

class App extends Component {
  constructor(props) {
    super(props); 

    this.state = {
      items : []
    }

    //
    this.onCreateItem = this.onCreateItem.bind(this); 
    this.onDeleteItem = this.onDeleteItem.bind(this); 
  }


  render() {
    return <div>
      <div>
        <List items={this.state.items} onDeleteItem={this.onDeleteItem}></List>
      </div>
      <div className="create">
        <Create onCreateItem={this.onCreateItem}></Create>
      </div>
      </div>
  }

  // 생성된 데이터 추가 
  onCreateItem(data) {
    let copyItems = Array.from(this.state.items); 
    const lastId = copyItems.length === 0 ? 0 : copyItems[copyItems.length - 1].id; 

    // 수신된 데이터를 가장 미지막에 추가 
    let nextId = lastId + 1; 
    copyItems.push( {
      id : nextId, 
      image : data.image, 
      name: data.name 
    }); 

    // 데이터 교체 
    this.setState( { items: copyItems } ); 
    console.log("App 추가. id=", nextId)
  }

  // 데이터 삭제 
  onDeleteItem(targetId) {
    console.log("App, onDeleteItem=" + targetId); 

    if(!targetId) {
      console.log("App, 삭제대상 없음"); 
      return; 
    }

    var copyItems = Array.from(this.state.items); 
    for(var i = 0; i < copyItems.length; i++) {
      if(copyItems[i].id === targetId) {
        console.log("App 삭제, id=" + targetId); 
        copyItems.splice(i, 1); 
        this.setState( {items : copyItems } ); 
        break; 
      }
    }
  }
} 

export default App;

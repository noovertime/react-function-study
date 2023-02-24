import React, { Component } from 'react';  


class Create extends Component {
  constructor(props) {
    super(props); 

    this.processSubmit = this.processSubmit.bind(this); 
  } 

  processSubmit(event) { 
    event.preventDefault(); 

    const imageValue = event.target.image.value; 
    const nameValue = event.target.name.value; 

    if(!imageValue || !nameValue) {
        alert("필수값을 채워주세요"); 
        return; 
    }

    // 전달하고 
    this.props.onCreateItem({ image: imageValue, name: nameValue}); 

    // 입력된 내용 지우기 
    event.target.image.value = ""; 
    event.target.name.value = ""; 
  }

  render() {
    return (
      <div>
        <form method="post" onSubmit={this.processSubmit}>
            <p><input type="text" name="image" placeholder="이미지 URL"></input></p>
            <p><input type="text" name="name"  placeholder="이름"></input></p>
            <p><input type="submit"></input></p>
        </form>
      </div>
    );
  } 
}
  
export default Create; 
  
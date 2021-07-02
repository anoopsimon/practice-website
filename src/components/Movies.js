import React, { Component } from 'react';
 import FuzzySearch from 'react-fuzzy'
const list = [{
  id: 1,
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald'
}, {
  id: 2,
  title: 'The DaVinci Code',
  author: 'Dan Brown'
}, {
  id: 3,
  title: 'Angels & Demons',
  author: 'Dan Brown'
}];

export class Movies extends Component {
  static displayName = Movies.name;

  constructor(props) {
    super(props);
    this.state = { 
      currentCount: 0 ,
      title:'Movies',
     
    
   };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

   handleOnSearch = (string, results) => {
    console.log(string, results);
  };

   handleOnHover = (result) => {
    console.log(result);
  };

   handleOnSelect = (item) => {
    console.log(item);
  };

   handleOnFocus = () => {
    console.log("Focused");
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      
        <FuzzySearch
      list={list}
      keys={['author', 'title']}
      width={430}
      onSelect={(newSelectedItem) => {
        // Local state setter defined elsewhere
       // setSelectedItem(newSelectedItem)
      }}
    />
      </div>
    );
  }
}

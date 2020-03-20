import React, {Component} from 'react'; 
  
class TodoLists extends Component { 
    render() 
    { 
        return (
          <ul>
            <li>{this.props.title}</li> 
          </ul>
        );  
  } 
}   
  
// Exporting the component 
export default TodoLists; 

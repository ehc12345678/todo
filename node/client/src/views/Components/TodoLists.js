import React, {Component} from 'react'; 
  
class TodoLists extends Component { 
    constructor(props) 
    { 
        super(props); 
        this.state = { items : [] }; 
    } 

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

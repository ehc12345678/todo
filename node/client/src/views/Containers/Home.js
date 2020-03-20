import React from 'react';
import { connect } from 'react-redux';

import { TodoLists } from '../Components/index';

export class Home extends React.Component {
  state = {
    todoLists: []
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('/todoLists')
      .then(res => res.json())
      .then((data) => {
          this.setState({ todoLists: data })
      })
      .catch(console.log)
  }

  componentDidUpdate = (prevProps) => {
  }

  render() {
    return (
      <div>
        <div className='header'>
          <h2>XYZ TODO List</h2>
        </div>
        <div className="instructions">
        instructions
        </div>
        <div className='radio-button-section'>
          <TodoLists title='Foo'/>
        </div>
      </div>
    );
  }
};

const mapStateToProps = function(state) {
  return { ...state }
};

const mapDispatchToProps = function(dispatch) {
  const dispatchActions = {
  };

  return {
    actions: dispatchActions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

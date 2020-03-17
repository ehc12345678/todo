import React from 'react';
import { connect } from 'react-redux';

import { TodoLists } from '../Components/index';

export class Home extends React.Component {

  constructor(props) {
    super(props);
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

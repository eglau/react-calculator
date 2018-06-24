import { connect } from 'react-redux';
//import { updateDisplay } from '../actions';

import Display from '../components/Display';

const mapStateToProps = (state) => {
  return {
    text: state.input.join('')
  };
}

export default connect(
  mapStateToProps
)(Display);
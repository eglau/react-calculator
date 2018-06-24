import { connect } from 'react-redux';
//import { updateDisplay } from '../actions';

import Display from '../components/Display';

const mapStateToProps = (state) => {
  return {
    text: state.display
  };
}

export default connect(
  mapStateToProps
)(Display);
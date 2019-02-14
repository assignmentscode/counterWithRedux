import { connect } from 'react-redux';
import Counter from './../components/Counter';
import { incrementCounter, decrementCounter } from './../redux/action/action';

const mapStateToProps = state => {
    return {
      counter : state.counter,
    }
  };

  const mapDispatchToProps = dispatch => {
    return {
      increment : () => {
          dispatch(incrementCounter());
      },
      decrement : () => {
        dispatch(decrementCounter());
      }
    }
  };
  const UpdateCounter = connect(
    mapStateToProps,
    mapDispatchToProps,
  ) (Counter);

  export default UpdateCounter;
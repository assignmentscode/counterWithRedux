import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { incrementCounter, decrementCounter } from '../redux/action/action';

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(incrementCounter());
  },
  decrement: () => {
    dispatch(decrementCounter());
  },
});
const UpdateCounter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default UpdateCounter;

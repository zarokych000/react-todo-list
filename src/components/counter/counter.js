import './counter.css';

const Counter = (props) => {
  const {all} = props;
  return (
    <span className="counter" tabIndex="1">
      {all}
    </span>
  );
};

export default Counter;
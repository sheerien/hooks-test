import React from "react";

function CountPage(props) {
  console.log(props);
  const increaseCount = () => {
    props.setCount(props.count + 1);
  };
  const decreaseCount = () => {
    props.setCount(props.count > 0 ? props.count - 1 : props.count);
  };
  const resetCount = () => {
    props.setCount(0);
  };

  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={() => increaseCount()}>+</button>
      <button onClick={() => resetCount()}>Reset</button>
      <button onClick={() => decreaseCount()}>-</button>
    </div>
  );
}

export default CountPage;

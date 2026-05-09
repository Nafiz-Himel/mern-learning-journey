// React.memo() is a higher order component that memoizes the result of a component. It prevents the component from re-rendering if the props have not changed. In this example, the ChildComponent will only re-render if the buttonName prop changes.
//If you are sending functions as props to a child component, you should use the useCallback hook to memoize the function. This will prevent the child component from re-rendering unnecessarily when the parent component re-renders.
import React from "react";

const ChildComponent = React.memo((props) => {
  console.log("Child component rendered");

  return (
    <div>
      <button onClick={props.handleClick}>
        {props.buttonName}
      </button>
    </div>
  );
});

export default ChildComponent;

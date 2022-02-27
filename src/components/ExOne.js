import { React, useState, useEffect } from "react";

// Create a button and increment a
// counter every time that button is
// clicked. Using the syntax shown above,
// log the counter on console after every render.

// Ex-1 and Ex-2 both in one

const ExOne = () => {
  const [counter, setCounter] = useState(0);

  // console.log("Initial render", counter);

  // useEffect(() => {
  //   // console.log("counter from useEffect", counter);
  // }, []);

  // challenge#
  // Use the useEffect dependency array to control how many
  // times it is logged. Log it only once and say,
  // "Hey! This is the initial value of Counter: { counter }".
  //  Make sure that it doesn't run on every render.

  useEffect(() => {
    console.log("Hey! This is the initial value of Counter:", counter);
  }, []);

  const counterHandler = () => {
    // console.log("From Click Handler Before Render", counter);
    setCounter(counter + 1);
    // console.log("From Click Handler After Render", counter);
  };

  // console.log("Just Before Render", counter);

  return (
    <>
      <h3>Ex-1 and Ex-2</h3>
      <button onClick={counterHandler}>Counter {counter}</button>
    </>
  );
};

export { ExOne };

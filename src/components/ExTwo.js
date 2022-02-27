import { React, useState, useEffect } from "react";

const ExTwo = () => {
  //   Open your console.
  // localStorage.setItem('myKey', 'myValue')
  // Go to Applications and you'll see this value updated.
  // Now, let's refresh the browser
  // You see that it's still there.
  //Local Storage values are preserved across sessions.
  // Let's read this value in console
  //using localStorage.getItem('myKey')
  // Now, let's try to store an array
  //into localStorage, you'll see that it loses the value
  // How do we solve this? JSON.stringify() to the rescue.
  // Let's take 5 minutes and try these API now.

  const [name, setName] = useState([]);

  const array = [
    "Pritam",
    "Rahul",
    "Shubham",
    "Suraj",
    "Palash",
    "Abishek",
    "sohan",
    "raju"
  ];

  localStorage.setItem("name", JSON.stringify(array));

  useEffect(() => {
    const getName = JSON.parse(localStorage.getItem("name"));
    setName(getName);
  }, []);

  return (
    <>
      <h3>Ex - 3 Save items to localStorage</h3>
      {name.map((eachName) => (
        <li>{eachName}</li>
      ))}
    </>
  );
};

export { ExTwo };

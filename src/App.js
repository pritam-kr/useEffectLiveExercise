import "./styles.css";
import { ExOne } from "./components/ExOne";
import { ExTwo } from "./components/ExTwo";

export default function App() {
  return (
    <div className="App">
      <h2>useEffect Exercise</h2>
      <ExOne />
      <ExTwo />
      <h3>Ex-4 </h3>
      <p>
        Use this codesanbox: https://codesandbox.io/s/wishlist-exercise-oydf9
        for the exercise. There's a working wishlist in this. However, the
        wishlist is not saved after it is updated. Use useEffect() and
        localStorage API to save this data to localStorage. Add a console log as
        well to print data updated every time this effect is run.
        <a
          tagret={"_blank"}
          href={
            "https://codesandbox.io/s/wishlist-to-localstorage-neogcamp-rqtjvv?file=/src/App.jsx"
          }
        >
          Link
        </a>
      </p>

      <a
        href={
          "https://codesandbox.io/s/get-data-ex-01-neogcamp-c8cxo7?file=/src/App.js"
        }
      >
        <h3>Ex- 01 To Get Data with axios</h3>
      </a>

      <a href={"https://codesandbox.io/s/load-products-neogcamp-u5uqot"}>
        {" "}
        <h3>Ex- 02 Show product </h3>
      </a>
    </div>
  );
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import Toggle from "./Toggle/index"
import { BsStar, BsStarFill } from "react-icons/bs"

/**
 * Challenge: refactor our app to use the Toggle.On 
 * and Toggle.Off components to conditionally render the
 * star icons from react-icons. (See Star.js for that code).
 * 
 * Reminders:
 * 1. Make sure to copy over the classNames from Star.js too!
 *    I've added some CSS that we don't want to lose.
 * 2. Clicking the Star should flip the Toggle state. Try to
 *    figure out how you can do that 🤔. Hint: we built something
 *    that lets us flip the Toggle state back and forth 😉
 */

function App() {
  return (
    <>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star " />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

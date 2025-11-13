// Debounce & Throttling Interview Question
// Debouncing:
// Executes a function after a delay once the user stops triggering the event.

// Throttling:
// Executes a function at regular intervals, ignoring extra calls within that period.


// ⚡ Debounce

// Waits until there’s a pause in events, then runs the function once after the delay.

// Example:

// Delay = 800ms

// You click: click-click-click-click (super fast)

// Debounce resets the timer each time you click

// So the function (triggerCount++) runs only once, after you stop clicking for 800ms.

// 🧠 Think of debounce like:

// “I’ll act only when you’re done clicking.”

// ⏱️ Throttle

// Runs the function at most once every 800ms, no matter how many times you click.

// Example:

// Delay = 800ms

// You click 10 times in 2 seconds

// Throttle allows the function to run immediately on the first click,
// then again only after every 800ms interval.

// 🧠 Think of throttle like:

// “I’ll act periodically while you keep clicking.”






// Question 1 :   Create a button UI and add debounce as follows =>
//          --> Show "Button Pressed <X> Times" every time button is pressed
//          --> Increase "Triggered <Y> Times" count after 800ms of debounce

import React, { useState, useRef } from "react";

function App() {
  const [pressCount, setPressCount] = useState(0);
  const [triggerCount, setTriggerCount] = useState(0);
  const timerRef = useRef(null);

  const handleClick = () => {
    setPressCount((prev) => prev + 1);

    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setTriggerCount((prev) => prev + 1);
    }, 800);
  };

  return (
    <>
      <button onClick={handleClick}>Press Me</button>
      <p>Button Pressed {pressCount} Times</p>
      <p>Triggered {triggerCount} Times (after 800ms debounce)</p>
    </>
  );
}

export default App;


// Question 2 : Create a button UI and add throttle as follows =>
//          --> Show "Button Pressed <X> Times" every time button is pressed
//          --> Increase "Triggered <Y> Times" count after 800ms of debounce

import React, { useState, useRef } from "react";

function App() {
  const [pressCount, setPressCount] = useState(0);
  const [triggerCount, setTriggerCount] = useState(0);
  const lastTriggered = useRef(0);

  const handleClick = () => {
    setPressCount((prev) => prev + 1);

    const now = Date.now();
    if (now - lastTriggered.current >= 800) {
      setTriggerCount((prev) => prev + 1);
      lastTriggered.current = now;
    }
  };

  return (
    <>
      <button onClick={handleClick}>Press Me</button>
      <p>Button Pressed {pressCount} Times</p>
      <p>Triggered {triggerCount} Times (throttled every 800ms)</p>
    </>
  );
}

// export default App;

import React, { useState } from "react";
import { Prompt } from "react-router-dom";

export default function FormInput() {
  let [isBlocking, setIsBlocking] = useState(false);

  const onSubmit = (event) => {
    setIsBlocking(false);
    event.target.reset();
    event.preventDefault();
  };

  return (
    <div>
      <Prompt
        when={ isBlocking }
        message={ (location) =>
          `Are you sure you want to go to ${location.pathname}`
        }
      />
      {
        /* 
          Sometimes you want to prevent the user from navigating away from a page.
          The most common use case is when they have entered some data into a form but haven't submitted it yet,
          and you don't want them to lose it.
          Hence Prompt component is used to give heads up to user regarding chances of loosing entered data
        */
      }
      <form onSubmit={ onSubmit }>
        <span>Blocking? { isBlocking ? "Yes, click a link or the back button" : "Nope" }</span>
        <div>
          <input
            size="50"
            placeholder="type something to block transitions"
            onChange={event => {
              setIsBlocking(event.target.value.length > 0);
            }}
          />
        </div>
        <button>Submit to stop blocking</button>
      </form>
    </div>
  );
}

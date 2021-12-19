import { useState } from 'react';

export default function CharModal( { children } ) {
    const [show, setShow] = useState(false);

  return (
    <>
    <div className={`hidden ${show ? "modal" : ""}`}>
      <div className="modalContent">
      <h2 className="modalHeading">Select Characters</h2>
        <div className="charContainer">
          { children }
        </div>
      </div>
    </div>
    <div className="controls">
        <button onClick={() => {
          setShow(true);
          }
        } className="characterBtn">
          Select characters
        </button>
    </div>
    </>
  )
}


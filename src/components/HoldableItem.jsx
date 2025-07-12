import React, { useRef } from "react";

const HoldableItem = ({ onHold, children, holdTime = 400 }) => {
  const timerRef = useRef(null);

  const startHold = () => {
    timerRef.current = setTimeout(() => {
      onHold(); // Trigger callback
    }, holdTime);
  };

  const cancelHold = () => {
    clearTimeout(timerRef.current);
  };

  return (
    <div
      onMouseDown={startHold}
      onMouseUp={cancelHold}
      onMouseLeave={cancelHold}
      onTouchStart={startHold}
      onTouchEnd={cancelHold}
    >
      {children}
    </div>
  );
};

export default HoldableItem;

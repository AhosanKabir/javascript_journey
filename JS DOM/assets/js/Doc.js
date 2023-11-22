//! ========= Common Properties ==========

//* ---------------- 'type' -----------
// type: A string representing the type of the event (e.g., "click", "keydown", "mousemove").


//* ---------------- 'target' -----------
// target: A reference to the DOM element that triggered the event.


//* ---------------- 'currentTarget' -----------
// currentTarget: A reference to the DOM element that the event handler is currently attached to.

//* ---------------- 'timeStamp' -----------
// timeStamp: A timestamp indicating when the event occurred (in milliseconds since the document was loaded).


//* ---------------- 'clientX' -----------
// clientX and clientY: The horizontal and vertical coordinates of the mouse pointer relative to the browser's viewport when the event occurred.


//* ---------------- 'pageX' -----------
// pageX and pageY: The horizontal and vertical coordinates of the mouse pointer relative to the entire document when the event occurred.


//* ---------------- 'keyCode' -----------
// keyCode and which: For keyboard events, these properties represent the code of the pressed key.



//!====== Mouse Event Properties =========

//* ---------------- 'button' -----------
// button: An integer indicating which mouse button was pressed (0 for left button, 1 for middle button, 2 for right button).

//* ---------------- 'buttons' -----------
// buttons: A bitmask indicating which mouse buttons are currently pressed.

//* ---------------- ' movementX and movementY' -----------
// movementX and movementY: The change in mouse position since the last mousemove event.

//! ====== Keyboard Event Properties ======

//* ---------------- ' key' -----------
// key: The string representing the key pressed (e.g., "A", "Enter", "Shift").


//* ---------------- 'shiftKey' -----------
// shiftKey, ctrlKey, altKey, and metaKey: Booleans indicating whether the Shift, Ctrl, Alt, or Meta keys were pressed during the event.

//! ====== Form Event Properties ===========

//* ---------------- 'target.value' -----------
// target.value: The value of an input element when its value changes (e.g., for input and textarea elements).

//* ---------------- 'target.checked' -----------
// target.checked: A boolean indicating whether a checkbox or radio button is checked.

//* ---------------- ' target.selectedIndex' -----------
// target.selectedIndex: The index of the selected option in a dropdown/select element.



//!=========== Event Methods =============

//* ---------------- 'preventDefault()' -----------
// preventDefault(): A method that prevents the default behavior associated with the event (e.g., prevents a form from submitting or a link from navigating).

//* ---------------- 'stopPropagation()' -----------
// stopPropagation(): A method that stops the propagation of the event through the DOM tree, preventing it from reaching parent or sibling elements.
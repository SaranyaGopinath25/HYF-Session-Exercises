
Exercises
Exercises Part 1
1. Create a Re-usable Button Component
Create a new component called Button

Accept text and onClick as props

Render a <button> element with the text prop as its content

Attach the onClick prop to the button's onClick event handler

2. Create a Card Component
Create a new component called Card

Accept title, description, and imageUrl as props

Use destructuring to extract the props

Render a card-like structure with the provided title, description, and imageUrl

3. Create a Layout Component
Create a new component called Layout

Accept children as a prop

Render a layout structure (e.g. header, main content area, footer) with the children prop rendered inside the main content area

Pass children by adding them in between the tags of the parent component

4. Implement Conditional Rendering
Create a new component called ToggleContent

Accept a show prop as a boolean value

Accept content as a prop, which can be a string or a React element

Render the content prop only if the show prop is true, otherwise render a message

Exercises Part 2
5. Create a Counter Component
Create a new component called Counter

Use the useState hook to manage a count state variable

Implement functions to increment (count up) and decrement (count down) the count

Render the current count value and buttons to call the increment and decrement functions

6. Develop a Form Component
Create a new component called Form

Use the useState hook to manage the state of form input fields

Implement a function to handle form submission, you may want to use onSubmit in combination with a <button type="submit">

Render a form, input fields for each form field and the mentioned submit button

7. Create a ParentChild Component Set
Create a new component called Parent

Create another component called Child

In the Parent component, use the useState hook to manage a state variable

Implement a function to update the state variable

Render the Child component and pass the state variable and the update function as props

In the Child component, render the data received from the parent and a button to call the update function that changes the state
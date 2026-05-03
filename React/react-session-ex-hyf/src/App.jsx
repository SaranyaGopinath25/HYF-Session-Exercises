import Greeting from "./components/Greeting";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card/Card.jsx";
import Layout from "./components/Layout.jsx";
import ToggleContent from "./components/Toggle/ToggleContent.jsx";
import Counter from "./components/Counter/Counter.jsx";
import Form from "./components/Form/Form.jsx";
import Parent from "./components/ParentChild/Parent.jsx";
import ClickCounter from "./components/ClickCounter/ClickCounter.jsx";
import TodoForm from "./components/ToDoForm/TodoForm.jsx";
import Clock from "./components/Clock/Clock.jsx";
import WindowResize from "./components/Window/WindowResize.jsx";

function App() {
  const btnText = "Click Me!";

  const handleClick = () => {
    console.log("Button is Clicked");
  };

  const imageUrl = "https://nordicwallart.com/cdn/shop/files/Positive_Mindset_Inspirational_Quotes_Posters_Wall_Art_Fine_Art_Canvas_Prints_Simple_Typographic_Wall_Decor_For_Living_Room_Bedroom_Minimalist_Home_Decor_2025_01.webp?v=1755095295";
  // "https://react.dev/images/docs/scientists/1bX5QH6.jpg";

  const cont =
    "Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.";

  return (
    <>
      <Greeting />

      <Button text={btnText} onClickFn={handleClick} />


      <Card
        title="Quotes for Inspiration"
        description="Sample card for listing quotes for inspiration in life and work and to keep you motivated and positive."
        imgUrl={imageUrl}
      />

      
      <Button text={btnText} onClickFn={handleClick} />

      <ToggleContent show={true}>
        <h3>Conditional Rendering for React!!</h3>
        <p>
          Your components will often need to display different things depending
          on different conditions. In React, you can conditionally render JSX
          using JavaScript syntax like if statements, &&, and ? : operators.
        </p>
      </ToggleContent>

      <Counter />

      <Form />

      <Parent />

      <h1>Click Counter</h1>

  <ClickCounter />

  <TodoForm />

  <Clock />

  <WindowResize />

    </>
  );
}

export default App;

import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card>
        <h1>My Card</h1>
        <p>This is some content for card</p>
      </Card>

      <Card>
        <h1>My Card 1</h1>
        <p>This is some content for card</p>
      </Card>

      <Card>
        <h1>My Card 2</h1>
        <p>This is some content for card</p>
      </Card>

      <Card>
        <h1>My Card 3</h1>
        <p>This is some content for card</p>
      </Card>
    </div>
  );
};

export default App;

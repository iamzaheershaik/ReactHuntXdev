import { useState } from "react";
const App = () => {
  const [friends, setFriend] = useState(["zaheer", "vivek", "khush", "partiv"]);

  const addOneFriend = () => {
    setFriend([...friends, "Reema"]);
  };
  const removeFriend = () => {
    setFriend(
      friends.filter((f) => {
        return f !== "khush";
      }),
    );
  };
  const updateFriend = () => {
    setFriend(friends.map((f) => {
     return  f === "zaheer" ? 'zaheerShaik': f 
    }))
  }
  return (
    <section>
      {friends.map((f) => (
        <li key={Math.random}>{f}</li>
      ))}
      <button onClick={addOneFriend}>AddNewFriend</button>
      <button onClick={removeFriend}>RemoveFriend</button>
      <button onClick={updateFriend}>UpdateFriend</button>
    </section>
  );
};

export default App;

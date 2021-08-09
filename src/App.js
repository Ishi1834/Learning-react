import Todo from "./Components/List";

function App() {
  return (
    <div>
      <h1>Reading List</h1>
      <Todo title="The time machine" author="H.G.Wells" />
      <Todo title="The Supernova Era" author="Cixin Liu" />
    </div>
  );
}

export default App;

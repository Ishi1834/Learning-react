import Header from "./Components/Header";
import Todo from "./Components/List";

function App() {
  return (
    <div>
      <Header />
      <Todo title="The time machine" author="H.G.Wells" />
      <Todo title="The Supernova Era" author="Cixin Liu" />
    </div>
  );
}

export default App;

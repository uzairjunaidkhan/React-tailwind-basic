import Chai from "./chai";

function App() {
  const variable = "this is a variable"
  return (
    //jsx only returm one element so if you want to return multiple elements
    //you need to wrap them in div or fragment(empty tag <> this is fragment </>)
    <>
      <Chai />
      <h1>uzair | {variable}</h1>
    </>
  );
}

export default App;

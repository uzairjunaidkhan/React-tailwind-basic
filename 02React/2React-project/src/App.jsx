import "./App.css";
import Card from "./components/Card";

//componet function name should be start with capital letter if you want to export them
function App() {
  let obj={
    name:"Ali",
    age:18
  }
  let arr= [1,2,3]
  return (
    // react uses jsx instead of simple HTML
    // jsx only returm one element so if you want to return multiple elements
    // you need to wrap them in div or fragment(empty tag <> this is fragment </>)
    // in jsx all tags must be closing tags eg img tag s wirtten as <img/>
    // in jsx variable must be pass in curly bracket eg {variable}
    // in jsx props to component must be pass in form of variable which can be arry/object or any other type
    <>
      <h1 className="mb-4 bg-green-500 rounded-xl p-2 text-white font-bold cursor-pointer hover:bg-black">
        Hello world!
      </h1>
      <Card name="Khan" btn="View Profile →" obj1={obj} arr1={arr}/>
      <Card name="Ali" obj1={obj} arr1={arr}/>
    </>
  );
}

export default App;

import "./css/example.css";
import "./css/hobby.css";
import { AppClass } from "./AppClass";
import { NameAndPlaceClass } from "./NameAndPlaceClass";
import { Hello } from "./components/Hello";
import { HelloMacedonian } from "./components/HelloMacedonian";
import { Goodbye } from "./components/Goodbye";
import { Hobby } from "./components/Hobby";
import { FaveHobby } from "./components/FaveHobby";
import { TextAboutHobby } from "./components/TextAboutHobby";

//все компоненты должны быть с большой буквы, чтбы риакт не считал их хтмл объектами

function App() {
  
  let number = 10;
  const element = <h1>Hello from Vika!</h1>

  const student = {
    name: "Laura",
    lastname: "Angelova",
    image: "https://webmg.ru/wp-content/uploads/2022/01/47-20220108_191458-900x600.jpg"
  }

  function studentFullName(student){
    return student.name + ' '  + student.lastname;
  }

  const print = () => {
    console.log("hello from the console!");
  }

  return (
    <div style={{marginLeft: 10}}>
      <h1>Hello!</h1>
      <h2 className="hello">Hello from React</h2>
      <p>5 + 5</p>
      <p> The result is: {5 + 5 - number} </p>
      {element}
      <h2>Hello, {student.name}!</h2>
      <h2>Hello, {studentFullName(student)}!</h2>
      <button onClick={print}>Click me!</button>
      <img src={student.image} style={{width: 150, height: 100}}></img>
      <a target="_blank" rel="noreferrer" href="http://www.google.com">Google</a>
      <AppClass />
      <NameAndPlaceClass />
      <HelloMacedonian />
      <Hello />
      <Goodbye />
      <Hobby />
      <FaveHobby />
      <TextAboutHobby />
    </div>
  );
}

export default App;

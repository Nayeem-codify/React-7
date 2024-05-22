import { useState } from 'react'
import { getDatabase, ref, set, push, onValue } from "firebase/database";

function App() {
  let [text, setText] = useState("")
  let [alltodo, setAlltodo] = useState([])
  const db = getDatabase();

  let handleForm = (e) => {
    setText(e.target.value);
  }
  //Write Firebase//
  let handleSubmit = () => {
    if(text !== ""){
      set(push(ref(db, 'alltodo')), {
      mytext: text,
  }).then(() => {
      console.log("Successful");
  });
    }else{
      console.log("Text Not Found");
    }
  }

  //Read Firebase//
    const TodoRef = ref(db, 'alltodo');
      onValue(TodoRef, (snapshot) => {
        let arr = []
      const data = snapshot.val();
    console.log(data);
});

  return (
    <>
    <input onChange={handleForm} name='text' placeholder='Enter Your Task'/>
    <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default App

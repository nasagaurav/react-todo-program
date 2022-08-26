import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [a, seta] = useState([]);
  const [s, sets] = useState('');
  const [ob, setob] = useState(null); //{title:"",status:false}

  const [id, setid] = useState(-1);
  const hc1 = (e) => {
    // console.log(e.target.name, e.target.value);
    sets(e.target.value);
  };
  const hc2 = (e) => {
    setob({ ...ob, title: e.target.value });
  };

  const insert = () => {
    const newTodo = { title: s, status: false };
    seta([...a, newTodo]);
  };

  const p1 = (i, status) => {
    const newTodos = a.map((item, index) =>
      index === i ? { ...item, status: true } : item
    );
    seta(newTodos);
  };

  const p2 = (index, item) => {
    setid(index);
    setob(item);
  };

  const p3 = (i) => {
    const newTodos = a.filter((x, j) => i !== j);
    seta(newTodos);
  };

  const update = () => {
    // id ie.d index
    //ob ={title:"",status:false}
    const updatedTodos = a.map((x, i) => (i === id ? ob : x));
    seta(updatedTodos);
    setid(-1);
    setob(null);
  };

  return (
    <div>
      <h1>All todos {a.length}</h1>
      <input value={s} onChange={hc1} />
      <button onClick={insert}>add</button>

      {id >= 0 && (
        <>
          <h2>edit {id}</h2>
          <input value={ob.title} onChange={hc2} />
          <button onClick={update}>update</button>
        </>
      )}
      <ol>
        {a.map((item, index) => (
          <li>
            <font color={item.status ? 'green' : 'red'}>{item.title}</font>
            <button onClick={() => p1(index, !item.status)}>update</button>
            <button onClick={() => p2(index, item)}>edit</button>
            <button onClick={() => p3(index)}>delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

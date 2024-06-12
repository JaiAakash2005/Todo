import React, { useState, useRef } from "react";
import "./Contain.css";

const Contain = ({ varry }) => {
  const [state, setState] = useState({
    condition: false,
    arr: [],
    editIndex: null,
  });
  const inputRef = useRef();
  const saveRef = useRef();

  //const inputNewValue = inputRef.current.value.trim();

  function handleClick() {
    const inputValue = inputRef.current.value.trim();
    if (inputValue !== "")
      setState((prev) => ({
        ...prev,
        arr: [...prev.arr, inputValue],
      }));
    inputRef.current.value = "";
  }
  function handleDelete(index) {
    setState((prev) => ({
      ...prev,
      arr: prev.arr.filter((_, i) => i !== index),
    }));
  }
  function handleEdit(index) {
    setState((prev) => ({
      ...prev,
      condition: !prev.condition,
      editIndex: index,
    }));
  }
  function handleSaveEdit() {
    setState((prev) => ({
      ...prev,
      arr: [saveRef.current.value.trim()],
      condition: !prev.condition,
      editIndex: null,
    }));
  }
  return (
    <div
      className={varry}
      style={{
        width: "100%",

        position: " absolute",
        left: "42%",
        bottom: "60%",
      }}
    >
      <div className="container">
        <h3>What's your plan today?</h3>
        <div className="form">
          <input ref={inputRef} type="text" placeholder="Add your task" />
          <button onClick={handleClick} className="submit">
            Create
          </button>
          <ul>
            {state.arr.map((item, index) => {
              return state.condition ? (
                <>
                  <input ref={saveRef} defaultValue={item} />
                  <button
                    className="edit-btn"
                    onClick={
                      state.condition ? handleSaveEdit : handleEdit(index)
                    }
                  >
                    {state.condition ? "Save" : "Edit"}
                  </button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </>
              ) : (
                <li key={index}>
                  {item}
                  <button
                    className="edit-btn"
                    onClick={() => handleEdit(index)}
                  >
                    {state.condition ? "Save" : "Edit"}
                  </button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contain;

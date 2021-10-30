import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState, useRef } from "react";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const clgInputRef = useRef();

  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    const enteredClgName = clgInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0 || enteredClgName.trim().length === 0) {
      setError({
        title: "InValid input",
        message: "Please enter a Valid name and age(non-empty values).",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "InValid Age",
        message: "Please enter a Valid  age(age > 0).",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge, enteredClgName);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
    clgInputRef.current.value = '';
  };
 
  const errorChangeHandler = () => {
    setError(null);
  };

  return (
   <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorChangeHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          ></input>
          <label htmlFor="clgname">College Name</label>
          <input 
          type="text" 
          id="clgname" 
          ref={clgInputRef} 
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

import { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../Button';

export const Form = ({ setTodoList, setModalActive }) => {
  const [input, setInput] = useState({
    title: '',
    time: '',
  });
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      ...input,
    };
    if (input.title.trim().length > 0 && input.time.trim().length > 0) {
      setTodoList((prev) => [...prev, newTodo]);
      setModalActive(false);
      setInput({ title: '', time: '' });
    }
  };
  return (
    <FormContainer onSubmit={submitHandler}>
      <h3>Todo</h3>
      <label htmlFor="title">
        Title:
        <input
          type="text"
          name="title"
          id="title"
          value={input.title}
          onChange={(e) => setInput({ ...input, title: e.target.value })}
        />
      </label>
      <label htmlFor="time">
        Time:
        <input
          type="text"
          name="time"
          id="time"
          value={input.time}
          onChange={(e) => setInput({ ...input, time: e.target.value })}
        />
      </label>
      <Button text="Create Todo" />
    </FormContainer>
  );
};

const FormContainer = styled.form`
  height: 70%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

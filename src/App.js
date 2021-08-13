import React, { useState } from 'react';

import { Button } from './components/Button';
import { Form } from './components/Form';
import Modal from './components/Modal';
import { TodoList } from './TodoList';

function App() {
  const [modalActive, setModalActive] = useState(false);
  const modalHandler = () => {
    setModalActive(true);
  };
  const [todoList, setTodoList] = useState([
    { id: Date.now(), title: 'Read a book', time: '15:00' },
  ]);

  return (
    <>
      <TodoList todoList={todoList} />
      <Button text="Open Modal" className="button-primary" id="prim" onClick={modalHandler} />
      <Modal modalActive={modalActive} setModal={setModalActive}>
        <Form setTodoList={setTodoList} setModalActive={setModalActive} />
      </Modal>
    </>
  );
}

export default App;

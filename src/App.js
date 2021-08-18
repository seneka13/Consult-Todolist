import React, { useState } from 'react';

import { FormComponent } from './components/Form';
import { Modal, Button } from 'antd';
import { TodoList } from './TodoList';
import styled from 'styled-components';

function App() {
  const [visible, setVisible] = useState(false);
  const modalHandler = () => {
    setVisible(true);
  };

  const okHandler = () => {
    setVisible(false);
  };

  const cancelHandler = () => {
    setVisible(false);
  };
  const [todoList, setTodoList] = useState([{ id: Date.now(), title: 'Read a book', done: true }]);

  return (
    <>
      <TodoList todoList={todoList} />
      <ButtonContainer>
        <Button type="primary" onClick={modalHandler}>
          Open Modal
        </Button>
        <Modal title="Basic Modal" visible={visible} onOk={okHandler} onCancel={cancelHandler}>
          <FormComponent setTodoList={setTodoList} setVisible={setVisible} />
        </Modal>
      </ButtonContainer>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default App;

import { useState } from 'react';
import styled from 'styled-components';

export const TodoList = ({ todoList }) => {
  return (
    <ListContainer>
      <h1>Todo List</h1>
      <List>
        {todoList.map((item) => {
          return (
            <li key={item.id}>
              {item.title}: <time>{item.time}</time>
            </li>
          );
        })}
      </List>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  margin: 0 auto;
  padding: 20px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`;

const List = styled.ul`
  list-style: none;
  width: 600px;
  padding: 15px;
  border: 1px solid #005030;
  border-radius: 5px;
  font-size: 17px;
`;

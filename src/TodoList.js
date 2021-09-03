import { Card } from 'antd';
import styled from 'styled-components';

export const TodoList = ({ todoList }) => {
  return (
    <ListContainer>
      <h1>Todo List</h1>
      <List>
        {todoList?.map((item) => {
          return (
            <TodoCard title={item.title} bordered={false} style={{ width: 300 }} key={item.id}>
              {item.done ? 'Done' : 'To do'}
            </TodoCard>
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
  width: 100%;
  padding: 15px;
  font-size: 17px;
`;

const TodoCard = styled(Card)`
  padding: 15px;
  margin: 10px;
  border: 1px solid #005030;
  border-radius: 5px;
  display: inline-block;
`;

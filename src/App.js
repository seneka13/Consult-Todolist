import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Spin, Space } from 'antd';
import { Pagination } from 'antd';
import { useFetch } from './Hooks/useFetch';
import { TodoList } from './TodoList';
import { TodoAjax } from './utils/TodoAjax';
import styled from 'styled-components';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState('');
  const [todoFetch, todoLoading, todoError] = useFetch(TodoAjax.get);
  //   const obsrveElement = useRef();
  //   const observer = useRef();

  //   useEffect(() => {
  //     if (!todoLoading) {
  //       return;
  //     }
  //     observer.current && observer.current.disconnect();
  //     const callback = function (entries, observer) {
  //       if (entries[0].isIntersecting) {
  //         console.log('object');
  //         setPage(page + 1);
  //       }
  //     };

  //     observer.current = new IntersectionObserver(callback);
  //     observer.current.observe(obsrveElement.current);
  //   }, [todoLoading]);

  useEffect(() => {
    todoFetch(page).then((response) => {
      if (!totalCount) {
        setTotalCount(response.headers['x-total-count']);
      }
      setTodoList(response?.data);
    });
  }, [page]);
  console.log(page);

  return (
    <Container>
      <TodoList todoList={todoList} />
      <Pagination
        onChange={(page) => setPage(page)}
        total={totalCount}
        showTotal={(total) => `Total ${total} items`}
        defaultPageSize={10}
        defaultCurrent={1}
      />
      {/* <div style={{ height: '20px' }} ref={obsrveElement}></div> */}
    </Container>
  );
}

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  min-heigth: 100vh;
  padding: 20px;
`;

export default App;

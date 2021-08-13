import React from 'react';
import styled from 'styled-components';

export const Button = ({ text, ...props }) => {
  return <StyledButton {...props}>{text}</StyledButton>;
};

const StyledButton = styled.button`
  width: 250px;
  height: 70px;
  border: none;
  border-radius: 5px;
  background: rgba(0, 180, 40, 0.6);
  color: white;
  font-size: 20px;
  display:block;
  margin:15px auto;
`;

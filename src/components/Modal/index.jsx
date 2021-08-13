import styled, { css } from 'styled-components';
import { Button } from '../Button';

const Modal = ({ children, modalActive, setModal }) => {
  return (
    <ModalWrapper active={modalActive}>
      <ModalBody active={modalActive}>{children}</ModalBody>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  display: none;
  opacity: 0;
  ${(props) =>
    props.active &&
    css`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 1;
    `}
`;

const ModalBody = styled.div`
  width: 500px;
  height: 300px;
  background: white;
  border: 1px solid #000fa;
  border-radius: 10px;
  transform: translateX(50px);
`;

export default Modal;

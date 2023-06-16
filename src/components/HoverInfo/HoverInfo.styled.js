import styled from 'styled-components';

export const HoverInfoStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: absolute;
  width: 100%;
  height: 300px;
  top: 34px;
  z-index: 1;
  padding: 14px;
  border: 2px solid black;
  border-radius: 12px;
  font-size: 14px;
  color: black;
  background-color: var(--text);
  animation: toTop 250ms linear;
  ::before {
    content: '';
    position: absolute;
    width: 10px;
    top: -13px;
    right: 16px;
    border-left: 20px solid transparent;
    border-right: 2px solid transparent;
    border-bottom: 12px solid var(--text);
    animation: toTop 500ms ease-in-out;
  }

  a {
    color: var(--bg);
    font-weight: bold;
  }

  span {
    font-weight: bold;
  }
`;

import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 10px;
  ${(props) => (props.borde ? `border: 1px solid grey` : null)}
`;

export default Container;

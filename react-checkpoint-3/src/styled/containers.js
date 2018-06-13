import styled from "styled-components";

const AppContainer = styled.div`
  margin: 30px 50px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const CardContainer = styled.div`
  width: 300px;
  height: auto;
  margin: 10px;
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

export { AppContainer, ListContainer, CardContainer, ActionsContainer };

import styled from 'styled-components';

const StyledList = styled.ul`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 800px;
`;

const StyledItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

const StyledLabel = styled.span`
  margin-bottom: 7px;
`;

export { StyledList, StyledItem, StyledLabel };

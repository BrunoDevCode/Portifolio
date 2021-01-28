import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: #F7F7FF;
  
  h1 {
    color: ${props => props.theme.colors.title};
    padding: 8px;
    font-weight: 900;
    letter-spacing: .5px;
  }
`;
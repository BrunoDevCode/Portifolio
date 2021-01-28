import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  
  form {
    padding: 16px;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.secondBackground};

    h1 {
      text-align: center;
      font-weight: 900;
      margin-bottom: 24px;
    }
  }
`;
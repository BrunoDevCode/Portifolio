import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  /* background-color: #f7f7ff; */

  h1 {
    color: ${(props) => props.theme.colors.title};
    padding: 8px;
    font-weight: 900;
    letter-spacing: 0.5px;
  }
`;

export const Header = styled.div`
  width: 100%;
  margin: 32px auto;

  h1 {
    color: white;
    font-weight: 800;
    letter-spacing: 0.8px;
    text-align: center;
  }
`;

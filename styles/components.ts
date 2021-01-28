import styled from 'styled-components';

export const InputGroup = styled.div`
  margin: 8px auto;
  display: grid;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.colors.text};
  letter-spacing: .8px;
`;

export const Input = styled.input`
  padding: 8px 16px;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  border: 1px solid transparent;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const Button = styled.button`
  border: 1px solid transparent;
  padding: 8px 16px;
  width: 100%;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  font-weight: 400;
  border-radius: 16px;

  &:hover {
    filter: brightness(120%);
  }
`;
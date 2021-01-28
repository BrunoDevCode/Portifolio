import { Container } from '../../styles/login';
import { Button, InputGroup, Label, Input } from '../../styles/components';

const Login: React.FC = () => {
  function handleMakeLogin() {

  }

  return (
    <Container>
      <form onSubmit={handleMakeLogin}>
        <h1>Login</h1>

        <InputGroup>
          <Label htmlFor='email'>E-mail :</Label>
          <Input id='email' type='email' placeholder='Type your e-mail :' />

          <Label htmlFor='pass'>Password :</Label>
          <Input id='pass' type='password' placeholder='Type your password :' />
        </InputGroup>

        <Button>Enviar</Button>
      </form>
    </Container>
  );
}

export default Login;
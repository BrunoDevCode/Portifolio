import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  main {
    padding: 32px;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 16px;
  }

  p {
    text-align: justify;
    font-weight: 300;
    font-size: 1.5rem;
    letter-spacing: 0.5px;
    word-spacing: 0.8px;
  }

  @media (min-width: 760px) {
    main {
      padding: 32px 96px;
    }
  }
`;

export const Header = styled.header`
  width: 100%;
  padding: 24px 40px;
  background-color: ${(props) => props.theme.colors.backgroundHeader};
  display: grid;
  gap: 8px;

  @media (min-width: 760px) {
    padding: 24px 96px;
  }
`;

export const Nav = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr repeat(4, 1fr);
  align-items: center;
  text-align: center;
  font-size: 1.5rem;

  a {
    position: relative;
    margin-right: 16px;
  }

  a::after {
    content: '';
    width: 0;
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
    position: absolute;
    left: 0;
    bottom: -4px;
  }

  a:hover::after {
    width: 100%;
    transition: width 0.4s ease-in-out;
  }
`;

export const P = styled.p`
  font-size: 1.8rem;
  letter-spacing: 0.8px;
  padding: 0 16px;
  position: relative;
  text-align: center;
  color: white;
  font-weight: 800;
  width: 100%;
  max-width: 180px;

  &::before {
    content: '</';
    width: 6px;
    height: 100%;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.8rem;
    font-weight: 400;
    position: absolute;
    top: 0;
    left: 0;
  }

  &::after {
    content: '>';
    width: 6px;
    height: 3px;
    color: ${(props) => props.theme.colors.primary};
    font-size: 1.8rem;
    font-weight: 400;
    position: absolute;
    top: 0;
    right: 8;
  }
`;

export const HeaderContent = styled.div`
  display: grid;
  grid-template-columns: 50% 10% 40%;
  grid-template-areas: 'content . backimage';
  align-items: center;

  div.header-content {
    display: grid;
    gap: 8px;
    margin-right: 64px;
    grid-area: content;
  }

  h6 {
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 3rem;
    font-weight: 900;
    letter-spacing: 2px;
  }

  div.header-content button {
    margin-top: 16px;
    padding: 8px 16px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
  }

  div.header-content button:hover {
    border-color: ${(props) => props.theme.colors.darkPrimary};
    color: ${(props) => props.theme.colors.darkPrimary};
  }

  div.image-container {
    grid-area: backimage;
  }
`;

export const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 10% 40% 10%;
  grid-template-areas: 'profileImage . content .';
  gap: 24px;

  div.content {
    grid-area: content;
  }

  h2 {
    display: flex;
    align-items: center;
  }

  h2 .h2-icon {
    margin-right: 24px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 2px;
    padding: 2px;
  }

  h6 {
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }
`;

export const ImageContainer = styled.div`
  display: grid;
  grid-area: profileImage;

  div.image {
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.primary};
    overflow: hidden;
    padding: 8px;
  }

  div.image img {
    border-radius: 50%;
  }

  p.name {
    text-align: center;
    width: 100%;
    margin-top: 16px;
    font-weight: 800;
    font-size: 1.2rem;
    word-spacing: 0.5px;
    letter-spacing: 0.8px;
  }

  div.links {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 24px;
  }

  div.links a {
    margin: 0 8px;
  }
`;

export const SkillsContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 64px 0;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 .h2-icon {
    margin-right: 24px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 2px;
    padding: 2px;
  }

  h6 {
    font-size: 1rem;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 150px);
    place-items: center;
  }

  li {
    display: grid;
    place-items: center;
  }

  li strong {
    font-weight: 800;
    font-size: 1rem;
    /* text-align: center; */
    margin-bottom: 8px;
  }
`;

const upModal = keyframes`
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
  }
`;

export const LabContainer = styled.div`
  width: 100%;
  text-align: center;
  margin: 64px 0;

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 .h2-icon {
    margin-right: 24px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 2px;
    padding: 2px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 0;
  }

  li {
    width: 100%;
    height: 350px;
    max-width: 350px;
    padding: 16px;
    background-color: ${(props) => props.theme.colors.backgroundHeader};
    border-radius: 16px;
    position: relative;
    display: grid;
  }

  li div.image-container {
    overflow: hidden;
    width: 90%;
    margin: 0 auto;
    height: 175px;
    border-radius: 16px;
  }

  li div.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  li div.content h3 {
    font-size: 1.2rem;
    margin: 8px 0;
  }

  li div.modal {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    padding: 16px;
    border-radius: 16px;
    height: 100%;
    background-color: ${(props) => props.theme.colors.backgroundHeader};
  }

  li div.modal button {
    background-color: ${(props) => props.theme.colors.backgroundPage};
    border-radius: 8px;
    padding: 8px 16px;
    width: 100%;
    max-width: 270px;
    color: ${(props) => props.theme.colors.primary};
    text-transform: uppercase;
    font-size: 1.5rem;
  }

  li:hover > .content .modal {
    display: grid;
    opacity: 1;
    visibility: visible;
    animation: ${upModal} 0.4s ease-in-out;
  }
`;

export const ContactContainer = styled.div`
  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h2 .h2-icon {
    margin-right: 24px;
    border: 1px solid ${(props) => props.theme.colors.primary};
    border-radius: 2px;
    padding: 2px;
  }

  div.links {
    display: grid;
    place-items: center;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 100px);
  }

  div.links div {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
  }

  div.links div svg {
    margin-right: 8px;
  }
`;

export const FooterContainer = styled.footer`
  display: grid;
  place-items: center;
  height: 70px;
  background-color: ${(props) => props.theme.colors.backgroundHeader};

  a {
    color: ${(props) => props.theme.colors.primary};
  }
`;

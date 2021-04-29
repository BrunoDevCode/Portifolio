import Image from 'next/image';

import {
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaNodeJs,
  FaJsSquare,
  FaSquare,
  FaReact,
} from 'react-icons/fa';

import { SiTypescript, SiMongodb, SiPostgresql } from 'react-icons/si';

import {
  Container,
  Header,
  P,
  ProfileContainer,
  HeaderContent,
  Nav,
  ImageContainer,
  SkillsContainer,
  LabContainer,
  ContactContainer,
  FooterContainer,
} from '../styles/homepageStyle';

const Homepage: React.FC = () => {
  const date = new Date();
  const skillAge = date.getUTCFullYear() - 2020;

  return (
    <Container>
      <Header>
        <Nav>
          <P>BrunoDevCode</P>
          <a href="#about">Sobre</a>
          <a href="#skills">Skills</a>
          <a href="#lab">Laboratorio</a>
          <a href="#contact">Contato</a>
        </Nav>

        <HeaderContent>
          <div className="header-content">
            <h6>Desenvolvedor Full-Stack</h6>
            <h1>Bruno Henrique</h1>
            <p>
              Programador apaixonado pelo Back-End, mas que atende o maximo
              possivel todas stacks.
            </p>

            <a href="/BrunoHenrique.pdf" download>
              <button>Baixar Currículo</button>
            </a>
          </div>

          <div className="image-container">
            <Image
              src="/computer.svg"
              alt="Computador com Robozinho"
              height={25}
              width={25}
              layout="responsive"
            />
          </div>
        </HeaderContent>
      </Header>

      <main>
        <ProfileContainer id="about">
          <ImageContainer>
            <div className="image">
              <Image
                src="/profile.jpg"
                alt="Foto do desenvolvedor"
                height={24}
                width={24}
                layout="responsive"
                loading="lazy"
                className="profile"
              />
            </div>

            <p className="name">Bruno Henrique dos Santos</p>

            <div className="links">
              <a
                href="mailto:brunohenriquensantos272@gmail.com"
                target="_blank"
              >
                <button>
                  <FaEnvelope size={24} color="#BB001B" />
                </button>
              </a>
              <a href="https://github.com/BrunoDevCode" target="_blank">
                <button>
                  <FaGithub size={24} color="#211F1F" />
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/BrunoDevCode"
                target="_blank"
              >
                <button>
                  <FaLinkedinIn size={24} color="#0077B5" />
                </button>
              </a>
            </div>
          </ImageContainer>

          <div className="content">
            <h2>
              <FaSquare className="h2-icon" size={16} color="#FF2400" />
              Sobre
            </h2>
            <h6>Conheça um pouco sobre mim</h6>
            <p>
              Programador há mais de {skillAge} {skillAge > 1 ? 'anos' : 'ano'},
              atualmente buscando projetos open-source para contribuir e ganhar
              novas experiencias. Até o momento desenvolvi apenas um único
              projeto real que já foi o suficiente para conseguir muitos
              conhecimentos sobre varias áreas.
            </p>
          </div>
        </ProfileContainer>

        <SkillsContainer id="skills">
          <h2>
            <FaSquare className="h2-icon" size={16} color="#FF2400" />
            Hard Skills
          </h2>

          <h6>Com todas tech abaixo foi feito pelo menos um projeto</h6>

          <ul>
            <li>
              <strong>React JS</strong>
              <FaReact size={64} color="#61DBFB" />
              <span></span>
            </li>

            <li>
              <strong>Node JS</strong>
              <FaNodeJs size={64} color="#3C873A" />
              <span></span>
            </li>

            <li>
              <strong>Javascript</strong>
              <FaJsSquare size={64} color="#F0DB4F" />
              <span></span>
            </li>

            <li>
              <strong>Typescript</strong>
              <SiTypescript size={64} color="#007ACC" />
              <span></span>
            </li>

            <li>
              <strong>MongoDB</strong>
              <SiMongodb size={64} color="#3FA037" />
              <span></span>
            </li>

            <li>
              <strong>Postgresql</strong>
              <SiPostgresql size={64} color="#0038A8" />
              <span></span>
            </li>
          </ul>
        </SkillsContainer>

        <LabContainer id="lab">
          <h2>
            <FaSquare className="h2-icon" size={16} color="#FF2400" />
            Meus Projetos
          </h2>

          <ul>
            <li>
              <div className="image-container">
                <Image
                  src="/bvweb.png"
                  alt="BV Moveis na web"
                  width={25}
                  height={25}
                  layout="responsive"
                  loading="lazy"
                />
              </div>
              <div className="content">
                <h3>Website - BV Móveis</h3>

                <p>
                  Este projeto é site sobre uma empresa que fabrica moveis
                  rusticos
                </p>

                <div className="modal">
                  <h3>Website - BV Móveis</h3>

                  <p>
                    Este projeto é site sobre uma empresa que fabrica moveis
                    rusticos
                  </p>

                  <div className="techs">
                    <p>Express - Node JS</p>
                    <p>Next JS - React JS</p>
                    <p>Mongoose - Mongo DB</p>
                    <p>Typescript</p>
                  </div>

                  <a href="https://bvmoveisrusticos.com.br" target="_blank">
                    <button>Acessar</button>
                  </a>
                </div>
              </div>
            </li>

            <li>
              <div className="image-container">
                <Image
                  src="/mackarelweb.png"
                  alt="Mackarel"
                  width={25}
                  height={25}
                  layout="responsive"
                  loading="lazy"
                />
              </div>
              <div className="content">
                <h3>Website - Mackarel</h3>

                <p>Este sistema é usado para consulta de produtos</p>

                <div className="modal">
                  <h3>Website - Mackarel</h3>

                  <p>Este sistema é usado para consulta de produtos</p>

                  <div className="techs">
                    <p>Express - Node JS</p>
                    <p>Next JS - React JS</p>
                    <p>Mongoose - Mongo DB</p>
                    <p>Typescript</p>
                  </div>

                  <a href="https://mackarel-web.bhsdev.com.br" target="_blank">
                    <button>Acessar</button>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </LabContainer>

        <ContactContainer id="contact">
          <h2>
            <FaSquare className="h2-icon" size={16} color="#FF2400" />
            Contato
          </h2>
          <p>
            Fique a vontade para entrar em contato comigo, será um prazer
            atendê-lo.
          </p>
          <p>Estou disponível todos os dias.</p>
          <div className="links">
            <div>
              <FaWhatsapp size={24} color="#4FCE5D" />
              <p>(31) 9 7574-3244</p>
            </div>
            <div>
              <FaGithub size={24} color="#211F1F" />
              <a href="https://github.com/BrunoDevCode/">
                https://github.com/BrunoDevCode/
              </a>
            </div>
            <div>
              <FaEnvelope size={24} color="#BB001B" />
              <a href="mailto:brunohenriquesantos272@gmail.com">
                brunohenriquesantos272@gmail.com
              </a>
            </div>
            <div>
              <FaLinkedinIn size={24} color="#0077B5" />
              <a href="https://www.linkedin.com/in/brunodevcode/">
                https://www.linkedin.com/in/brunodevcode/
              </a>
            </div>
          </div>
        </ContactContainer>
      </main>

      <FooterContainer>
        <p>
          Designed by{' '}
          <a href="https://github.com/lavininhamelo">Lavínia Melo</a>
        </p>
      </FooterContainer>
    </Container>
  );
};

export default Homepage;

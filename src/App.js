import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: #2c3e50;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    gap: 2rem;
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: #2c3e50;
    font-weight: 500;
    transition: color 0.3s;
    
    &:hover {
      color: #3498db;
    }
  }
`;

const Hero = styled.section`
  text-align: center;
  padding: 4rem 0;
  
  h2 {
    font-size: 3rem;
    color: #2c3e50;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    color: #7f8c8d;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Specialties = styled.section`
  padding: 4rem 0;
`;

const SpecialtiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const SpecialtyCard = styled.div`
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 5px;
    margin-bottom: 1rem;
  }
  
  h3 {
    color: #2c3e50;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: #7f8c8d;
    margin-bottom: 1rem;
  }
  
  .tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    justify-content: center;
    margin-top: 1rem;
    
    span {
      background: #3498db;
      color: white;
      padding: 0.3rem 0.8rem;
      border-radius: 20px;
      font-size: 0.9rem;
    }
  }
`;

const ContactSection = styled.section`
  padding: 4rem 0;
  background-color: #f8f9fa;
`;

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ContactTitle = styled.h2`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.5rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #2c3e50;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #3498db;
  }
`;

const SubmitButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const ContactInfo = styled.div`
  margin-top: 2rem;
  text-align: center;
  
  p {
    color: #7f8c8d;
    margin-bottom: 0.5rem;
  }
  
  a {
    color: #3498db;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Form submitted:', formData);
    alert('Message envoyé avec succès !');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <Container>
      <Header>
        <Logo>Dévelo </Logo>

        <Nav>
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#specialites">Spécialités</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </Nav>
      </Header>

      <Hero>
        <h2>Développement Informatique</h2>
        <p>Explorez les différentes spécialités du développement et trouvez votre voie</p>
      </Hero>

      <Specialties id="specialites">
        <SpecialtiesGrid>
          <SpecialtyCard>
            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Développement Web Frontend" />
            <h3>Développement Web Frontend</h3>
            <p>Création d'interfaces utilisateur modernes et interactives</p>
            <div className="tech-stack">
              <span>React</span>
              <span>Vue.js</span>
              <span>Angular</span>
              <span>TypeScript</span>
            </div>
          </SpecialtyCard>

          <SpecialtyCard>
            <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Développement Backend" />
            <h3>Développement Backend</h3>
            <p>Construction de serveurs et d'API robustes</p>
            <div className="tech-stack">
              <span>Node.js</span>
              <span>Python</span>
              <span>Java</span>
              <span>PHP</span>
            </div>
          </SpecialtyCard>

          <SpecialtyCard>
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Mobile Development" />
            <h3>Développement Mobile</h3>
            <p>Applications natives et cross-platform</p>
            <div className="tech-stack">
              <span>React Native</span>
              <span>Flutter</span>
              <span>Swift</span>
              <span>Kotlin</span>
            </div>
          </SpecialtyCard>

          <SpecialtyCard>
            <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="DevOps" />
            <h3>DevOps</h3>
            <p>Automatisation et déploiement continu</p>
            <div className="tech-stack">
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>AWS</span>
              <span>CI/CD</span>
            </div>
          </SpecialtyCard>

          <SpecialtyCard>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Data Science" />
            <h3>Data Science</h3>
            <p>Analyse de données et intelligence artificielle</p>
            <div className="tech-stack">
              <span>Python</span>
              <span>R</span>
              <span>TensorFlow</span>
              <span>SQL</span>
            </div>
          </SpecialtyCard>

          <SpecialtyCard>
            <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Cybersécurité" />
            <h3>Cybersécurité</h3>
            <p>Protection des systèmes et des données</p>
            <div className="tech-stack">
              <span>Pentest</span>
              <span>Cryptographie</span>
              <span>Réseaux</span>
              <span>Sécurité</span>
            </div>
          </SpecialtyCard>

          <SpecialtyCard>
            <img src="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Cloud Computing" />
            <h3>Cloud Computing</h3>
            <p>Solutions cloud et infrastructure as code</p>
            <div className="tech-stack">
              <span>AWS</span>
              <span>Azure</span>
              <span>GCP</span>
              <span>Terraform</span>
            </div>
          </SpecialtyCard>

          <SpecialtyCard>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Game Development" />
            <h3>Développement de Jeux</h3>
            <p>Création de jeux vidéo et d'expériences interactives</p>
            <div className="tech-stack">
              <span>Unity</span>
              <span>Unreal</span>
              <span>C++</span>
              <span>C#</span>
            </div>
          </SpecialtyCard>
        </SpecialtiesGrid>
      </Specialties>

      <ContactSection id="contact">
        <ContactContainer>
          <ContactTitle>Contactez-nous</ContactTitle>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Nom</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Sujet</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <SubmitButton type="submit">Envoyer</SubmitButton>
          </ContactForm>

          <ContactInfo>
            <p>Email: abderahd12@gmail.com</p>
            <p>Téléphone: +212 7 68 63 94 09 </p>
            <p>Adresse: azhari 2 rue 74 n 16 </p>
          </ContactInfo>
        </ContactContainer>
      </ContactSection>
    </Container>
  );
}

export default App; 
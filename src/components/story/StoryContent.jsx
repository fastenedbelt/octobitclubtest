import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import {
  Container,
  TitleWrapper,
  MainTitle,
  Subtitle,
  Section,
  SectionTitle,
  Text,
  SaveButton
} from './styles/StoryContent.styles';

export const StoryContent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const showLogin = location.hash === '#login';

  const handleSaveWorldClick = () => {
    navigate('?login=true#login');
  };

  if (showLogin) {
    return <LoginForm />;
  }

  return (
    <Container>
      <TitleWrapper>
        <MainTitle>
          <span className="cyber-crime">The Cyber Crime Mystery:</span>
          <span className="untold-breach">"The Untold Breach"</span>
        </MainTitle>
        <Subtitle>The mystery awaits to be solved.</Subtitle>
      </TitleWrapper>

      <Section>
        <SectionTitle>The Rise of Virtual Life</SectionTitle>
        <Text>
          Technology dominates virtual life, with advanced VR and neural interfaces enabling work, 
          learning, and communication in digital worlds that fully mimic reality. Identities and 
          relationships merge into highly sophisticated virtual spaces, while education and 
          entertainment become fully immersive experiences. This transformation reshapes humanity 
          and sparks debates on privacy and the balance between digital and physical worlds.
        </Text>
      </Section>

      <Section>
        <SectionTitle>A Virus Turns Virtual Worlds into Chaos</SectionTitle>
        <Text>
          In this lively virtual world full of advanced technology, a strange and dangerous virus 
          suddenly appears. It attacks one of the main servers, spreading quickly and breaking 
          the system. The virus shuts down all exit points, trapping users inside the digital 
          world. That was once a safe and stable place turns into chaos, leaving everyone stuck 
          and unable to escape and one of the people who's stuck inside the virtual world created{' '}
          <a 
            href="https://x.com/vyrnix000" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            this account
          </a>{' '}
          to post about what's going on.
        </Text>
      </Section>

      <Section>
        <SectionTitle>Team Up to Save the World</SectionTitle>
        <Text>
          To help the captives, you will need to collaborate and work as a team, unleashing your 
          analytical and creative abilities. You will solve quizzes linked to programming errors 
          in the code. With each successfully solved quiz, the error will be automatically 
          corrected, bringing you one step closer to restoring the server and rescuing the 
          captives. Are you ready to take on the challenge? Join us now and help us to save 
          the WORLD!
        </Text>
      </Section>

      <SaveButton onClick={handleSaveWorldClick}>
        Save the World
      </SaveButton>
    </Container>
  );
};
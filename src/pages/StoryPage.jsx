import React from 'react';
import styled from 'styled-components';
import { StoryContent } from '../components/story/StoryContent';

const PageContainer = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: #fff;
  padding: 120px 20px 60px;
  overflow-x: hidden;
  position: relative;

  @media (max-width: 768px) {
    padding: 100px 15px 40px;
  }

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, #000 50%, transparent);
    pointer-events: none;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 0;
`;

export const StoryPage = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <StoryContent />
      </ContentWrapper>
    </PageContainer>
  );
};
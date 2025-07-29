import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div<{ isDark: boolean }>`
  padding-top: 90px;
  min-height: 100vh;
  background-color: ${({ isDark }) => isDark ? '#1a1a1a' : '#ffffff'};
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
`;

const AboutHeader = styled.div`
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const AboutTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const AboutSubtitle = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const AboutSection = styled.section`
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
  text-align: center;
`;

const SectionText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #6c757d;
  margin-bottom: 20px;
  text-align: justify;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin: 50px 0;
`;

const StatCard = styled.div<{ isDark: boolean }>`
  background-color: ${({ isDark }) => isDark ? '#2d2d2d' : '#ffffff'};
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1.2rem;
  color: #6c757d;
  font-weight: 500;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 50px;
`;

const ValueCard = styled.div<{ isDark: boolean }>`
  background-color: ${({ isDark }) => isDark ? '#2d2d2d' : '#ffffff'};
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #007bff, #6610f2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 24px;
`;

const ValueTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
`;

const ValueDescription = styled.p`
  color: #6c757d;
  line-height: 1.6;
  text-align: center;
`;

const About: React.FC = () => {
  return (
    <AboutContainer isDark={false}>
      <AboutHeader>
        <div className="container">
          <AboutTitle>О нас</AboutTitle>
          <AboutSubtitle>
            TechMarket - ваш надежный партнер в мире технологий. Мы стремимся предоставить 
            лучшие товары и сервис для наших клиентов с 2015 года.
          </AboutSubtitle>
        </div>
      </AboutHeader>

      <AboutContent>
        <AboutSection>
          <SectionTitle>Наша история</SectionTitle>
          <SectionText>
            TechMarket был основан в 2015 году группой энтузиастов, которые верили в то, 
            что технологии должны быть доступны каждому. Начиная с небольшого магазина в центре 
            города, мы выросли в одну из ведущих компаний в сфере электронной коммерции.
          </SectionText>
          <SectionText>
            За эти годы мы помогли тысячам клиентов найти идеальные устройства для работы, 
            учебы и развлечений. Наша миссия - сделать технологии доступными и понятными 
            для всех, независимо от уровня технической подготовки.
          </SectionText>
        </AboutSection>

        <AboutSection>
          <SectionTitle>Наши достижения</SectionTitle>
          <StatsGrid>
            <StatCard isDark={false}>
              <StatNumber>50,000+</StatNumber>
              <StatLabel>Довольных клиентов</StatLabel>
            </StatCard>
            <StatCard isDark={false}>
              <StatNumber>10,000+</StatNumber>
              <StatLabel>Товаров в каталоге</StatLabel>
            </StatCard>
            <StatCard isDark={false}>
              <StatNumber>8</StatNumber>
              <StatLabel>Лет на рынке</StatLabel>
            </StatCard>
            <StatCard isDark={false}>
              <StatNumber>24/7</StatNumber>
              <StatLabel>Поддержка клиентов</StatLabel>
            </StatCard>
          </StatsGrid>
        </AboutSection>

        <AboutSection>
          <SectionTitle>Наши ценности</SectionTitle>
          <ValuesGrid>
            <ValueCard isDark={false}>
              <ValueIcon>🎯</ValueIcon>
              <ValueTitle>Качество</ValueTitle>
              <ValueDescription>
                Мы предлагаем только проверенные товары от надежных производителей 
                с официальной гарантией.
              </ValueDescription>
            </ValueCard>

            <ValueCard isDark={false}>
              <ValueIcon>🤝</ValueIcon>
              <ValueTitle>Надежность</ValueTitle>
              <ValueDescription>
                Наша репутация - наш главный актив. Мы всегда выполняем свои 
                обязательства перед клиентами.
              </ValueDescription>
            </ValueCard>

            <ValueCard isDark={false}>
              <ValueIcon>💡</ValueIcon>
              <ValueTitle>Инновации</ValueTitle>
              <ValueDescription>
                Мы следим за последними технологическими трендами и всегда 
                предлагаем актуальные решения.
              </ValueDescription>
            </ValueCard>

            <ValueCard isDark={false}>
              <ValueIcon>❤️</ValueIcon>
              <ValueTitle>Забота о клиентах</ValueTitle>
              <ValueDescription>
                Каждый клиент для нас важен. Мы стремимся предоставить 
                индивидуальный подход и максимальное удобство.
              </ValueDescription>
            </ValueCard>

            <ValueCard isDark={false}>
              <ValueIcon>🌱</ValueIcon>
              <ValueTitle>Устойчивое развитие</ValueTitle>
              <ValueDescription>
                Мы заботимся об окружающей среде и поддерживаем экологичные 
                инициативы в нашей работе.
              </ValueDescription>
            </ValueCard>

            <ValueCard isDark={false}>
              <ValueIcon>🚀</ValueIcon>
              <ValueTitle>Развитие</ValueTitle>
              <ValueDescription>
                Мы постоянно развиваемся и улучшаем наши сервисы, 
                чтобы соответствовать растущим потребностям клиентов.
              </ValueDescription>
            </ValueCard>
          </ValuesGrid>
        </AboutSection>

        <AboutSection>
          <SectionTitle>Наша миссия</SectionTitle>
          <SectionText>
            Мы стремимся быть ведущим интернет-магазином электроники, который делает 
            технологии доступными для всех. Наша цель - помочь каждому клиенту найти 
            идеальное решение для своих потребностей, предоставляя качественные товары, 
            отличный сервис и профессиональную поддержку.
          </SectionText>
          <SectionText>
            Мы верим, что технологии должны упрощать жизнь, а не усложнять её. 
            Поэтому мы не просто продаем товары - мы помогаем нашим клиентам 
            сделать правильный выбор и получить максимальную пользу от своих покупок.
          </SectionText>
        </AboutSection>
      </AboutContent>
    </AboutContainer>
  );
};

export default About; 
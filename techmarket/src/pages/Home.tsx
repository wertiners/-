import React from 'react';
import styled from 'styled-components';

const HomeContainer = styled.div<{ isDark: boolean }>`
  padding-top: 90px;
  min-height: 100vh;
  background-color: ${({ isDark }) => isDark ? '#1a1a1a' : '#ffffff'};
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
`;

const Hero = styled.div<{ isDark: boolean }>`
  background: linear-gradient(135deg, ${({ isDark }) => isDark ? '#2d2d2d' : '#f8f9fa'} 0%, ${({ isDark }) => isDark ? '#404040' : '#e9ecef'} 100%);
  padding: 80px 0;
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #007bff, #6610f2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled.button<{ isDark: boolean }>`
  background: linear-gradient(135deg, #007bff, #6610f2);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 123, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 123, 255, 0.4);
  }
`;

const FeaturesSection = styled.section`
  padding: 80px 0;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 50px;
`;

const FeatureCard = styled.div<{ isDark: boolean }>`
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

const FeatureIcon = styled.div`
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

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #333;
`;

const FeatureDescription = styled.p`
  color: #6c757d;
  line-height: 1.6;
`;

const Home: React.FC = () => {
  return (
    <HomeContainer isDark={false}>
      <Hero isDark={false}>
        <div className="container">
          <HeroTitle>Добро пожаловать в TechMarket</HeroTitle>
          <HeroSubtitle>
            Откройте для себя мир инновационных технологий и качественных товаров. 
            Мы предлагаем широкий ассортимент электроники, гаджетов и аксессуаров.
          </HeroSubtitle>
          <CTAButton isDark={false}>
            Перейти к каталогу
          </CTAButton>
        </div>
      </Hero>

      <FeaturesSection>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '20px' }}>
            Почему выбирают нас
          </h2>
          <FeaturesGrid>
            <FeatureCard isDark={false}>
              <FeatureIcon>🚚</FeatureIcon>
              <FeatureTitle>Быстрая доставка</FeatureTitle>
              <FeatureDescription>
                Доставляем заказы по всей России в кратчайшие сроки с надежной курьерской службой.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard isDark={false}>
              <FeatureIcon>🛡️</FeatureIcon>
              <FeatureTitle>Гарантия качества</FeatureTitle>
              <FeatureDescription>
                Все товары проходят строгий контроль качества и имеют официальную гарантию.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard isDark={false}>
              <FeatureIcon>💰</FeatureIcon>
              <FeatureTitle>Лучшие цены</FeatureTitle>
              <FeatureDescription>
                Предлагаем конкурентные цены и регулярные акции для наших клиентов.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard isDark={false}>
              <FeatureIcon>🎯</FeatureIcon>
              <FeatureTitle>Широкий ассортимент</FeatureTitle>
              <FeatureDescription>
                Более 10,000 товаров в каталоге - от смартфонов до умных часов.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard isDark={false}>
              <FeatureIcon>📞</FeatureIcon>
              <FeatureTitle>Поддержка 24/7</FeatureTitle>
              <FeatureDescription>
                Наша служба поддержки готова помочь вам в любое время дня и ночи.
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard isDark={false}>
              <FeatureIcon>🔄</FeatureIcon>
              <FeatureTitle>Простой возврат</FeatureTitle>
              <FeatureDescription>
                Возврат товара в течение 14 дней без объяснения причин.
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </div>
      </FeaturesSection>
    </HomeContainer>
  );
};

export default Home; 
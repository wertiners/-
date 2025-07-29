import React from 'react';
import styled from 'styled-components';

const TeamContainer = styled.div<{ isDark: boolean }>`
  padding-top: 90px;
  min-height: 100vh;
  background-color: ${({ isDark }) => isDark ? '#1a1a1a' : '#ffffff'};
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
`;

const TeamHeader = styled.div`
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const TeamTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const TeamSubtitle = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const TeamContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 50px;
`;

const TeamMemberCard = styled.div<{ isDark: boolean }>`
  background-color: ${({ isDark }) => isDark ? '#2d2d2d' : '#ffffff'};
  border-radius: 20px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const MemberAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #007bff, #6610f2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 3rem;
  font-weight: bold;
`;

const MemberName = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const MemberPosition = styled.div`
  font-size: 1.1rem;
  color: #007bff;
  font-weight: 500;
  margin-bottom: 15px;
`;

const MemberDescription = styled.p`
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const MemberSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const SocialLink = styled.a<{ isDark: boolean }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ isDark }) => isDark ? '#404040' : '#f8f9fa'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
    transform: scale(1.1);
  }
`;

const Team: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Александр Петров',
      position: 'CEO & Основатель',
      description: 'Эксперт в области электронной коммерции с 15-летним опытом. Основал TechMarket в 2015 году с целью сделать технологии доступными для всех.',
      avatar: '👨‍💼',
      social: ['linkedin', 'twitter', 'email']
    },
    {
      id: 2,
      name: 'Мария Сидорова',
      position: 'CTO',
      description: 'Технический директор с глубокими знаниями в области разработки и управления IT-проектами. Отвечает за технологическое развитие компании.',
      avatar: '👩‍💻',
      social: ['linkedin', 'github', 'email']
    },
    {
      id: 3,
      name: 'Дмитрий Козлов',
      position: 'Директор по продажам',
      description: 'Опытный менеджер по продажам с 10-летним стажем. Специализируется на развитии клиентской базы и увеличении продаж.',
      avatar: '👨‍💼',
      social: ['linkedin', 'twitter', 'email']
    },
    {
      id: 4,
      name: 'Анна Волкова',
      position: 'Менеджер по маркетингу',
      description: 'Креативный маркетолог с опытом в digital-маркетинге. Отвечает за брендинг и продвижение компании.',
      avatar: '👩‍🎨',
      social: ['linkedin', 'instagram', 'email']
    },
    {
      id: 5,
      name: 'Сергей Морозов',
      position: 'Руководитель отдела поддержки',
      description: 'Обеспечивает высокий уровень сервиса и поддержки клиентов. Специалист по решению сложных вопросов.',
      avatar: '👨‍🔧',
      social: ['linkedin', 'email']
    },
    {
      id: 6,
      name: 'Елена Соколова',
      position: 'HR-директор',
      description: 'Отвечает за развитие корпоративной культуры и управление персоналом. Создает комфортную рабочую среду.',
      avatar: '👩‍💼',
      social: ['linkedin', 'email']
    }
  ];

  const getSocialIcon = (type: string) => {
    switch (type) {
      case 'linkedin':
        return '💼';
      case 'twitter':
        return '🐦';
      case 'github':
        return '🐙';
      case 'instagram':
        return '📷';
      case 'email':
        return '📧';
      default:
        return '🔗';
    }
  };

  return (
    <TeamContainer isDark={false}>
      <TeamHeader>
        <div className="container">
          <TeamTitle>Наша команда</TeamTitle>
          <TeamSubtitle>
            Познакомьтесь с талантливыми профессионалами, которые делают TechMarket 
            ведущим интернет-магазином электроники
          </TeamSubtitle>
        </div>
      </TeamHeader>

      <TeamContent>
        <TeamGrid>
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} isDark={false}>
              <MemberAvatar>{member.avatar}</MemberAvatar>
              <MemberName>{member.name}</MemberName>
              <MemberPosition>{member.position}</MemberPosition>
              <MemberDescription>{member.description}</MemberDescription>
              <MemberSocial>
                {member.social.map((socialType) => (
                  <SocialLink key={socialType} isDark={false} href="#">
                    {getSocialIcon(socialType)}
                  </SocialLink>
                ))}
              </MemberSocial>
            </TeamMemberCard>
          ))}
        </TeamGrid>
      </TeamContent>
    </TeamContainer>
  );
};

export default Team; 
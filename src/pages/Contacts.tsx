import React, { useState } from 'react';
import styled from 'styled-components';

const ContactsContainer = styled.div<{ isDark: boolean }>`
  padding-top: 90px;
  min-height: 100vh;
  background-color: ${({ isDark }) => isDark ? '#1a1a1a' : '#ffffff'};
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
`;

const ContactsHeader = styled.div`
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const ContactsTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const ContactsSubtitle = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const ContactsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  margin-bottom: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactInfo = styled.div<{ isDark: boolean }>`
  background-color: ${({ isDark }) => isDark ? '#2d2d2d' : '#ffffff'};
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const ContactInfoTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
`;

const ContactIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #007bff, #6610f2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  color: white;
  font-size: 1.5rem;
`;

const ContactDetails = styled.div``;

const ContactLabel = styled.div`
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
`;

const ContactValue = styled.div`
  color: #6c757d;
  font-size: 1.1rem;
`;

const ContactForm = styled.form<{ isDark: boolean }>`
  background-color: ${({ isDark }) => isDark ? '#2d2d2d' : '#ffffff'};
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const FormLabel = styled.label`
  display: block;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`;

const FormInput = styled.input<{ isDark: boolean }>`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${({ isDark }) => isDark ? '#404040' : '#e0e0e0'};
  border-radius: 8px;
  background-color: ${({ isDark }) => isDark ? '#404040' : '#ffffff'};
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
  font-size: 16px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }

  &::placeholder {
    color: ${({ isDark }) => isDark ? '#a0a0a0' : '#6c757d'};
  }
`;

const FormTextarea = styled.textarea<{ isDark: boolean }>`
  width: 100%;
  padding: 12px 15px;
  border: 1px solid ${({ isDark }) => isDark ? '#404040' : '#e0e0e0'};
  border-radius: 8px;
  background-color: ${({ isDark }) => isDark ? '#404040' : '#ffffff'};
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
  font-size: 16px;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  }

  &::placeholder {
    color: ${({ isDark }) => isDark ? '#a0a0a0' : '#6c757d'};
  }
`;

const SubmitButton = styled.button<{ isDark: boolean }>`
  background: linear-gradient(135deg, #007bff, #6610f2);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const MapSection = styled.div<{ isDark: boolean }>`
  background-color: ${({ isDark }) => isDark ? '#2d2d2d' : '#ffffff'};
  border-radius: 15px;
  padding: 40px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const MapTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 30px;
  color: #333;
`;

const MapPlaceholder = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #6c757d;
  margin-bottom: 20px;
`;

const MapAddress = styled.p`
  color: #6c757d;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Contacts: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Имитация отправки формы
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <ContactsContainer isDark={false}>
      <ContactsHeader>
        <div className="container">
          <ContactsTitle>Контакты</ContactsTitle>
          <ContactsSubtitle>
            Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь 
            и ответить на ваши вопросы.
          </ContactsSubtitle>
        </div>
      </ContactsHeader>

      <ContactsContent>
        <ContactsGrid>
          <ContactInfo isDark={false}>
            <ContactInfoTitle>Свяжитесь с нами</ContactInfoTitle>
            
            <ContactItem>
              <ContactIcon>📍</ContactIcon>
              <ContactDetails>
                <ContactLabel>Адрес</ContactLabel>
                <ContactValue>ул. Технологическая, 15<br />Москва, 123456</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon>📞</ContactIcon>
              <ContactDetails>
                <ContactLabel>Телефон</ContactLabel>
                <ContactValue>+7 (495) 123-45-67</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon>📧</ContactIcon>
              <ContactDetails>
                <ContactLabel>Email</ContactLabel>
                <ContactValue>info@techmarket.ru</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon>🕒</ContactIcon>
              <ContactDetails>
                <ContactLabel>Время работы</ContactLabel>
                <ContactValue>Пн-Пт: 9:00 - 18:00<br />Сб-Вс: 10:00 - 16:00</ContactValue>
              </ContactDetails>
            </ContactItem>

            <ContactItem>
              <ContactIcon>💬</ContactIcon>
              <ContactDetails>
                <ContactLabel>Поддержка</ContactLabel>
                <ContactValue>24/7 онлайн чат</ContactValue>
              </ContactDetails>
            </ContactItem>
          </ContactInfo>

          <ContactForm isDark={false} onSubmit={handleSubmit}>
            <FormTitle>Отправить сообщение</FormTitle>
            
            <FormGroup>
              <FormLabel>Имя *</FormLabel>
              <FormInput
                isDark={false}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ваше имя"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Email *</FormLabel>
              <FormInput
                isDark={false}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Телефон</FormLabel>
              <FormInput
                isDark={false}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+7 (999) 123-45-67"
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Тема *</FormLabel>
              <FormInput
                isDark={false}
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Тема сообщения"
                required
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>Сообщение *</FormLabel>
              <FormTextarea
                isDark={false}
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Ваше сообщение..."
                required
              />
            </FormGroup>

            <SubmitButton isDark={false} type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Отправка...' : 'Отправить сообщение'}
            </SubmitButton>
          </ContactForm>
        </ContactsGrid>

        <MapSection isDark={false}>
          <MapTitle>Как нас найти</MapTitle>
          <MapPlaceholder>🗺️</MapPlaceholder>
          <MapAddress>
            Мы находимся в центре города, недалеко от метро. 
            Удобная парковка и доступность для всех видов транспорта.
          </MapAddress>
        </MapSection>
      </ContactsContent>
    </ContactsContainer>
  );
};

export default Contacts; 
import React, { useState } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div<{ isDark: boolean }>`
  padding-top: 90px;
  min-height: 100vh;
  background-color: ${({ isDark }) => isDark ? '#1a1a1a' : '#ffffff'};
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
`;

const GalleryHeader = styled.div`
  text-align: center;
  padding: 60px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const GalleryTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
`;

const GallerySubtitle = styled.p`
  font-size: 1.2rem;
  color: #6c757d;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
`;

const GalleryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ isActive: boolean; isDark: boolean }>`
  padding: 10px 20px;
  border-radius: 25px;
  border: 2px solid ${({ isActive, isDark }) => 
    isActive 
      ? (isDark ? '#4a9eff' : '#007bff')
      : (isDark ? '#404040' : '#e0e0e0')
  };
  background-color: ${({ isActive, isDark }) => 
    isActive 
      ? (isDark ? '#4a9eff' : '#007bff')
      : 'transparent'
  };
  color: ${({ isActive, isDark }) => 
    isActive 
      ? '#ffffff'
      : (isDark ? '#ffffff' : '#333333')
  };
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ isActive, isDark }) => 
      isActive 
        ? (isDark ? '#3a8eef' : '#0056b3')
        : (isDark ? '#404040' : '#f8f9fa')
    };
  }
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

const GalleryItem = styled.div<{ isDark: boolean }>`
  background-color: ${({ isDark }) => isDark ? '#2d2d2d' : '#ffffff'};
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const GalleryImage = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  position: relative;
  overflow: hidden;
`;

const GalleryOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 123, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const GalleryInfo = styled.div`
  padding: 20px;
`;

const GalleryItemTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`;

const GalleryItemDescription = styled.p`
  color: #6c757d;
  line-height: 1.5;
  font-size: 0.9rem;
`;

const Modal = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const ModalContent = styled.div<{ isDark: boolean }>`
  background-color: ${({ isDark }) => isDark ? '#2d2d2d' : '#ffffff'};
  border-radius: 15px;
  padding: 30px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
`;

const ModalImage = styled.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #333;
`;

const ModalDescription = styled.p`
  color: #6c757d;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const CloseButton = styled.button<{ isDark: boolean }>`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ isDark }) => isDark ? '#404040' : '#f8f9fa'};
  border: none;
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #dc3545;
    color: white;
  }
`;

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const categories = [
    { id: 'all', name: 'Все' },
    { id: 'office', name: 'Офис' },
    { id: 'products', name: 'Товары' },
    { id: 'team', name: 'Команда' },
    { id: 'events', name: 'Мероприятия' }
  ];

  const galleryItems = [
    {
      id: 1,
      title: 'Наш офис',
      description: 'Современное рабочее пространство, где рождаются инновационные идеи',
      category: 'office',
      image: '🏢'
    },
    {
      id: 2,
      title: 'Каталог товаров',
      description: 'Широкий ассортимент электроники и гаджетов',
      category: 'products',
      image: '📱'
    },
    {
      id: 3,
      title: 'Команда разработчиков',
      description: 'Наши талантливые программисты за работой',
      category: 'team',
      image: '👥'
    },
    {
      id: 4,
      title: 'Склад товаров',
      description: 'Организованное хранение и подготовка заказов',
      category: 'products',
      image: '📦'
    },
    {
      id: 5,
      title: 'Корпоративное мероприятие',
      description: 'Командообразование и празднование успехов',
      category: 'events',
      image: '🎉'
    },
    {
      id: 6,
      title: 'Служба поддержки',
      description: 'Наши специалисты всегда готовы помочь клиентам',
      category: 'team',
      image: '🎧'
    },
    {
      id: 7,
      title: 'Выставка технологий',
      description: 'Участие в международных выставках и конференциях',
      category: 'events',
      image: '🎪'
    },
    {
      id: 8,
      title: 'Лаборатория тестирования',
      description: 'Проверка качества каждого товара перед продажей',
      category: 'office',
      image: '🔬'
    },
    {
      id: 9,
      title: 'Новинки сезона',
      description: 'Последние поступления в нашем каталоге',
      category: 'products',
      image: '🆕'
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const handleItemClick = (item: any) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <GalleryContainer isDark={false}>
      <GalleryHeader>
        <div className="container">
          <GalleryTitle>Галерея</GalleryTitle>
          <GallerySubtitle>
            Познакомьтесь с нашей компанией через фотографии офиса, команды, 
            товаров и мероприятий
          </GallerySubtitle>
        </div>
      </GalleryHeader>

      <GalleryContent>
        <FilterButtons>
          {categories.map((category) => (
            <FilterButton
              key={category.id}
              isActive={selectedCategory === category.id}
              isDark={false}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </FilterButton>
          ))}
        </FilterButtons>

        <GalleryGrid>
          {filteredItems.map((item) => (
            <GalleryItem key={item.id} isDark={false} onClick={() => handleItemClick(item)}>
              <GalleryImage>
                {item.image}
                <GalleryOverlay>👁️</GalleryOverlay>
              </GalleryImage>
              <GalleryInfo>
                <GalleryItemTitle>{item.title}</GalleryItemTitle>
                <GalleryItemDescription>{item.description}</GalleryItemDescription>
              </GalleryInfo>
            </GalleryItem>
          ))}
        </GalleryGrid>
      </GalleryContent>

      <Modal isOpen={!!selectedItem} onClick={closeModal}>
        <ModalContent isDark={false} onClick={(e) => e.stopPropagation()}>
          <CloseButton isDark={false} onClick={closeModal}>×</CloseButton>
          {selectedItem && (
            <>
              <ModalImage>{selectedItem.image}</ModalImage>
              <ModalTitle>{selectedItem.title}</ModalTitle>
              <ModalDescription>{selectedItem.description}</ModalDescription>
            </>
          )}
        </ModalContent>
      </Modal>
    </GalleryContainer>
  );
};

export default Gallery; 
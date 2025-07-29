import React from 'react';
import styled from 'styled-components';

const ProductsContainer = styled.div<{ isDark: boolean }>`
  padding-top: 90px;
  min-height: 100vh;
  background-color: ${({ isDark }) => isDark ? '#1a1a1a' : '#ffffff'};
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
`;

const ProductsHeader = styled.div`
  text-align: center;
  padding: 40px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const ProductsTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`;

const ProductsSubtitle = styled.p`
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 600px;
  margin: 0 auto;
`;

const ProductsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

const FiltersSection = styled.div<{ isDark: boolean }>`
  background-color: ${({ isDark }) => isDark ? '#2d2d2d' : '#ffffff'};
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const FiltersTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: #333;
`;

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
`;

const FilterSelect = styled.select<{ isDark: boolean }>`
  padding: 10px;
  border: 1px solid ${({ isDark }) => isDark ? '#404040' : '#e0e0e0'};
  border-radius: 5px;
  background-color: ${({ isDark }) => isDark ? '#404040' : '#ffffff'};
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
  font-size: 14px;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
`;

const ProductCard = styled.div<{ isDark: boolean }>`
  background-color: ${({ isDark }) => isDark ? '#2d2d2d' : '#ffffff'};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.div`
  width: 100%;
  height: 200px;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  font-size: 3rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`;

const ProductPrice = styled.div`
  font-size: 1.3rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 15px;
`;

const ProductActions = styled.div`
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button<{ isDark: boolean; variant?: 'primary' | 'secondary' }>`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s ease;
  border: 1px solid ${({ isDark, variant }) => 
    variant === 'primary' 
      ? (isDark ? '#4a9eff' : '#007bff')
      : (isDark ? '#404040' : '#e0e0e0')
  };
  background-color: ${({ isDark, variant }) => 
    variant === 'primary' 
      ? (isDark ? '#4a9eff' : '#007bff')
      : 'transparent'
  };
  color: ${({ isDark, variant }) => 
    variant === 'primary' 
      ? '#ffffff'
      : (isDark ? '#ffffff' : '#333333')
  };

  &:hover {
    background-color: ${({ isDark, variant }) => 
      variant === 'primary' 
        ? (isDark ? '#3a8eef' : '#0056b3')
        : (isDark ? '#404040' : '#f8f9fa')
    };
  }
`;

const Products: React.FC = () => {
  // Моковые данные для демонстрации
  const mockProducts = [
    { id: 1, name: 'iPhone 15 Pro', price: 89999, category: 'Смартфоны', image: '📱' },
    { id: 2, name: 'MacBook Air M2', price: 129999, category: 'Ноутбуки', image: '💻' },
    { id: 3, name: 'AirPods Pro', price: 24999, category: 'Наушники', image: '🎧' },
    { id: 4, name: 'iPad Air', price: 59999, category: 'Планшеты', image: '📱' },
    { id: 5, name: 'Apple Watch Series 9', price: 39999, category: 'Умные часы', image: '⌚' },
    { id: 6, name: 'Samsung Galaxy S24', price: 79999, category: 'Смартфоны', image: '📱' },
    { id: 7, name: 'Sony WH-1000XM5', price: 34999, category: 'Наушники', image: '🎧' },
    { id: 8, name: 'Dell XPS 13', price: 99999, category: 'Ноутбуки', image: '💻' },
  ];

  return (
    <ProductsContainer isDark={false}>
      <ProductsHeader>
        <div className="container">
          <ProductsTitle>Каталог товаров</ProductsTitle>
          <ProductsSubtitle>
            Широкий ассортимент электроники и гаджетов для любых потребностей
          </ProductsSubtitle>
        </div>
      </ProductsHeader>

      <ProductsContent>
        <FiltersSection isDark={false}>
          <FiltersTitle>Фильтры</FiltersTitle>
          <FiltersGrid>
            <FilterSelect isDark={false}>
              <option value="">Все категории</option>
              <option value="smartphones">Смартфоны</option>
              <option value="laptops">Ноутбуки</option>
              <option value="tablets">Планшеты</option>
              <option value="headphones">Наушники</option>
              <option value="watches">Умные часы</option>
            </FilterSelect>
            <FilterSelect isDark={false}>
              <option value="">Сортировка</option>
              <option value="price-asc">По цене (возрастание)</option>
              <option value="price-desc">По цене (убывание)</option>
              <option value="name-asc">По названию (А-Я)</option>
              <option value="name-desc">По названию (Я-А)</option>
            </FilterSelect>
            <FilterSelect isDark={false}>
              <option value="">Цена</option>
              <option value="0-10000">До 10,000 ₽</option>
              <option value="10000-50000">10,000 - 50,000 ₽</option>
              <option value="50000-100000">50,000 - 100,000 ₽</option>
              <option value="100000+">От 100,000 ₽</option>
            </FilterSelect>
          </FiltersGrid>
        </FiltersSection>

        <ProductsGrid>
          {mockProducts.map((product) => (
            <ProductCard key={product.id} isDark={false}>
              <ProductImage>{product.image}</ProductImage>
              <ProductTitle>{product.name}</ProductTitle>
              <ProductPrice>{product.price.toLocaleString()} ₽</ProductPrice>
              <ProductActions>
                <ActionButton isDark={false} variant="secondary">
                  В избранное
                </ActionButton>
                <ActionButton isDark={false} variant="primary">
                  В корзину
                </ActionButton>
              </ProductActions>
            </ProductCard>
          ))}
        </ProductsGrid>
      </ProductsContent>
    </ProductsContainer>
  );
};

export default Products; 
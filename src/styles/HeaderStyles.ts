import styled from 'styled-components';

export const HeaderContainer = styled.header<{ isDark: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background-color: ${({ isDark }) => isDark ? '#2d2d2d' : '#ffffff'};
  border-bottom: 1px solid ${({ isDark }) => isDark ? '#404040' : '#e0e0e0'};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
    height: 60px;
  }
`;

export const Logo = styled.div<{ isDark: boolean }>`
  font-size: 24px;
  font-weight: bold;
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ isDark }) => isDark ? '#4a9eff' : '#007bff'};
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SearchContainer = styled.div`
  flex: 1;
  max-width: 400px;
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchInput = styled.input<{ isDark: boolean }>`
  width: 100%;
  padding: 10px 15px;
  border: 1px solid ${({ isDark }) => isDark ? '#404040' : '#e0e0e0'};
  border-radius: 25px;
  background-color: ${({ isDark }) => isDark ? '#404040' : '#f8f9fa'};
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
  font-size: 14px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ isDark }) => isDark ? '#4a9eff' : '#007bff'};
    box-shadow: 0 0 0 2px ${({ isDark }) => isDark ? 'rgba(74, 158, 255, 0.2)' : 'rgba(0, 123, 255, 0.2)'};
  }

  &::placeholder {
    color: ${({ isDark }) => isDark ? '#a0a0a0' : '#6c757d'};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a<{ isDark: boolean }>`
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
  font-weight: 500;
  transition: color 0.3s ease;
  position: relative;

  &:hover {
    color: ${({ isDark }) => isDark ? '#4a9eff' : '#007bff'};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ isDark }) => isDark ? '#4a9eff' : '#007bff'};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ActionButton = styled.button<{ isDark: boolean }>`
  position: relative;
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ isDark }) => isDark ? '#404040' : '#f8f9fa'};
    color: ${({ isDark }) => isDark ? '#4a9eff' : '#007bff'};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Badge = styled.span<{ isDark: boolean }>`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: ${({ isDark }) => isDark ? '#ff4757' : '#dc3545'};
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

export const ThemeToggle = styled.button<{ isDark: boolean }>`
  padding: 8px;
  border-radius: 50%;
  background-color: transparent;
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ isDark }) => isDark ? '#404040' : '#f8f9fa'};
    color: ${({ isDark }) => isDark ? '#4a9eff' : '#007bff'};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const AuthButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AuthButton = styled.button<{ isDark: boolean; variant?: 'primary' | 'secondary' }>`
  padding: 8px 16px;
  border-radius: 20px;
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

export const MobileMenuButton = styled.button<{ isDark: boolean }>`
  display: none;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    width: 25px;
    height: 3px;
    background-color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
    transition: all 0.3s ease;
  }
`;

export const MobileMenu = styled.div<{ isOpen: boolean; isDark: boolean }>`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  background-color: ${({ isDark }) => isDark ? '#2d2d2d' : '#ffffff'};
  border-bottom: 1px solid ${({ isDark }) => isDark ? '#404040' : '#e0e0e0'};
  transform: translateY(${({ isOpen }) => isOpen ? '0' : '-100%'});
  transition: transform 0.3s ease;
  z-index: 999;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const MobileNavLink = styled.a<{ isDark: boolean }>`
  color: ${({ isDark }) => isDark ? '#ffffff' : '#333333'};
  font-weight: 500;
  padding: 10px 0;
  border-bottom: 1px solid ${({ isDark }) => isDark ? '#404040' : '#e0e0e0'};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ isDark }) => isDark ? '#4a9eff' : '#007bff'};
  }
`;

export const MobileSearch = styled.div`
  margin-bottom: 20px;

  @media (min-width: 769px) {
    display: none;
  }
`; 
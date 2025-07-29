import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store';
import { setSearchQuery } from '../store/slices/searchSlice';
import { toggleTheme } from '../store/slices/themeSlice';
import {
  HeaderContainer,
  HeaderContent,
  Logo,
  SearchContainer,
  SearchInput,
  Navigation,
  NavLink,
  HeaderActions,
  ActionButton,
  Badge,
  ThemeToggle,
  AuthButtons,
  AuthButton,
  MobileMenuButton,
  MobileMenu,
  MobileNav,
  MobileNavLink,
  MobileSearch,
} from '../styles/HeaderStyles';

// SVG иконки
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);

const CartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);

const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
  </svg>
);

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"/>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-3.03 0-5.5-2.47-5.5-5.5 0-1.82.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/>
  </svg>
);

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const { isDark } = useSelector((state: RootState) => state.theme);
  const { items: cartItems } = useSelector((state: RootState) => state.cart);
  const { items: favorites } = useSelector((state: RootState) => state.favorites);
  const { isAuthenticated } = useSelector((state: RootState) => state.user);

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const favoritesCount = favorites.length;

  const navigationItems = [
    { id: 'promotions', label: 'Акции', path: '/promotions' },
    { id: 'about', label: 'О нас', path: '/about' },
    { id: 'team', label: 'Наша команда', path: '/team' },
    { id: 'gallery', label: 'Галерея', path: '/gallery' },
    { id: 'contacts', label: 'Контакты', path: '/contacts' },
  ];

  const handleLogoClick = () => {
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    dispatch(setSearchQuery(value));
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <HeaderContainer isDark={isDark}>
        <HeaderContent>
          <Logo isDark={isDark} onClick={handleLogoClick}>
            TechMarket
          </Logo>

          <SearchContainer>
            <SearchInput
              isDark={isDark}
              type="text"
              placeholder="Поиск товаров..."
              value={searchValue}
              onChange={handleSearchChange}
            />
          </SearchContainer>

          <Navigation>
            {navigationItems.map((item) => (
              <NavLink
                key={item.id}
                isDark={isDark}
                href={item.path}
                onClick={handleNavLinkClick}
              >
                {item.label}
              </NavLink>
            ))}
          </Navigation>

          <HeaderActions>
            <ThemeToggle isDark={isDark} onClick={handleThemeToggle}>
              {isDark ? <SunIcon /> : <MoonIcon />}
            </ThemeToggle>

            <ActionButton isDark={isDark} onClick={() => navigate('/favorites')}>
              <HeartIcon />
              {favoritesCount > 0 && (
                <Badge isDark={isDark}>{favoritesCount}</Badge>
              )}
            </ActionButton>

            <ActionButton isDark={isDark} onClick={() => navigate('/cart')}>
              <CartIcon />
              {cartItemsCount > 0 && (
                <Badge isDark={isDark}>{cartItemsCount}</Badge>
              )}
            </ActionButton>

            <AuthButtons>
              {isAuthenticated ? (
                <AuthButton isDark={isDark} variant="secondary">
                  Профиль
                </AuthButton>
              ) : (
                <>
                  <AuthButton isDark={isDark} variant="secondary">
                    Войти
                  </AuthButton>
                  <AuthButton isDark={isDark} variant="primary">
                    Регистрация
                  </AuthButton>
                </>
              )}
            </AuthButtons>

            <MobileMenuButton isDark={isDark} onClick={handleMobileMenuToggle}>
              <span></span>
              <span></span>
              <span></span>
            </MobileMenuButton>
          </HeaderActions>
        </HeaderContent>
      </HeaderContainer>

      <MobileMenu isOpen={isMobileMenuOpen} isDark={isDark}>
        <MobileSearch>
          <SearchInput
            isDark={isDark}
            type="text"
            placeholder="Поиск товаров..."
            value={searchValue}
            onChange={handleSearchChange}
          />
        </MobileSearch>
        <MobileNav>
          {navigationItems.map((item) => (
            <MobileNavLink
              key={item.id}
              isDark={isDark}
              href={item.path}
              onClick={handleNavLinkClick}
            >
              {item.label}
            </MobileNavLink>
          ))}
          {isAuthenticated ? (
            <MobileNavLink isDark={isDark} href="/profile" onClick={handleNavLinkClick}>
              Профиль
            </MobileNavLink>
          ) : (
            <>
              <MobileNavLink isDark={isDark} href="/login" onClick={handleNavLinkClick}>
                Войти
              </MobileNavLink>
              <MobileNavLink isDark={isDark} href="/register" onClick={handleNavLinkClick}>
                Регистрация
              </MobileNavLink>
            </>
          )}
        </MobileNav>
      </MobileMenu>
    </>
  );
};

export default Header; 
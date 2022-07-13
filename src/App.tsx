import React from 'react';
import Menu from './components/Menu/Menu';
import { GlobalStyle, MenuSection } from './styles/global';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <MenuSection>
        <Menu />
      </MenuSection>
    </>
  );
}

export default App;

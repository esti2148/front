// import { useState } from 'react';
// import './App.css';
// import { Home } from './components/Home/home';
// import { Mouse } from './components/Mouse/mouse';
// import { Route, Routes } from 'react-router-dom';




// function App() {

//   return (
//     <div >

//     </div>
    
//   );
// }

// export default App;
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import rtlPlugin from 'stylis-plugin-rtl';
import { prefixer } from 'stylis';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import Theme from './theme/Theme';
import { CustomersManeger } from './components/customers/CustomersManeger';

// קונפיגורציה לתמיכה ב-RTL
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <MuiThemeProvider theme={Theme}>
        <CssBaseline />
        <CustomersManeger />
      </MuiThemeProvider>
    </CacheProvider>
  );
}



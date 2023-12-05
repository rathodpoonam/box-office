import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import MainLayout from './components/MainLayout';
import Show from './pages/Show';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalTheme } from './theme';

function App() {
  const queryClient = new QueryClient();

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <GlobalTheme>
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/starred" element={<Starred />} />
              </Route>

              <Route path="/show/:showId" element={<Show />} />

              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </BrowserRouter>
        </GlobalTheme>
      </QueryClientProvider>
    </div>
  );
}

export default App;

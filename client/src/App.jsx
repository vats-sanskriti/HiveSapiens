import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectRoute from './components/auth/ProtectRoute';
import { LayoutLoader } from './components/layout/Loaders';
const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Chat = lazy(() => import('./pages/Chat'));
const Groups = lazy(() => import('./pages/Groups'));
const NotFound = lazy(() => import('./pages/NotFound'));


let user = true;


const App = () => {
  return <BrowserRouter>
   <Suspense fallback={<LayoutLoader />}>
    <Routes>
      <Route path="/" element={<ProtectRoute user={user} reader="/login"><Home /></ProtectRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<ProtectRoute user={user} reader="/login"><Chat /></ProtectRoute>} />
      <Route path="/groups" element={<ProtectRoute user={user} reader="/login"><Groups /></ProtectRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   </Suspense>
  </BrowserRouter>
}

export default App;
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Banner from './Banner.jsx'
import Privacy from './Privacy.jsx'
import Cookie from './cookie.jsx'
import Hopoo from './Hopoogame.jsx'

function AppContent() {
  const location = useLocation()
const hideLayout =
    location.pathname === '/privacy' || location.pathname === '/cookie' || location.pathname === '/hopoo';  

  return (
    <>
      {!hideLayout && <Header />}

      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookie" element={<Cookie />} />
        <Route path="/hopoo" element={<Hopoo />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
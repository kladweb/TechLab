import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const {pathname} = useLocation();
  const htmlEl = document.querySelector('html');

  useEffect(() => {
    if (htmlEl) {
      htmlEl.style.scrollBehavior = 'auto';
    }
    window.scrollTo({top: 0, behavior: 'auto'})
    if (htmlEl) {
      htmlEl.style.scrollBehavior = 'smooth';
    }
  }, [pathname])
  return null;
}

export default ScrollToTop
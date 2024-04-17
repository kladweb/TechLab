import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const {hash} = location;
    const removeHashCharacter = (str: any) => {
      return str.slice(1);
    };

    if (hash) {
      const element = document.getElementById(removeHashCharacter(hash));

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            block: "start",
            inline: "start",
          });
        }, 0)
      }
    }
  }, [location]);

  return null;
};

export default ScrollToHashElement;
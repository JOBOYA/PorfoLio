





import { Typewriter } from 'react-simple-typewriter'
import { useState, useEffect} from 'react';




export const TypeWritter = () => {
    const [hasTypewriterPlayed, setHasTypewriterPlayed] = useState(false);
//type writer
useEffect(() => {
    const checkScroll = () => {
        if (window.scrollY > 100) {
            setHasTypewriterPlayed(true);
        }
        };
    
    window.addEventListener("scroll", checkScroll);
    
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  

  useEffect(() => {
    if (hasTypewriterPlayed) {
      // Calculez le temps total de l'animation
      const totalTime = "Cliquer sur le Yeti pour le faire parler".length * 70 + 1000; // longueur du texte * typeSpeed + delaySpeed
      const timer = setTimeout(() => {
        setHasTypewriterPlayed(false); // Arrête l'animation
      }, totalTime);
      return () => clearTimeout(timer); // Nettoyage
    }
  }, [hasTypewriterPlayed])


  return(
    <div className='mb-16'>
    {hasTypewriterPlayed && (
        <Typewriter
          words={["Cliquer sur le Yeti pour le faire parler"]}
          
          loop={0} // pas de boucle
          cursor
          cursorStyle="_"
          typeSpeed={90}
          deleteSpeed={90}
          delaySpeed={2000}
        />
      )}
    </div>
  )

}
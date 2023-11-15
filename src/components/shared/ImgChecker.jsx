import { useEffect, useState } from "react";
import Logo from "../../assets/images/home/logo.png";


const ImgChecker = ({ imagePath }) => {
  const [isValid, setIsValid] = useState(null);

useEffect(() => {
    const image = new Image();
    image.src = imagePath;

    const handleLoad = () => {
      setIsValid(true);
    };

    const handleError = () => {
      setIsValid(false);
    };

    image.addEventListener('load', handleLoad);
    image.addEventListener('error', handleError);

    return () => {
      image.removeEventListener('load', handleLoad);
      image.removeEventListener('error', handleError);
    };
  }, [imagePath]);

  return (
    <div>
      {isValid === null && <p>Loading...</p>}
      {isValid === true && <img src={imagePath} alt="default-img" /> }
      {isValid === false &&            <img src={Logo} alt="default-img" /> 
}
    </div>
  );
};

export default ImgChecker;
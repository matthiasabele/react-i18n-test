import React, {MouseEvent} from 'react';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const [ t, i18n ] = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    //console.log(event.currentTarget.getAttribute('data-dio'));
    let dio=''+event.currentTarget.getAttribute('data-dio');
    changeLanguage(dio);
  };

  return (

    <div>

      <h1> { t('porco') } </h1>

      <button data-dio="en" onClick={handleClick}>Switch</button>

    </div>

  )
}


export default HomePage;

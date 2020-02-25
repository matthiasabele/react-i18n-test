import React from 'react';
import { useTranslation } from 'react-i18next';

function HomePage() {
  const [ t, i18n ] = useTranslation();

  return (

    <div>

      <h1> { t('IDS_MENU_HOME') } </h1>

    </div>

  )
}


export default HomePage;

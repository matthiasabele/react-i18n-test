import React, {ChangeEvent, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import {Select} from '@material-ui/core/';

interface OptionType {
  value: unknown
}
//ciao
function HomePage() {
  const [ t, i18n ] = useTranslation();

  useEffect(() => {
    let selectLang: HTMLSelectElement = document.getElementById("selectLang") as HTMLSelectElement;
    selectLang.value = i18n.language;
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const handleChange = (event: ChangeEvent<OptionType>) => {
    //console.log(event.target.value);
    let lang=''+event.target.value;
    changeLanguage(lang);
  };

  return (

    <div>

      <h1> { t('IDS_MENU_SETTINGS') } </h1>

      <Select native labelId="label" id="selectLang" onChange={handleChange}>
        <option value="it">Italian</option>
        <option value="en">English</option>
        <option value="de">German</option>
      </Select>

    </div>

  )
}


export default HomePage;

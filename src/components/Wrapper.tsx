import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import French from '../lang/fr.json';
import Arabic from '../lang/ar.json';
import English from '../lang/en.json';

interface conProp {
  locale: string,
  selectLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void
}
export const Context = React.createContext<Partial<conProp>>({})

const local: string = navigator.language;

interface objs {
  [key: string]: string
}

let lang: objs;
lang = English;

type wrapProp = {
  children: object
}
const Wrapper = ({ children }: wrapProp) => {
  const [locale, setLocale] = React.useState(local);
  const [messages, setMessages] = React.useState(lang);

  function selectLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
    const newLocale = e.currentTarget.value;
    setLocale(newLocale);
    if (newLocale === 'en') {
      setMessages(English);
    } else {
      if (newLocale === 'fr') {
        setMessages(French);
      } else {
        setMessages(Arabic);
      }
    }
  }

  const value = { locale, selectLanguage }
  return (
    <Context.Provider value={value}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </Context.Provider>

  );
}


export default Wrapper;
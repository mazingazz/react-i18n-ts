import React, { useContext } from "react";
import {Context} from "./components/Wrapper";
import {FormattedMessage, FormattedDate, FormattedNumber, FormattedPlural, FormattedTime} from 'react-intl';
function App() {
  const context = useContext(Context);
  return (
    <div className="App">
      <select value={context.locale} onChange={context.selectLanguage}>
        <option value='en'>English</option>
        <option value='fr'>French</option>
        <option value='ar'>Arabic</option>
      </select>

      <FormattedMessage
              id = "app.header"
              defaultMessage="Edit the files and save to reload"
              values = {{fileName: 'src/App.js', code: (word:string)=> <strong>{word}</strong>}}
          />
    </div>
  );
}

export default App;

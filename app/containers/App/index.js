/**
 * App
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import style from 'index.scss';
import { func } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import message from './message';
import { changeLocale } from '../LanguageProvider/actions';

function App(props) {
  const { changeLocale } = props; // eslint-disable-line
  const [lang, setLang] = useState();
  function handleChange(event) {
    setLang(event.target.value);
  }

  useEffect(() => {
    if (['en', 'de'].includes(lang)) changeLocale(lang);
  }, [lang]);
  return (
    <div>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <h1 className={style.danger}>
        <FormattedMessage {...message.app} />
      </h1>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

App.propTypes = {
  changeLocale: func,
};

export default connect(
  null,
  {
    changeLocale,
  },
)(App);

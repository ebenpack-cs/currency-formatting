import React, { useState, useEffect } from 'react';
import './App.css';

import ReactDOMServer from 'react-dom/server';

import { IntlProvider } from 'react-intl'

import { ErrorBoundary, stringEquals } from './util';

import { AccountingJs } from './Libs/AccountingJs';
import { CJS } from './Libs/CurrencyJs';
import { CurrencyFormatterJs } from './Libs/CurrencyFormatterJs';
import { DineroJs } from './Libs/DineroJs';
import { NumbroJs } from './Libs/NumbroJs';
import { NumeralJs } from './Libs/NumeralJs';
import { ReactIntl } from './Libs/ReactIntl';

const Header = {
  name: 'locale/currency',
  formatter: ({ locale, currency, amount }) =>
    <span>{locale} - {currency}</span>
}

const formatters = [
  Header,
  ReactIntl,
  AccountingJs,
  CJS,
  CurrencyFormatterJs,
  DineroJs,
  NumbroJs,
  NumeralJs,
];

const currencies = [
  'AUD',
  'GBP',
  'CAD',
  'EUR',
  'HKD',
  'NZD',
  'SEK',
  'CHF',
  'USD',
];

const locales = [
  'de-de',
  'en-us',
  'en-au',
  'en-ch',
  'se',
  'en-ca',
  'en-gb',
  'en-hk',
  'en-nz',
  'es-es',
  'en-se',
  'se-sv',
  'es-us',
]


const DoSomeJunk = ({ locale }) => {
  const amount = 12345.67;
  const sourceOTruth = {}; // Used to quickly check format options for correctness
  currencies.forEach(currency => {
    sourceOTruth[locale + currency] = ReactDOMServer.renderToStaticMarkup(<IntlProvider locale={locale}><ReactIntl.formatter locale={locale} currency={currency} amount={amount} /></IntlProvider>)
  })
  const all = (
    formatters.map(formatter =>
      <tr key={formatter.name}>
        <td className="name">{formatter.name}</td>
        <td className="name">{formatter.size}</td>
        {currencies.map(currency => {
          const formatted = <formatter.formatter locale={locale} currency={currency} amount={amount} />;
          const formattedText = ReactDOMServer.renderToStaticMarkup(<IntlProvider locale={locale}>{formatted}</IntlProvider>);
          const canonical = sourceOTruth[locale + currency];
          let className = '';
          if (canonical) {
            className = formatter === Header || stringEquals(formattedText.trim(), canonical.trim()) ? "" : "mismatch";
          }
          return (
            <ErrorBoundary key={locale + currency}>
              <td className={className}>{formatted}</td>
            </ErrorBoundary>
          );
        })}
        <td className="name" style={{ textAlign: 'left', whiteSpace: 'pre' }}>{formatter.notes}</td>
      </tr>
    )
  );
  return <React.Fragment>{all}</React.Fragment>
}

const App = ({ locale }) => {
  return (
    <div>
      <table>
        <colgroup>
          <col span="1" style={{ background: "gray", fontWeight: 'bold' }} />
          <col span="1" style={{ background: "gray", fontWeight: 'bold' }} />
        </colgroup>
        <tbody>
          <DoSomeJunk locale={locale} />
        </tbody>
      </table>
    </div>
  );
}

function Foo() {
  const [locale, setLocale] = useState('de-de');
  return (
    <div className="App">
      <select onChange={evt => setLocale(evt.target.value)}>
        {locales.map(locale =>
          <option
            key={locale}
            value={locale.split('-')[0]}
          >
            {locale}
          </option>)}
      </select>
      <IntlProvider locale={locale} key={locale}>
        <App locale={locale} />
      </IntlProvider>
    </div>
  );
}

export default Foo;

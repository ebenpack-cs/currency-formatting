import React from 'react';
import numeral from 'numeral';

// import numeral_en from 'numeral/locales/en' // <- these don't exist
// import numeral_se from 'numeral/locales/se' // <- these don't exist
import numeral_de from 'numeral/locales/de'
import numeral_es from 'numeral/locales/es'
import numeral_fr from 'numeral/locales/fr'

export const NumeralJs = {
  name: 'numeral',
  size: '12.2KB/19.8KB',
  notes:
`formatting is extremely manual;
limited locales available (can be extended though);
Ties currency to language/locale;
Weird string based formatting DSL;
Doesn't localize formatting (requires developer to supply correct format string for given locale);
Weird API (formatting configuration requires mutating global state);
34 locales`,
  formatter: ({ locale, currency, amount }) => {
    numeral.locale(locale.split('-')[0]);
    let formatted;
    try {
      formatted = numeral(amount).format('0,0.00$');
    } catch (e) {
      formatted = 'ERROR!';
    }
    return <span>{formatted}</span>;
  }
}
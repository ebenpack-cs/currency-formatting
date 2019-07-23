import React from 'react';

import dinero from 'dinero.js';

import { formattedLocale } from '../util';

export const DineroJs = {
  name: 'Dinero.js',
  size: '9.8KB',
  notes: 
`Uses same internationalization we already use... has the same issue;
also requires developer specify number formatting rules (e.g. separator character), so in some ways provides less functionality/places a larger burden on the developer/user (more room for bugs, larger maintenance burden);
(potentially) requires (locale*currency) handwritten formatters.`,
  formatter: ({ locale, currency, amount }) => {
    return <span>{dinero({ amount: amount * 100, currency: currency, precision: 2 })
      .setLocale(formattedLocale(locale))
      .toFormat('$0,0.00')}</span>
  }
}
import React from 'react';

import currencyJs from 'currency.js';

// currency.js
export const CJS = {
    name: 'currency.js',
    size: '3.2KB',
    notes: 
`Developer must define localization formats;
requires (locale*currency) handwritten formatters`,
    formatter: ({ locale, currency, amount }) => {
        const formatted = ({
            'AUD': value => currencyJs(value, { symbol: 'A$', decimal: '.', separator: ',' }),
            'GBP': value => currencyJs(value, { symbol: '£', decimal: '.', separator: ',' }),
            'CAD': value => currencyJs(value, { symbol: '$', decimal: '.', separator: ',' }),
            'EUR': value => currencyJs(value, { symbol: '€', decimal: '.', separator: ',' }),
            'HKD': value => currencyJs(value, { symbol: 'HK$', decimal: '.', separator: ',' }),
            'NZD': value => currencyJs(value, { symbol: 'NZ$', decimal: '.', separator: ',' }),
            'SEK': value => currencyJs(value, { symbol: 'SEK\xa0', decimal: '.', separator: ',' }),
            'CHF': value => currencyJs(value, { symbol: 'CHF\xa0', decimal: '.', separator: ',' }),
            'USD': value => currencyJs(value, { symbol: '$', decimal: '.', separator: ',' }),
        })[currency](amount).format(true);
        return <span>{formatted}</span>;
    }
}
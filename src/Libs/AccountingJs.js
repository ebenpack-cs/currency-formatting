import React from 'react';


export const AccountingJs = {
    name: 'Accounting.js',
    size: '2.2KB',
    notes:
`no npm package;
manual formatting (user supplies symbol, e.g.);
difficult/manual to localize;
requires (locale*currency) handwritten formatters`,
    formatter: ({ locale, currency, amount }) => {
        const formatTable = {
            'AUD': { symbol: 'A$', precision: 2, thousand: ',', format: { pos: '%s %v', neg: '%s (%v)', zero: '%s  --' } },
            'GBP': { symbol: '£', precision: 2, thousand: ',', format: { pos: '%s %v', neg: '%s (%v)', zero: '%s  --' } },
            'CAD': { symbol: '$', precision: 2, thousand: ',', format: { pos: '%s %v', neg: '%s (%v)', zero: '%s  --' } },
            'EUR': { symbol: '€', precision: 2, thousand: ',', format: { pos: '%s %v', neg: '%s (%v)', zero: '%s  --' } },
            'HKD': { symbol: 'HK$', precision: 2, thousand: ',', format: { pos: '%s %v', neg: '%s (%v)', zero: '%s  --' } },
            'NZD': { symbol: 'NZ$', precision: 2, thousand: ',', format: { pos: '%s %v', neg: '%s (%v)', zero: '%s  --' } },
            'SEK': { symbol: 'SEK\xa0', precision: 2, thousand: ',', format: { pos: '%s %v', neg: '%s (%v)', zero: '%s  --' } },
            'CHF': { symbol: 'CHF\xa0', precision: 2, thousand: ',', format: { pos: '%s %v', neg: '%s (%v)', zero: '%s  --' } },
            'USD': { symbol: '$', precision: 2, thousand: ',', format: { pos: '%s %v', neg: '%s (%v)', zero: '%s  --' } },
        }
        return <span>{window.accounting.formatMoney(amount, formatTable[currency])}</span>;
    }
}

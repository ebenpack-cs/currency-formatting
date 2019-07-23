import React from 'react';

import currencyFormatter from 'currency-formatter';

export const CurrencyFormatterJs = {
    name: 'currency-formatter',
    size: '',
    notes:
`specifically says not to use this library, and to use the Intl API instead;
Incorrect formatting
Ties currency to language/locale`,
    formatter: ({ locale, currency, amount }) => {
        let formatted;
        try {
            formatted = currencyFormatter.format(amount, { code: currency });
        } catch (e) {
            formatted = 'ERROR!';
        }
        return <span>{formatted}</span>
    }
}

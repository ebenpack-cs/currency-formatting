import React from 'react';

import { FormattedNumber, addLocaleData } from 'react-intl'

import en from 'react-intl/locale-data/en'
import se from 'react-intl/locale-data/se'
import de from 'react-intl/locale-data/de'
import es from 'react-intl/locale-data/es'
import fr from 'react-intl/locale-data/fr'

addLocaleData([
    ...en,
    ...se,
    ...de,
    ...es,
]);

export const ReactIntl = {
    name: 'ReactIntl',
    formatter: ({ locale, currency, amount }) =>
        <FormattedNumber locale={locale} style="currency" currency={currency} value={amount} />
}
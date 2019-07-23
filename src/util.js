import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
    render() {
      if (this.state.hasError) {
        return <span>Error!</span>;
      }
      return this.props.children;
    }
  }
  
  export const formattedLocale = locale => {
    const splitLocale = locale.split('-')
    return splitLocale[0] + (
      splitLocale[1] ? ('-' + locale.split('-')[1].toUpperCase()) : '')
  };
  
  export const stringEquals = (a, b) => (
    a.replace(/\xa0/g, ' ').replace(/\s/g, '') ===
    b.replace(/\xa0/g, ' ').replace(/\s/g, ''));
  
  
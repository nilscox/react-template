import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should display App', () => {
    const { getByText } = render(<App />);

    expect(getByText('App')).toBeVisible();
  });
});

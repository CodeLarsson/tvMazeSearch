import 'react-native';
import React from 'react';
import {it, expect} from '@jest/globals';

import {render} from '@testing-library/react-native';
import ErrorBoundary from '../src/components/error-boundary/ErrorBoundary';
import {DisplayError} from '../src/components/display-error/DisplayError';

it('error boundary displays fallback UI when an error occurs', () => {
  const {getByText} = render(
    <ErrorBoundary fallback={<DisplayError />}>
      <ErrorComponent />
    </ErrorBoundary>,
  );

  // Verify that the fallback UI is displayed
  const fallbackUI = getByText('Something went wrong');
  expect(fallbackUI).toBeTruthy();
});

const ErrorComponent = () => {
  throw new Error('Test error');
};

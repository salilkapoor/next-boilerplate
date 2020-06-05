import React from 'react';
import { render } from '@testing-library/react';

import Card from '.';

describe('TS-001: Card test Suite', () => {
  it('TC-001: should render the Card component', () => {
    const { container } = render(<Card />);
    expect(container).toBeDefined();
  });
});

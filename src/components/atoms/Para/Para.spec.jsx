import React from 'react';
import { render } from '@testing-library/react';

import Para from '.';

describe('TS-001: Para test Suite', () => {
  it('TC-001: should render the Para component', () => {
    const { container } = render(
      <Para className="Para-element">
        Title
      </Para>
    );
    expect(container).toBeDefined();

    const element = container.querySelector('Para');

    expect(element).toBeDefined();
    expect(element.className).toBe('Para-element');
  });
});

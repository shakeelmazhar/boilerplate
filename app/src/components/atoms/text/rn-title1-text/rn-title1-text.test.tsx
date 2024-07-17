import { render } from '@testing-library/react-native';
import React from 'react';
import RNTitle1Text from './rn-title1-text.component';

describe('RNTitle1Text Component', () => {
  it('renders text correctly', () => {
    const { getByText } = render(<RNTitle1Text text="Hello World" />);
    expect(getByText('Hello World')).toBeTruthy();
  });

  it('renders children correctly', () => {
    const { getByText } = render(
      <RNTitle1Text>
        <RNTitle1Text>Hello Children</RNTitle1Text>
      </RNTitle1Text>
    );
    expect(getByText('Hello Children')).toBeTruthy();
  });

  it('renders with testID prop', () => {
    const { getByTestId } = render(<RNTitle1Text testID="test-id" />);
    expect(getByTestId('test-id')).toBeTruthy();
  });

  it('renders with specified number of lines', () => {
    const { getByText } = render(<RNTitle1Text text="Multiple Lines" numberOfLines={2} />);
    const textComponent = getByText('Multiple Lines');
    expect(textComponent.props.numberOfLines).toBe(2);
  });
});
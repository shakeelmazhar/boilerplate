import { typography } from '@app/styles/typography';
import { constants } from '@app/utilities';
import { RNText } from '@components/atoms/index';
import React from 'react';
import { RNFootnoteTextProps } from './rn-footnote-text.interface';
import styles from './rn-footnote-text.styles';

/**
 * A component to display localized text.
 * @param {RNFootnoteTextProps} props - The props for the RNFootnoteText component.
 * @returns {JSX.Element} - The rendered component.
 */
const RNFootnoteText: React.FC<RNFootnoteTextProps> = ({
  testID,
  text,
  regular,
  style,
  numberOfLines,
  children
}: RNFootnoteTextProps): JSX.Element => {
  return (
    <RNText
      testID={testID}
      fontFamily={regular ? constants.FONT_FAMILY.REGULAR : constants.FONT_FAMILY.BOLD}
      numberOfLines={numberOfLines}
      style={[styles.textStyle, style, regular ? typography.REGULAR_TEXT_STYLES : typography.BOLD_TEXT_STYLES]}
    >
      {text || children}
    </RNText>
  );
};

export default RNFootnoteText;
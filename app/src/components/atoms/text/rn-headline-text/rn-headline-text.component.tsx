import { typography } from '@app/styles/typography';
import { constants } from '@app/utilities';
import { RNText } from '@components/atoms/index';
import React from 'react';
import { RNSubHeadlineTextProps } from './rn-headline-text.interface';
import styles from './rn-headline-text.styles';

/**
 * A component to display localized text.
 * @param {RNSubHeadlineTextProps} props - The props for the RNSubHeadlineText component.
 * @returns {JSX.Element} - The rendered component.
 */
const RNHeadlineText: React.FC<RNSubHeadlineTextProps> = ({
  testID,
  text,
  regular,
  style,
  numberOfLines,
  children
}: RNSubHeadlineTextProps): JSX.Element => {
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

export default RNHeadlineText;
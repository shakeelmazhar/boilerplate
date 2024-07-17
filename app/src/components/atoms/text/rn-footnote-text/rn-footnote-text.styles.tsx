import { constants } from '@app/utilities';
import { StyleSheet } from 'react-native';

// Then use these styles within your component
const styles = StyleSheet.create({
  textStyle: {
    fontSize: constants.FONT_VARIANTS.FOOTNOTE.FONT_SIZE,
    lineHeight: constants.FONT_VARIANTS.FOOTNOTE.LINE_HEIGHT,
    letterSpacing: constants.FONT_VARIANTS.FOOTNOTE.LETTER_SPACING
  }
});

export default styles;
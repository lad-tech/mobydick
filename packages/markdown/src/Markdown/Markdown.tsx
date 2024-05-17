import {FC, PropsWithChildren} from 'react';
import MarkdownDisplay, {MarkdownProps} from 'react-native-markdown-display';
import {px, useFont, useTheme} from '@lad-tech/mobydick-core';

const Markdown: FC<PropsWithChildren<MarkdownProps>> = ({children, style}) => {
  const {colors} = useTheme();
  const {fontStyle: bodyFontStyle} = useFont('Regular-Primary-XXS');
  const {fontStyle: strongFontStyle} = useFont('SemiBold-Primary-XXS');

  const innersStyle: MarkdownProps['style'] = {
    body: {
      fontFamily: bodyFontStyle.fontFamily,
      fontSize: bodyFontStyle.fontSize,
      color: bodyFontStyle.color,
    },
    heading1: {
      fontSize: px(24),
    },
    heading2: {
      fontSize: px(20),
    },
    heading3: {
      fontSize: px(18),
    },
    strong: {
      fontFamily: strongFontStyle.fontFamily,
    },
    code_inline: {
      backgroundColor: colors.BgSecondary,
    },
    code_block: {
      backgroundColor: colors.BgSecondary,
    },
    fence: {
      backgroundColor: colors.BgSecondary,
    },
  };

  return (
    <MarkdownDisplay style={style ?? innersStyle}>{children}</MarkdownDisplay>
  );
};

export default Markdown;

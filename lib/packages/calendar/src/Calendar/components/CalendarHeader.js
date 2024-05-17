"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mobydick_core_1 = require("@lad-tech/mobydick-core");
const constants_1 = require("../constants");
const CalendarHeader = props => {
    const { title, onPressMonth, onPressYear, onPressLeft, onPressRight } = props;
    const [styles] = (0, mobydick_core_1.useStyles)(stylesCreate);
    return (<mobydick_core_1.View style={styles.container}>
      <mobydick_core_1.Pressable onPress={onPressLeft} accessibilityLabel={constants_1.LABELS.calendarLeftArrow}>
        <mobydick_core_1.SimpleIcon name={'icon-arrow-left'}/>
      </mobydick_core_1.Pressable>
      <mobydick_core_1.View style={styles.title}>
        {Boolean(title.currMonth) && (<mobydick_core_1.TouchableOpacity onPress={onPressMonth} accessibilityLabel={constants_1.LABELS.calendarPressTitleMonth}>
            <mobydick_core_1.Typography font={'Medium-Primary-M'}>{title.currMonth}</mobydick_core_1.Typography>
          </mobydick_core_1.TouchableOpacity>)}
        {Boolean(title.currYear) && (<mobydick_core_1.TouchableOpacity onPress={onPressYear} accessibilityLabel={constants_1.LABELS.calendarPressTitleYear}>
            <mobydick_core_1.Typography font={'Medium-Primary-M'}>{title.currYear}</mobydick_core_1.Typography>
          </mobydick_core_1.TouchableOpacity>)}
      </mobydick_core_1.View>

      <mobydick_core_1.Pressable onPress={onPressRight} accessibilityLabel={constants_1.LABELS.calendarRightArrow}>
        <mobydick_core_1.SimpleIcon name={'icon-arrow-right'}/>
      </mobydick_core_1.Pressable>
    </mobydick_core_1.View>);
};
exports.default = CalendarHeader;
const stylesCreate = (0, mobydick_core_1.createStyles)(_ => ({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: (0, mobydick_core_1.px)(12),
    },
    title: {
        width: (0, mobydick_core_1.px)(160),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

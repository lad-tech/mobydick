"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarWidget = void 0;
const ui_1 = require("@shared/ui");
const Header_1 = __importDefault(require("@shared/ui/Header"));
const avatar_1 = require("@shared/lib/test/data/avatar");
const AvatarWidget = () => {
    const [styles] = (0, ui_1.useStyles)(stylesFn);
    return (<ui_1.View>
      <Header_1.default title={'Avatar'}/>
      <ui_1.View style={styles.container}>
        <ui_1.Typography>{'Content'}</ui_1.Typography>
        <ui_1.View style={styles.row}>
          <ui_1.Avatar user={avatar_1.userTest}/>
          <ui_1.Avatar user={avatar_1.userWithLogoTest}/>
          <ui_1.Avatar user={avatar_1.userTest} type={ui_1.IAvatarTypes.icon}/>
        </ui_1.View>
        <ui_1.Typography>{'State'}</ui_1.Typography>
        <ui_1.View style={styles.row}>
          <ui_1.Avatar user={avatar_1.userTest} type={ui_1.IAvatarTypes.icon} backgroundColor={'green'}/>
          <ui_1.Avatar user={avatar_1.userTest} type={ui_1.IAvatarTypes.icon} backgroundColor={'green'} disabled={true}/>
        </ui_1.View>
        <ui_1.Typography>{'Size'}</ui_1.Typography>
        <ui_1.View style={styles.row}>
          <ui_1.Avatar user={avatar_1.userTest} size={ui_1.IAvatarSize.S}/>
          <ui_1.Avatar user={avatar_1.userTest} size={ui_1.IAvatarSize.M}/>
          <ui_1.Avatar user={avatar_1.userTest} size={ui_1.IAvatarSize.L}/>
          <ui_1.Avatar user={avatar_1.userTest} size={ui_1.IAvatarSize.XL}/>
        </ui_1.View>
        <ui_1.Typography>{'Badge'}</ui_1.Typography>
        <ui_1.View style={styles.row}>
          <ui_1.Avatar user={avatar_1.userWithLogoTest} badge={{ type: ui_1.IBadgeTypes.status, value: ui_1.IStatusTypes.star }}/>
          <ui_1.Avatar user={avatar_1.userWithLogoTest} badge={{
            type: ui_1.IBadgeTypes.indicator,
            value: ui_1.IIndicatorTypes.secondary,
        }}/>
          <ui_1.Avatar user={avatar_1.userWithLogoTest} badge={{
            type: ui_1.IBadgeTypes.indicator,
            value: ui_1.IIndicatorTypes.primary,
        }}/>
        </ui_1.View>
        <ui_1.Typography>{'Badge counter'}</ui_1.Typography>
        <ui_1.View style={styles.row}>
          <ui_1.Avatar user={avatar_1.userWithLogoTest} badge={{
            type: ui_1.IBadgeTypes.counter,
            value: ui_1.ICounterTypes.attention,
            count: 99,
        }}/>
          <ui_1.Avatar user={avatar_1.userWithLogoTest} badge={{
            type: ui_1.IBadgeTypes.counter,
            value: ui_1.ICounterTypes.accent,
            count: 1,
        }}/>
          <ui_1.Avatar user={avatar_1.userWithLogoTest} badge={{
            type: ui_1.IBadgeTypes.counter,
            value: ui_1.ICounterTypes.accentLight,
            count: 111,
        }}/>
          <ui_1.Avatar user={avatar_1.userWithLogoTest} badge={{
            type: ui_1.IBadgeTypes.counter,
            value: ui_1.ICounterTypes.muted,
            count: 2,
        }}/>
          <ui_1.Avatar user={avatar_1.userWithLogoTest} badge={{
            type: ui_1.IBadgeTypes.counter,
            value: ui_1.ICounterTypes.mutedLight,
            count: 42,
        }}/>
        </ui_1.View>
        <ui_1.Typography>{'Group'}</ui_1.Typography>
        <ui_1.View style={styles.row}>
          <ui_1.AvatarGroup groups={avatar_1.defaultGroupDateTest.concat(avatar_1.defaultGroupDateTest)}/>
          <ui_1.AvatarGroup groups={avatar_1.smallGroupDateTest.concat(Array(101).fill(avatar_1.defaultUserTest))} backgroundColor={'#ff0000'} type={ui_1.IAvatarTypes.text} groupCount={50}/>
        </ui_1.View>
      </ui_1.View>
    </ui_1.View>);
};
exports.AvatarWidget = AvatarWidget;
const stylesFn = (0, ui_1.createStyles)(({ spaces }) => ({
    container: {
        gap: spaces.Space16,
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        gap: spaces.Space16,
    },
}));

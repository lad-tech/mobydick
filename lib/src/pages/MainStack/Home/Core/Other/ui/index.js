"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ui_1 = require("@shared/ui");
const getScreenStyles_1 = __importDefault(require("@shared/styles/getScreenStyles"));
const DotsWidget_1 = require("@widgets/Core/Other/ui/DotsWidget");
const AvatarWidget_1 = require("@widgets/Core/Other/ui/AvatarWidget");
const BadgeWidget_1 = require("@widgets/Core/Other/ui/BadgeWidget");
const StatusWidget_1 = require("@widgets/Core/Other/ui/StatusWidget");
const CollapsibleWidget_1 = require("@widgets/Core/Other/ui/CollapsibleWidget");
const CrossedTextWidget_1 = require("@widgets/Core/Other/ui/CrossedTextWidget");
const CarouselWidget_1 = require("@widgets/Core/Other/ui/CarouselWidget");
const OtherScreen = () => {
    const [styles] = (0, ui_1.useStyles)(getScreenStyles_1.default);
    return (<ui_1.ScrollView contentContainerStyle={[styles.container, { flex: undefined }]}>
      <DotsWidget_1.DotsWidget />
      <AvatarWidget_1.AvatarWidget />
      <BadgeWidget_1.BadgeWidget />
      <StatusWidget_1.StatusWidget />
      <CrossedTextWidget_1.CrossedTextWidget />
      <CollapsibleWidget_1.CollapsibleWidget />
      <CarouselWidget_1.CarouselWidget />
    </ui_1.ScrollView>);
};
exports.default = OtherScreen;

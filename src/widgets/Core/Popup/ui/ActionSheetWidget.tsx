import {
  ActionSheetBase,
  Button,
  IItemType,
  TypographyLegacy,
  usePopups,
  View,
} from '@shared/ui';

export const ActionSheetWidget = () => {
  const {openPopup} = usePopups();
  return (
    <View>
      <TypographyLegacy font={'Regular-Primary-H5'}>
        ActionSheet
      </TypographyLegacy>
      <Button
        text={'ActionSheet'}
        onPress={() =>
          openPopup({
            Content: props => (
              <ActionSheetBase {...props}>
                <ActionSheetBase.Item
                  title={'firstItem'}
                  itemType={IItemType.firstItem}
                  onPress={props.onClose}
                />
                <ActionSheetBase.Item
                  title={'innerItem'}
                  itemType={IItemType.innerItem}
                  onPress={props.onClose}
                />
                <ActionSheetBase.Item
                  title={'innerItem'}
                  radio={'radio'}
                  itemType={IItemType.innerItem}
                  onPress={props.onClose}
                />
                <ActionSheetBase.Item
                  title={'lastItem'}
                  itemType={IItemType.lastItem}
                  onPress={props.onClose}
                />
                <ActionSheetBase.Item
                  title={'cancelItem'}
                  itemType={IItemType.cancelItem}
                  onPress={props.onClose}
                />
              </ActionSheetBase>
            ),
          })
        }
      />
    </View>
  );
};

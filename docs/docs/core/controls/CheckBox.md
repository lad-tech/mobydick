import Checkbox from './assets/Checkbox.png';

<img src={Checkbox} />

Reusable Checkbox component


## Example

```tsx
import {
  Radio,
  Typography,
} from '@lad-tech/mobydick-core';

export const ControlListWidget = () => {
  return (
    <CheckBox value={'option two'}>
      <Typography>option two</Typography>
    </CheckBox>
  );
};

```

## `Props`


### <div class="label required basic">Required</div>**`value`**

| TYPE   |
|:-------|
| string |

Value for Radio

### `selected`

| TYPE    |
|:--------|
| boolean |

Select Radio

### `disabled`

| TYPE    |
|:--------|
| boolean |

Disable Radio

### `onPress`

| TYPE       |
|:-----------|
| () => void |

### `containerStyle`

| TYPE                                                             |
|:-----------------------------------------------------------------|
| [ViewStyle](https://reactnative.dev/docs/view-style-props#props) |

Custom styles for container

### `checkboxStyle`

| TYPE                                                             |
|:-----------------------------------------------------------------|
| [ViewStyle](https://reactnative.dev/docs/view-style-props#props) |

Custom styles for checkbox

### `fill`

| TYPE   |
|:-------|
| string |

Custom color for fill

### `width`

| TYPE   |
|:-------|
| number |

### `height`

| TYPE   |
|:-------|
| number |


import { SCREENS } from 'shared/lib/constants/screens';

type IRootStackParamList = {
  [SCREENS.Home]: undefined,
  [SCREENS.Settings]: undefined

  [SCREENS.Core]: undefined
  [SCREENS.Calendar]: undefined
  [SCREENS.Utils]: undefined
  [SCREENS.Chart]: undefined

  [SCREENS.Typography]: undefined
  [SCREENS.Progress]: undefined
  [SCREENS.Popups]: undefined

  [SCREENS.LineChart]: undefined
  [SCREENS.BarChart]: undefined
}

export default IRootStackParamList

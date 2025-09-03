import {BarChart, IRenderHeader, IRenderSectionItem} from '@/shared/ui';
import {mockChartDataset} from '@/shared/lib/test/data/chart';
import RenderSectionItem from '@/widgets/Chart/ui/RenderSectionItem';
import RenderHeader from '@/widgets/Chart/ui/RenderHeader';
import SafeAreaContainer from '@/shared/ui/SafeAreaContainer';

const renderSectionItem: IRenderSectionItem = (
  {period, transition, state},
  index,
) => (
  <RenderSectionItem
    period={period}
    state={state}
    transition={transition}
    index={index}
  />
);

const renderHeader: IRenderHeader = headerData => (
  <RenderHeader header={headerData} />
);

const BarChartScreen = () => {
  return (
    <SafeAreaContainer>
      <BarChart
        dataset={mockChartDataset}
        renderHeader={renderHeader}
        renderSectionItem={renderSectionItem}
      />
    </SafeAreaContainer>
  );
};

export default BarChartScreen;

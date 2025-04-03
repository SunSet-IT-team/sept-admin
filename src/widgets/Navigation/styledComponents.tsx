import {styled} from '@mui/material/styles';
import MuiTabs from '@mui/material/Tabs';
import MuiContainer from '@mui/material/Container';
import MuiBox from '@mui/material/Box';
import MuiTab, {TabProps} from '@mui/material/Tab';
import {navigationWrapperStyles, tabsStyles, tabStyles} from './styles';
import {LinkProps} from 'react-router-dom';

// Добавляем поддержку component prop с TypeScript
type CustomTabProps = TabProps & {
    component?: React.ElementType;
    to?: LinkProps['to'];
};

export const NavigationWrapper = styled(MuiBox)(navigationWrapperStyles);
export const NavigationContainer = styled(MuiContainer)(tabsStyles);
export const NavigationTabs = styled(MuiTabs)(tabsStyles);
export const NavigationTab = styled(MuiTab)<CustomTabProps>(tabStyles);

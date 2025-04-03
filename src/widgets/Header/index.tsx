import {AppBar, Toolbar, Container} from '@mui/material';
import Profile from '../../feature/Profile';
import InfoList from '../../feature/InfoList';

/**
 * Шапка сайта
 */
export const Header = () => {
    return (
        <AppBar position="static" color="default" elevation={1}>
            <Container>
                <Toolbar sx={{justifyContent: 'space-between', py: 2}}>
                    <Profile />
                    <InfoList />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

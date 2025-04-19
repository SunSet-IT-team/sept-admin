import {StrictMode} from 'react';
import {Provider} from 'react-redux';
import {store} from './store';
import {AppRouter} from './routes/AppRoute';
import {ThemeProvider} from '@mui/material/styles';
import {appTheme} from './theme';
import {BrowserRouter} from 'react-router-dom';
import Static from './static/Static';
import {ToastContainer} from 'react-toastify';
import {QueryClientProvider} from '@tanstack/react-query';
import {queryClient} from './store/query';

function App() {
    return (
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={appTheme}>
                    <BrowserRouter>
                        <Provider store={store}>
                            <ToastContainer />
                            <Static />
                            <AppRouter />
                        </Provider>
                    </BrowserRouter>
                </ThemeProvider>
            </QueryClientProvider>
        </StrictMode>
    );
}

export default App;

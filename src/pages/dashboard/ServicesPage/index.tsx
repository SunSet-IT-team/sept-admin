import {Box} from '@mui/material';
import ServiceTable from '../../../widgets/dashboard/ServicesTable/ui';

/**
 * Страница услуг
 */
const ServicesPage = () => {
    return (
        <Box sx={{height: 500, width: '100%', mt: 3}}>
            <ServiceTable />
        </Box>
    );
};

export default ServicesPage;

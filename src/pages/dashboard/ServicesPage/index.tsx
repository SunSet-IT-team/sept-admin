import {Box} from '@mui/material';
import ServiceTable from '../../../widgets/dashboard/ServicesTable/ui';
import AddServiceForm from '../../../widgets/dashboard/AddServiceForm';

/**
 * Страница услуг
 */
const ServicesPage = () => {
    return (
        <Box sx={{height: 500, width: '100%', mt: 3}}>
            <AddServiceForm />
            <ServiceTable />
        </Box>
    );
};

export default ServicesPage;

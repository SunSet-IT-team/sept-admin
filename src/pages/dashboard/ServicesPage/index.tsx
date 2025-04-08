import ServiceTable from '../../../widgets/dashboard/ServicesTable/ui';
import AddServiceForm from '../../../widgets/dashboard/AddServiceForm';

/**
 * Страница услуг
 */
const ServicesPage = () => {
    return (
        <>
            <AddServiceForm />
            <ServiceTable />
        </>
    );
};

export default ServicesPage;

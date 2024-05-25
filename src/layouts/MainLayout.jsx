import PropTypes from 'prop-types';
import Sidebar from '../layouts/Sidebar/Sidebar';

const MainLayout = ({ children }) => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 m-14">
                {children}
            </div>
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;

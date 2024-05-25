import PropTypes from 'prop-types';


const SidebarItem = ({ icon, text, active = false, href, dropdownItems = null }) => {

    return (
        <li
            className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active
                ? 'bg-gradient-to-tr from-indigo-500 to-indigo-600 text-white'
                : 'hover:bg-primary/[0.1] text-gray-600'
                }`}
            aria-current={active ? 'page' : undefined}
        >
            <div className="flex items-center justify-center w-[30px]">{icon}</div>
            <a href={href} className={`overflow-hidden transition-all w-52 ml-3`}>
                {text}
            </a>


            {dropdownItems && (
                <ul className="ml-3 mt-2">
                    {dropdownItems.map((item, index) => (
                        <li key={index} className="my-1">
                            <a href={item.href} className="text-gray-600 hover:text-indigo-800">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
};

SidebarItem.propTypes = {
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
    active: PropTypes.bool,
    alert: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    href: PropTypes.string.isRequired,
    dropdownItems: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
        })
    ),
};

export default SidebarItem;
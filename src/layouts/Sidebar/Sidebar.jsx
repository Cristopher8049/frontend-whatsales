import { createContext } from 'react';
import logo from '../../assets/logo.png';
import profile from "../../assets/avatar.jpg"
import { menuItems } from '../../config/menuItems';
import SidebarItem from './SidebarItem';

export const SidebarContext = createContext();

const Sidebar = () => {
    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col bg-white border-r shadow-sm">
                <div className="p-6 pb-2 flex justify-between items-center mb-5">
                    <img src={logo} alt="Logo" className={`overflow-hidden transition-all h-[22px]`} />
                </div>


                <ul className="flex-1 px-3">
                    {menuItems.map((item, index) =>
                        item.href ? (
                            <SidebarItem
                                key={index}
                                icon={item.icon}
                                text={item.name}
                                alert={item.badge}
                                href={item.href}
                                dropdownItems={item.dropdownItems}
                            />
                        ) : (
                            <li key={index} className="my-2 text-gray-500">
                                {item.name}
                            </li>
                        )
                    )}
                </ul>
                <div className="border-t flex p-3 items-center justify-center">
                    <div className="w-10 h-10">
                        <img
                            src={profile}
                            alt="Profile"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                    <div
                        className={`flex justify-between items-center overflow-hidden transition-all 'w-52 ml-3' 
                            `}
                    >
                        <div className="leading-4">
                            <h4 className="font-semibold">Cristopher OConnor</h4>
                            <span className="text-xs text-gray-600">cristopher070404@gmail.com</span>
                        </div>
                    </div>
                </div>
            </nav>
        </aside>
    );
};

export default Sidebar;
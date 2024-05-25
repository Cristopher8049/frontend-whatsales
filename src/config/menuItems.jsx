import { PiSquaresFourDuotone, PiDevicesDuotone } from "react-icons/pi";
import { routes } from './routes';


export const menuItems = [
    {
        name: 'Dashboard',
        href: routes.dashboard,
        icon: <PiSquaresFourDuotone size={25} />
    },
    {
        name: 'Devices',
        href: routes.devices.dashboard,
        icon: <PiDevicesDuotone size={25} />
    },

]

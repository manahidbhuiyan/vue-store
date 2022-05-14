import Central from '../components/Central'
import Nav from '../components/Navbar'
import Inventory from '../Views/Inventory'
import ItemDetails from "../Views/ItemDetails";

export const routes = [
    {
      path: '/',
      component: Central
    },
    {
        path: '/nav',
        component: Nav
    },
    {
        name: 'inventory',
        path: '/inventory',
        component: Inventory
    },
    {
        name: 'item-details',
        path: '/item-details',
        component: ItemDetails
    }
]


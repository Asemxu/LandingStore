/*--------------------------------------------------------------------------------*/
/*                                  starter                                    */
/*--------------------------------------------------------------------------------*/
import FirstDashboard from '../views/starter/starter.jsx';
/*--------------------------------------------------------------------------------*/
/*                           Ui-components Dropdown                               */
/*--------------------------------------------------------------------------------*/
// import Alerts from '../views/ui-components/alert.jsx';
// import Badges from '../views/ui-components/badge.jsx';
// import Buttons from '../views/ui-components/button.jsx';
// import Cards from '../views/ui-components/cards.jsx';
// import LayoutComponent from '../views/ui-components/layout.jsx';
// import PaginationComponent from '../views/ui-components/pagination.jsx';
// import PopoverComponent from '../views/ui-components/popover.jsx';
// import TooltipComponent from '../views/ui-components/tooltip.jsx';

var ThemeRoutes = [
  {
    path: '/Inicio',
    name: 'Inicio',
    icon: '/home.svg',
    component: FirstDashboard
  },
  {
    path: '/Casacas',
    name: 'Casacas',
    icon: '/sweater-3.svg',
    component: FirstDashboard
  },
  {
    path: '/Pantalones',
    name: 'Pantalones',
    icon: '/pants-1.svg',
    component: FirstDashboard
  },
  {
    path: '/Poleras',
    name: 'Poleras',
    icon: '/sweater-with-hood-and-pocket.svg',
    component: FirstDashboard
  },
  {
    path: '/Camisas',
    name: 'Camisas',
    icon: '/blouse-1.svg',
    component: FirstDashboard
  },
  {
    path: '/Polos',
    name: 'Polos',
    icon: '/t-shirt-1.svg',
    component: FirstDashboard
  },
  {
    path: '/Blusas',
    name: 'Blusas',
    icon: '/blouse.svg',
    component: FirstDashboard
  },
  {
    path: '/Bermudas',
    name: 'Bermudas',
    icon: '/shorts.svg',
    component: FirstDashboard
  },/*
  {
    path: '/ui-components/layout',
    name: 'Layout',
    icon: 'mdi mdi-apps',
    component: LayoutComponent
  },
  {
    path: '/ui-components/pagination',
    name: 'Pagination',

    icon: 'mdi mdi-priority-high',
    component: PaginationComponent
  },
  {
    path: '/ui-components/popover',
    name: 'Popover',

    icon: 'mdi mdi-pencil-circle',
    component: PopoverComponent
  },
  {
    path: '/ui-components/tooltip',
    name: 'Toltips',

    icon: 'mdi mdi-image-filter-vintage',
    component: TooltipComponent
  },*/
  {
    path: '/',
    pathTo: '/Inicio',
    name: 'Inicio',
    redirect: true
  }
];
export default ThemeRoutes;



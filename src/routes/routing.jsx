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
    icon: 'mdi mdi-adjust',
    component: FirstDashboard
  },
  {
    path: '/Casacas',
    name: 'Casacas',
    icon: 'mdi mdi-adjust',
    component: FirstDashboard
  },
  {
    path: '/Pantalones',
    name: 'Pantalones',
    icon: 'mdi mdi-comment-processing-outline',
    component: FirstDashboard
  },
  {
    path: '/Poleras',
    name: 'Poleras',
    icon: 'mdi mdi-arrange-send-backward',
    component: FirstDashboard
  },
  {
    path: '/Camisas',
    name: 'Camisas',
    icon: 'mdi mdi-toggle-switch',
    component: FirstDashboard
  },
  {
    path: '/Polos',
    name: 'Polos',
    icon: 'mdi mdi-credit-card-multiple',
    component: FirstDashboard
  },
  {
    path: '/Blusas',
    name: 'Blusas',
    icon: 'mdi mdi-credit-card-multiple',
    component: FirstDashboard
  },
  {
    path: '/Bermudas',
    name: 'Bermudas',
    icon: 'mdi mdi-credit-card-multiple',
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



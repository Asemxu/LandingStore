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
    path: '/Home',
    name: 'Dashboard',
    icon: 'mdi mdi-adjust',
    component: FirstDashboard
  },
  {
    path: '/Home',
    name: 'Alerts',
    icon: 'mdi mdi-comment-processing-outline',
    component: FirstDashboard
  },
  {
    path: '/Home',
    name: 'Badges',
    icon: 'mdi mdi-arrange-send-backward',
    component:  FirstDashboard
  },
  {
    path: '/Home',
    name: 'Buttons',
    icon: 'mdi mdi-toggle-switch',
    component:  FirstDashboard
  },
  {
    path: '/ui-components/card',
    name: 'Cards',
    icon: 'mdi mdi-credit-card-multiple',
    component:  FirstDashboard
  },
  {
    path: '/ui-components/layout',
    name: 'Layout',
    icon: 'mdi mdi-apps',
    component: FirstDashboard
  },
  {
    path: '/ui-components/pagination',
    name: 'Pagination',

    icon: 'mdi mdi-priority-high',
    component:  FirstDashboard
  },
  {
    path: '/ui-components/popover',
    name: 'Popover',

    icon: 'mdi mdi-pencil-circle',
    component: FirstDashboard
  },
  {
    path: '/',
    pathTo: '/Home',
    name: 'Dashboard',
    redirect: true
  }
];
export default ThemeRoutes;

import { NbMenuItem } from '@nebular/theme';
export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Enquêtes',
    icon: 'nb-bar-chart',
    link: '/inquiry',
    home: true,
    children: [
      {
        title: 'Nouveau',
        icon: 'nb-plus-circled',
        link: '/inquiry/new',
      },
      {
        title: 'Joindre une enquête',
        icon: 'nb-arrow-left',
        link: '/inquiry/reach',
      },
      {
        title: 'Quitter une enquête',
        icon: 'nb-arrow-right',
        link: '/inquiry/quit',
      }, 
      {
        title: 'Utilisateurs',
        icon: 'nb-person',
        link: '/inquiry/users',
        children: [
            {
              title: 'Nouveau',
              icon: 'nb-plus-circled',
              link: '/inquiry/users/new',
            },
            {
              title: 'Modifier',
              icon: 'nb-edit',
              link: '/inquiry/users/modify',
            },
        ],
      },       
    ],
  },  
  {
    title: 'Réglages',
    icon: 'nb-gear',
    link: '/settings',
    children: [
      {
        title: 'Compte',
        icon: 'nb-person',
        link: '/settings/account',
      },
      {
        title: 'Paramètres généraux',
        icon: 'nb-list',
        link: '/settings/global',
      },      
    ],
  },
  {
    title: 'Licence',
    icon: 'nb-help',
    link: '/licence',
    home: true,
  },   
];

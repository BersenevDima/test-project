import * as shared from '@/shared';

export const NAVIGATION = [
  {
    label: 'Home',
    route: shared.Paths.Catalog.path,
    getStyles: ({ isActive }) => ({
      fill: isActive ? shared.Colors.Orange : shared.Colors.White,
      stroke: 'none',
      color: isActive ? shared.Colors.Orange : shared.Colors.White,
    }),
  },
  {
    label: 'Payments',
    route: shared.Paths.Payments.path,
    getStyles: ({ isActive }) => ({
      fill: isActive ? shared.Colors.Orange : shared.Colors.White,
      stroke: 'none',
      color: isActive ? shared.Colors.Orange : shared.Colors.White,
    }),
  },
  {
    label: 'History',
    route: shared.Paths.History.path,

    getStyles: ({ isActive }) => ({
      fill: isActive ? shared.Colors.Orange : shared.Colors.White,
      stroke: 'none',
      color: isActive ? shared.Colors.Orange : shared.Colors.White,
    }),
  },
  {
    label: 'Analytics',
    route: shared.Paths.Analitics.path,
    getStyles: ({ isActive }) => ({
      fill: isActive ? shared.Colors.Orange : shared.Colors.White,
      stroke: 'none',
      color: isActive ? shared.Colors.Orange : shared.Colors.White,
    }),
  },
  {
    label: 'Chats ',
    route: shared.Paths.Chats.path,
    getStyles: ({ isActive }) => ({
      fill: isActive ? shared.Colors.Orange : shared.Colors.White,
      stroke: 'none',
      color: isActive ? shared.Colors.Orange : shared.Colors.White,
    }),
  },
];

import { Routes } from '@angular/router';
import { LogComponent } from './final/log/log.component';
import { MainComponent } from './final/main/main.component';
import { RegComponent } from './final/reg/reg.component';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [{
        path: '',
        redirectTo: 'reg',
        pathMatch: 'full',
      },{
        path: 'reg',
        component: RegComponent,
      },{
        path: 'log',
        component: LogComponent,
      },{
        path: 'main',
        component: MainComponent,
      },{
        path: '',
        component: AdminLayoutComponent,
        children: [{
            path: '',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },{
            path: 'components',
            loadChildren: './components/components.module#ComponentsModule'
        },{
            path: 'forms',
            loadChildren: './forms/forms.module#Forms'
        },{
            path: 'tables',
            loadChildren: './tables/tables.module#TablesModule'
        },{
            path: 'maps',
            loadChildren: './maps/maps.module#MapsModule'
        },{
            path: 'charts',
            loadChildren: './charts/charts.module#ChartsModule'
        },{
            path: 'calendar',
            loadChildren: './calendar/calendar.module#CalendarModule'
        },{
            path: '',
            loadChildren: './userpage/user.module#UserModule'
        },{
            path: '',
            loadChildren: './timeline/timeline.module#TimelineModule'
        },{
            path: '',
            loadChildren: './widgets/widgets.module#WidgetsModule'
        }]
        },{
            path: '',
            component: AuthLayoutComponent,
            children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
        }
];
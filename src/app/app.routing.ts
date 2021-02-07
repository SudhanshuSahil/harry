import { Routes } from '@angular/router';
import { LogComponent } from './final/log/log.component';
import { MainComponent } from './final/main/main.component';
import { RegComponent } from './final/reg/reg.component';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { Lvl1p1Component } from './final/task/lvl1p1/lvl1p1.component';
import { Lvl1p2Component } from './final/task/lvl1p2/lvl1p2.component';
import { Lvl2Component } from './final/task/lvl2/lvl2.component';
import { Lvl3Component } from './final/task/lvl3/lvl3.component';
import { Lvl4p1Component } from './final/task/lvl4p1/lvl4p1.component';
import { Lvl4p2Component } from './final/task/lvl4p2/lvl4p2.component';
import { Lvl5Component } from './final/task/lvl5/lvl5.component';
import { Lvl6p1Component } from './final/task/lvl6p1/lvl6p1.component';
import { Lvl6p2Component } from './final/task/lvl6p2/lvl6p2.component';
import { Lvl6p3Component } from './final/task/lvl6p3/lvl6p3.component';
import { Lvl7p1Component } from './final/task/lvl7p1/lvl7p1.component';
import { Lvl7p2Component } from './final/task/lvl7p2/lvl7p2.component';
import { Quiz1Component } from './final/task/quiz1/quiz1.component';
import { Quiz2Component } from './final/task/quiz2/quiz2.component';
import { LeaderboardComponent } from './final/leaderboard/leaderboard.component';
import { Lvl2CopyComponent } from './final/lvl2-copy/lvl2-copy.component';
import { Lvl7p1CopyComponent } from './final/lvl7p1-copy/lvl7p1-copy.component';
<<<<<<< HEAD
import { Q2Component } from './final/q2/q2.component';
import { Q1Component } from './final/q1/q1.component';
=======
import { SellComponent } from './final/sell/sell.component';
import { MarketComponent } from './final/market/market.component';
import { InvestComponent } from './final/invest/invest.component';
>>>>>>> c5dbac6e3f82887a72649acf5a15b0d2e9878882

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
          path: 'leaderboard',
          component: LeaderboardComponent,
      },{
          path: 'lvl1p1',
          component: Lvl1p1Component,
      },{
          path: 'lvl1p2',
          component: Lvl1p2Component,
      },{
          path: 'lvl2',
          component: Lvl2CopyComponent,
      },{
          path: 'lvl3',
          component: Lvl3Component,
      },{
          path: 'lvl4p1',
          component: Lvl4p1Component,
      },{
          path: 'lvl4p2',
          component: Lvl4p2Component,
      },{
          path: 'lvl5',
          component: Lvl5Component,
      },{
          path: 'lvl6p1',
          component: Lvl6p1Component,
      },{
          path: 'lvl6p2',
          component: Lvl6p2Component,
      },{
          path: 'lvl6p3',
          component: Lvl6p3Component,
      },{
          path: 'lvl7p1',
          component: Lvl7p1CopyComponent,
      },{
          path: 'lvl7p2',
          component: Lvl7p2Component,
      },{
          path: 'quiz1',
          component: Q1Component,
      },{
          path: 'quiz2',
          component: Q2Component,
      },{
          path: 'sell',
          component: SellComponent,
      },{
          path: 'invest',
          component: InvestComponent,
      },{
          path: 'market',
          component: MarketComponent,
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

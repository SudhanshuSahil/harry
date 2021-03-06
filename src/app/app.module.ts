import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http' 
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent }   from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import { RegComponent } from './final/reg/reg.component';
import { LogComponent } from './final/log/log.component';
import { MainComponent } from './final/main/main.component';
import { LeaderboardComponent } from './final/leaderboard/leaderboard.component';
import { Lvl2CopyComponent } from './final/lvl2-copy/lvl2-copy.component';
import { Lvl7p1CopyComponent } from './final/lvl7p1-copy/lvl7p1-copy.component';
import { Q2Component } from './final/q2/q2.component';
import { Q1Component } from './final/q1/q1.component';
import { SellComponent } from './final/sell/sell.component';
import { InvestComponent } from './final/invest/invest.component';
import { Quiz1Component } from './final/task/quiz1/quiz1.component';
import { Quiz2Component } from './final/task/quiz2/quiz2.component';
import { MarketComponent } from './final/market/market.component';


@NgModule({
    imports:      [
        BrowserAnimationsModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes,{
          useHash: true
        }),
        NgbModule,
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        HttpClientModule,
        CommonModule,
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent,
        LogComponent,
        MainComponent,
        LeaderboardComponent,
        Lvl2CopyComponent,
        Lvl7p1CopyComponent,
        Q2Component,
        Q1Component,
        SellComponent,
        InvestComponent,
        RegComponent,
        Quiz1Component,
        Quiz2Component,
        MarketComponent,
    ],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }

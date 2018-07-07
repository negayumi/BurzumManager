import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

//pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { SummaryPageModule } from '../pages/summary/summary.module';
import { RosterPageModule } from '../pages/roster/roster.module';
import { AddrosterPage } from '../pages/addroster/addroster';
import { OverviewPageModule } from '../pages/overview/overview.module';
import { RaidsPageModule } from '../pages/raids/raids.module';
import { SettingsPageModule } from '../pages/settings/settings.module';
import { TabsPageModule } from '../pages/tabs/tabs.module';
import { EventPageModule } from '../pages/event/event.module';

//other
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BlizzardApiService } from '../services/blizzardapi.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AddrosterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SummaryPageModule,
    RosterPageModule,
    OverviewPageModule,
    RaidsPageModule,
    SettingsPageModule,
    TabsPageModule,
    HttpModule,
    EventPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AddrosterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BlizzardApiService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

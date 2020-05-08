import { HomeLayoutComponent } from './main/layouts/home-layout/home-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './admin/components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserProfileComponent } from './admin/user-profile/user-profile.component';
import { TableListComponent } from './admin/table-list/table-list.component';
import { TypographyComponent } from './admin/typography/typography.component';
import { IconsComponent } from './admin/icons/icons.component';
import { MapsComponent } from './admin/maps/maps.component';
import { NotificationsComponent } from './admin/notifications/notifications.component';
import { UpgradeComponent } from './admin/upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './admin/layouts/admin-layout/admin-layout.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    HomeLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

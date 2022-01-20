import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { SectionOrderComponent } from './sections/section-order/section-order.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { BarChartComponent } from './charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './charts/line-chart/line-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { ChartsModule } from 'ng2-charts';
import { ServerComponent } from './sections/section-health/server/server.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SalesDataService } from './services/sales-data.service';
import { ServerService } from './services/server.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionHealthComponent,
    SectionOrderComponent,
    SectionSalesComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent,
    ServerComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    SalesDataService,
    ServerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

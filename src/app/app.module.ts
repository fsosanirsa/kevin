import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { GraphQLModule } from './graphl/graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    GraphQLModule,
    AppRoutingModule,
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { SortByPosPipe } from './sort-by-pos.pipe';
import { ItemsService } from './items-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    SortByPosPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

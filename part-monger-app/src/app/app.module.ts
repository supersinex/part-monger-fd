import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PartListComponent } from './part-list/part-list.component';
import { ApiWrapperService } from './api-wrapper.service';
import {HttpClientModule} from '@angular/common/http';
import { TruncatePipe } from './truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PartListComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }

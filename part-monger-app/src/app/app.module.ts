import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PartListComponent } from './part-list/part-list.component';
import { PartDetailsComponent } from './part-details/part-details.component';
import { ApiWrapperService } from './api-wrapper.service';
import {HttpClientModule} from '@angular/common/http';
import { TruncatePipe } from './truncate.pipe';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AddPartComponent } from './add-part/add-part.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/part-list', pathMatch: 'full' },
  { path: 'part-list', component: PartListComponent },
  { path: 'add-part', component: AddPartComponent },
  { path: 'part-details/:id', component: PartDetailsComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    PartListComponent,
    PartDetailsComponent,
    TruncatePipe,
    AddPartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [ApiWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }

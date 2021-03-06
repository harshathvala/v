import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FromsModule, ReactiveFromsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GitSearchService } from './git-search.service';
import { GitSearchComponent } from './git-search/git-search.component';
import { RouterModule, Routes } from '@angular/router';
const appRoutes: Routes = [
  { path: '', 
    component: HomePageComponent 
  },
  { path: 'search',      
    component: GitSearchComponent,
    data: { 
      title: 'Git Search' 
    } 
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    FromsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [GitSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

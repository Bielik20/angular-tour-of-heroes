import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule, DatepickerModule } from 'ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './_helpers/in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './_services/hero.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { QuestsComponent } from './quests/quests.component';
import { QuestService } from './_services/quest.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroesComponent,
    HeroSearchComponent,
    QuestsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
    AlertModule.forRoot(),
    DatepickerModule.forRoot(),
  ],
  providers: [HeroService, QuestService],
  bootstrap: [AppComponent]
})

export class AppModule { }

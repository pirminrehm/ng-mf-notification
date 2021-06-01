import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdDirective } from './dev-host/ad.directive';
import { DevHostComponent } from './dev-host/dev-host.component';
import { SingleComponentsModule } from './single-components/single-components.module';

@NgModule({
  declarations: [AppComponent, DevHostComponent, AdDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SingleComponentsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

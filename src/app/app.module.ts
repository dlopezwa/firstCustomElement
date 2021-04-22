import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [],
  entryComponents: [MessageComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const customElement = createCustomElement(MessageComponent, { injector });
    customElements.define('app-message', customElement);
}

ngDoBootstrap() {

}
}

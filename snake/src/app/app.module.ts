import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import { FormControl, FormGroup } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxSnakeModule } from 'ngx-snake';
import { HeaderComponent } from './firstpage/header/header.component';
import { FormComponent } from './firstpage/form/form.component';
import { SnakeComponent } from './secondpage/snake/snake.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FormComponent, SnakeComponent],
  imports: [BrowserModule, NgxSnakeModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// import {MatIconModule} from '@angular/material/icon'
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgxSnakeModule } from 'ngx-snake';
import { HeaderComponent } from './firstpage/header/header.component';
import { FormComponent } from './firstpage/form/form.component';
import { SnakeComponent } from './secondpage/snake/snake.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FormComponent, SnakeComponent],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
      { path: 'login', component: FormComponent },
      { path: 'login/:color', component: FormComponent },
      { path: 'snake-game', component: SnakeComponent },
      { path: 'snake-game/:color', component: SnakeComponent },
      { path: '**', redirectTo: 'login' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
import { HighscoresComponent } from './highscores/highscores.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, FormComponent, SnakeComponent, HighscoresComponent],
  imports: [
    BrowserModule,
    NgxSnakeModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: FormComponent },
      { path: 'snake-game', component: SnakeComponent },
      { path: '**', redirectTo: 'login' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

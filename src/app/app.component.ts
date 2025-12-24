import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent,HttpClientModule,FormsModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectangular2';
}

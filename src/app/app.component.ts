import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { HttpClientModule } from '@angular/common/http';  
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

/* angular material*/
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent,HttpClientModule,FormsModule,ReactiveFormsModule,MatButtonModule,MatCardModule,MatInputModule,MatSelectModule,MatTableModule,MatDialogModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projectangular2';
}

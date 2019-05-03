import { NgModule } from '@angular/core';
import {MatToolbarModule,MatInputModule, MatButtonModule, MatCardModule, MatSelectModule, MatOptionModule, MatCheckboxModule, MatAutocompleteModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material'


@NgModule({
  imports:[MatToolbarModule, MatInputModule, MatButtonModule, MatCardModule, MatSelectModule, MatOptionModule, MatCheckboxModule,MatAutocompleteModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule],
  exports:[MatToolbarModule, MatInputModule, MatButtonModule, MatCardModule, MatSelectModule, MatOptionModule, MatCheckboxModule,MatAutocompleteModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule]
})

export class SharedModules{}
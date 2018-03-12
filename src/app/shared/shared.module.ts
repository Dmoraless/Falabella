import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ HeaderComponent, FooterComponent ],
  exports:      [ HeaderComponent, FooterComponent,
                  CommonModule, FormsModule ]
})
export class SharedModule { }
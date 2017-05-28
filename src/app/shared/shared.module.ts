import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [CommonModule, FormsModule, TopNavbarComponent],
    declarations: [TopNavbarComponent]
})
export class SharedModule { }

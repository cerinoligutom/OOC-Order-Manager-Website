import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent, UserService } from './index';


@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [CommonModule, FormsModule, LoginComponent],
    declarations: [LoginComponent],
    providers: [UserService],
})
export class CoreModule { }

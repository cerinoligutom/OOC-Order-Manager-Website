import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { LoginComponent, TopNavbarComponent, UserService } from './index';


@NgModule({
    imports: [SharedModule],
    exports: [SharedModule, LoginComponent, TopNavbarComponent],
    declarations: [LoginComponent, TopNavbarComponent],
    providers: [UserService],
})
export class CoreModule { }

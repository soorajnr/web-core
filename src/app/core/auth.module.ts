import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './reducer/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './comp/login/login.component';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forRoot({ count: authReducer }),
    EffectsModule.forRoot([]),
  ]
})
export class AuthModule { }

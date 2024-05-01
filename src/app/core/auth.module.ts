import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginComponent } from './comp/login/login.component';
import { AuthEffects } from './effects/auth.effects';
import * as  fromLogin  from './reducer/auth.reducer';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonMaterialModule } from '../web-sharedLibs/common-material/common-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonMaterialModule,
    CommonModule,
    AuthRoutingModule,    
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromLogin.loginFeatureKey, fromLogin.authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
})
export class AuthModule { }

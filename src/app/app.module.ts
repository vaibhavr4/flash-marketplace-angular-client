import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import {FormsModule , ReactiveFormsModule} from "@angular/forms";

import { WhiteBoardComponent } from './white-board/white-board.component';

import {routing} from "./app.routing";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import {UserServiceClient} from "./services/user.service.client";
import { SearchListComponent } from './search-list/search-list.component';
import {SearchServiceClient} from "./services/search.service.client";
import {HttpModule} from "@angular/http";
import { ResultSectionComponent } from './result-section/result-section.component';
import { AdminComponent } from './admin/admin.component';
import {SectionServiceClient} from "./services/section.service.client";
import { PostAdComponent } from './post-ad/post-ad.component';
import { FileUploadTestComponent } from './file-upload-test/file-upload-test.component';
import {PostAdServiceClient} from "./services/postad.service.client.";
import { FileUploadModule } from 'ng2-file-upload';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { MyAdsComponent } from './my-ads/my-ads.component';
import { AdminAdControlComponent } from './admin-ad-control/admin-ad-control.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ViewMyadComponent } from './view-myad/view-myad.component';
import { MyAdsAdminComponent } from './my-ads-admin/my-ads-admin.component';
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from "angular4-social-login";

let config = new AuthServiceConfig([{
  id: GoogleLoginProvider.PROVIDER_ID,
  provider: new GoogleLoginProvider("971318108998-8u5hitd8isvf4ti9d8ajmpl8hnsqq144.apps.googleusercontent.com")
}]);
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    WhiteBoardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SearchListComponent,
    ResultSectionComponent,
    AdminComponent,
    PostAdComponent,
    FileUploadTestComponent,
    AdDetailsComponent,
    MyAdsComponent,
    AdminAdControlComponent,
    AdminProfileComponent,
    ViewMyadComponent,
    MyAdsAdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SocialLoginModule,
    FileUploadModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [
    UserServiceClient,
    SearchServiceClient,
    SectionServiceClient,
    PostAdServiceClient,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

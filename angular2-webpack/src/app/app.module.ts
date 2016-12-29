import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
import "./rxjs-extensions";
import {CommentComponent} from "./comment.component";
import {WelcomeComponent} from "./welcome.component";
import {AboutComponent} from "./about.component";
import {ArticleListComponent} from "./article.list.component";
import {ArticleDetailComponent} from "./article.detail.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        HttpModule,
    ],
    declarations: [
        AppComponent,
        CommentComponent,
        WelcomeComponent,
        AboutComponent,
        ArticleListComponent,
        ArticleDetailComponent
    ],
   // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
import {Routes, RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {CommentComponent} from "./comment.component";
import {WelcomeComponent} from "./welcome.component";
import {AboutComponent} from "./about.component";
import {ArticleListComponent} from "./article.list.component";
import {ArticleDetailComponent} from "./article.detail.component";

const appRoutes:Routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    }, {
        path: 'article',
        children: [
            {
                path: '',
                component: ArticleListComponent,
            }, {
                path: ':id',
                component: ArticleDetailComponent
            }
        ]
    }, {
        path: 'comment',
        component: CommentComponent
    }, {
        path: 'welcome',
        component: WelcomeComponent
    }, {
        path: 'about',
        component: AboutComponent
    }, {
        path: 'aaa/bbb/ccc',
        component: CommentComponent
    }, {
        path: '**',
        //redirectTo: 'welcome'
        component: CommentComponent
    }
];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
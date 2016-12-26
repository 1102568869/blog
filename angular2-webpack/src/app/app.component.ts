import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, NavigationStart} from "@angular/router";
//import 'bootstrap/dist/css/bootstrap.min.css';
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
    private current_path:string;
    private route_navs:string[] = [];
    private sub:any;

    constructor(private route:Router) {
        this.current_path = "/welcome";
    }

    ngOnInit() {
        this.sub = this.route.events.filter(e=>e instanceof NavigationStart).subscribe(param=> {
            this.current_path = ( param.url == "" || param.url == "/" ) ? "/welcome" : decodeURI(param.url);
            this.route_navs = this.current_path.split("/").filter(path => path.length > 0);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
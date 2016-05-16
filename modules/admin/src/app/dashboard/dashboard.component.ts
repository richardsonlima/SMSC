import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {Component} from "@angular/core";
import {TranslatePipe, TranslateService} from "ng2-translate/ng2-translate";
import {CORE_DIRECTIVES} from "@angular/common";

import {Customers} from "customers/customers.component";
import {Finances} from "finances/finances.component";
import {DLRTraffic} from "dlrtraffic/dlrtraffic.component";
import {SMSTraffic} from "smstraffic/smstraffic.component";

@Component({
    selector: 'dashboard',
    providers: [],
    templateUrl: 'app/components/dashboard/dashboard.html',
    styles: [
        require('./dashboard.scss')
    ],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    pipes: [TranslatePipe]
})

@Routes([
    { path: '/smstraffic', component: SMSTraffic },
    { path: '/dlrtraffic', component: DLRTraffic },
    { path: '/finances', component: Finances },
    { path: '/customers', component: Customers }
])

export class Dashboard {

    constructor(public translate:TranslateService) {
    }

}
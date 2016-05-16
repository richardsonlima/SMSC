import {Routes, ROUTER_DIRECTIVES} from "@angular/router";
import {Component} from "@angular/core";
import {TranslatePipe, TranslateService} from "ng2-translate/ng2-translate";
import {CORE_DIRECTIVES} from "@angular/common";

import {Monitoring} from 'monitoring/monitoring.component';
import {Carriers} from 'carriers/carriers.component';
import {Routing} from 'routing/routing.component';
import {Prices} from 'prices/prices.component';
import {MCCMNC} from 'mccmnc/mccmnc.component';
import {SMPP} from 'smpp/smpp.component';
import {API} from 'api/api.component';

@Component({
    selector: 'gsm',
    providers: [],
    templateUrl: 'app/components/gsm/gsm.html',
    styles: [
        require('./gsm.scss')
    ],
    directives: [ROUTER_DIRECTIVES, CORE_DIRECTIVES],
    pipes: [TranslatePipe]
})

@Routes([
    { path: '/monitoring', component: Monitoring },
    { path: '/carriers', component: Carriers },
    { path: '/routing', component: Routing },
    { path: '/prices', component: Prices },
    { path: '/mccmnc', component: MCCMNC },
    { path: '/smpp', component: SMPP },
    { path: '/api', component: API }
])

export class GSM {

    constructor(public translate:TranslateService) {
    }

}
import {Component} from '@angular/core';
import {RoutingGrid} from './directives/routing-grid';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import {BreadcrumbService} from '../breadcrumb/breadcrumb.component.ts';

@Component({
    selector: 'routing',
    templateUrl: 'app/components/routing/routing.html',
    styles: [
        require('./routing.scss')
    ],
    providers: [BreadcrumbService],
    directives: [RoutingGrid, BreadcrumbService],
    pipes: [TranslatePipe]
})
export class Routing {

    constructor(public translate: TranslateService,
                public breadcrumb: BreadcrumbService) {}

    ngOnInit() {

    }

}
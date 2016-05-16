import {Component} from '@angular/core';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import {BreadcrumbService} from '../breadcrumb/breadcrumb.component.ts';

@Component({
    selector: 'dlrtraffic',
    templateUrl: 'app/components/dlrtraffic/dlrtraffic.html',
    styles: [
        require('./dlrtraffic.scss')
    ],
    providers: [BreadcrumbService],
    directives: [BreadcrumbService],
    pipes: [TranslatePipe]
})
export class DLRTraffic {

    constructor(public translate: TranslateService,
                public breadcrumb: BreadcrumbService) {}

    ngOnInit() {

    }

}
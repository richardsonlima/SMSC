import {Component} from '@angular/core';
import {TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import {BreadcrumbService} from '../breadcrumb/breadcrumb.component.ts';

@Component({
	selector: 'finances',
	templateUrl: 'app/components/finances/finances.html',
	styles: [
		require('./finances.scss')
	],
	providers: [BreadcrumbService],
	directives: [BreadcrumbService],
	pipes: [TranslatePipe]
})
export class Finances {

	constructor(public translate:TranslateService,
				public breadcrumb: BreadcrumbService) {
	}

	ngOnInit() {

	}

}
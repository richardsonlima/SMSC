/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';
import { RouteConfig, Router } from '@angular/router-deprecated';

import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate';

import { AppState } from './app.service';
import { Home } from './home';
import { RouterActive } from './router-active';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app',
    pipes: [TranslatePipe],
    providers: [],
    directives: [RouterActive],
    encapsulation: ViewEncapsulation.None,
    styles: [
        require('normalize.css'),
        `html, body{
      height: 100%;
      background: #F4FAFA;
    }
    button.active{
      background: #fff;
      color: #009688;
    }
    button.active:hover{
      color: #fff;
    }
    .fill{
      flex: 1 1 auto;
    }
    .app-state{
      margin: 15px;
      flex: 1;
    }
    .home{
      flex: 1;
    }
    md-content{
      display: flex;
      flex-direction: column;
      height: 100%;
    }
    footer{
      flex: 0 0 60px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #fff;
    }`
    ],
    template: require('./app.html')
})
@RouteConfig([
    { path: '/', name: 'Index', component: Home, useAsDefault: true },
    { path: '/home', name: 'Home', component: Home },
    // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
    { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
    angularclassLogo = 'assets/img/angularclass-avatar.png';
    loading = false;
    name = 'SMSC';
    url = 'http://smsc.io';

    constructor(public appState: AppState,
                public translate: TranslateService) {

        let userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(de|en|ru)/gi.test(userLang) ? userLang : 'en';

        // this language will be used as a fallback when a
        // translation isn't found in the current language
        translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use(userLang);
    }

    ngOnInit() {
        console.log('Initial App State', this.appState.state);
    }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */

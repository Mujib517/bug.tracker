import { Component, Input } from '@angular/core';


@Component({
    selector: 'home-component',
    template: `<h1>{{data}}</h1>`
})
export class HomeComponent {
    @Input() data;
}
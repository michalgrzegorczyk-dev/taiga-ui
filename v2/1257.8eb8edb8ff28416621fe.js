(window.webpackJsonp=window.webpackJsonp||[]).push([[1257],{fnJO:function(n,e,s){"use strict";s.r(e),e.default='<tui-range\n    id="range-with-key-steps"\n    new\n    size="m"\n    class="range"\n    [min]="min"\n    [max]="max"\n    [keySteps]="keySteps"\n    [steps]="2 * segments"\n    [segments]="segments"\n    [(ngModel)]="value"\n></tui-range>\n\n<div class="ticks-labels">\n    <span *ngFor="let label of ticksLabels">{{ label }}</span>\n</div>\n\n<p class="tui-space_top-12 tui-space_bottom-0">\n    Control value:\n    <output for="range-with-key-steps">\n        <code>{{ value | json }}</code>\n    </output>\n</p>\n'}}]);
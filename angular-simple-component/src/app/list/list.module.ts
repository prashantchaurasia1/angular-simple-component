
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRouterModule } from './list.module.routing';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
@NgModule({
	imports: [
		CommonModule,
		ListRouterModule,
		TableModule,
		ButtonModule
	],
	exports: [
		ListComponent
	],
	declarations: [ListComponent]
})
export class ListModule { }
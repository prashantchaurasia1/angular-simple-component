import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http'; 

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//import {TableModule} from 'primeng/table';
//import { FormsModule } from '@angular/forms';

/*custom imports*/
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';                 //api


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		//TableModule,
		//AccordionModule,
		//FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

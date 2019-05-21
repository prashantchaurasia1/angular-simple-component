
import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	constructor() { }

	
    userInfo: any[] = [
        {
            id : "Mark001",
            name: "Mark",
            gender: "M",
            age: 19
        },
        {
            id : "Allice001",
            name: "Allice",
            gender: "M",
            age: 14
        },
        {
            id : "Alex001",
            name: "Alex",
            gender: "M",
            age: 16
        },
        {
            id : "Simphy001",
            name: "Simphy",
            gender: "F",
            age: 14
        },
        {
            id : "Mariana001",
            name: "Mariana",
            gender: "F",
            age: 18
        },
        {
            id : "Jacob001",
            name: "Jacob",
            gender: "M",
            age: 16
        },
        {
            id : "Athiya001",
            name: "Athiya",
            gender: "M",
            age: 15
        }
    ];

    cols: any[];
    public showInitilContent = true;
	ngOnInit() {
		this.cols = [
            { field: 'id',  header: 'User Id' },
            { field: 'name', header: 'User Name' },
            { field: 'gender',header: 'User Gender' },
            { field: 'age',header: 'User Gender' }
        ];
	}    

    contentButton() {
        this.showInitilContent = !this.showInitilContent;
    }
}

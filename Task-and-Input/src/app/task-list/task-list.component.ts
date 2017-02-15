import { Component, OnInit } from '@angular/core';
import { IDS } from '../Id'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})

export class TaskListComponent {
  
	ids = IDS;
  constructor() { }

  ngOnInit() {

  }

 

}

import { Component, OnInit, Input } from '@angular/core';
import { Id } from '../Id';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit { 
  @Input() id: Id;
  constructor() { }

  ngOnInit() {

  }

  
}

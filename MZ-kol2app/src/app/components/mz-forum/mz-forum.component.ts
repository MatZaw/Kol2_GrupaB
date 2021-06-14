import { Component, OnInit } from '@angular/core';
import {MZDataService} from "../../services/mz-data.service";

@Component({
  selector: 'app-mz-forum',
  templateUrl: './mz-forum.component.html',
  styleUrls: ['./mz-forum.component.css']
})
export class MZForumComponent implements OnInit {

  public items$: any;

  constructor(private service: MZDataService) { }

  ngOnInit(): void {
  }

  getAll(){
    this.service.getAll().subscribe(response => {this.items$ = response; });
  }
}

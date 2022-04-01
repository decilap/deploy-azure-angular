import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baskest',
  templateUrl: './baskest.component.html',
  styleUrls: ['./baskest.component.scss']
})
export class BaskestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { console.log("ngOnInit");
  }

}

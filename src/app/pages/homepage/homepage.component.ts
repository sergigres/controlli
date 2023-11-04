import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GlobalConstants } from 'src/app/core/constants';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: [ './homepage.component.scss' ]
})
export class HomePageComponent implements OnInit {
  
  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle(GlobalConstants.siteTitle);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalConstants } from 'src/app/core/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent {

  constructor(private router: Router) {
  }


  title = GlobalConstants.siteTitle;
}

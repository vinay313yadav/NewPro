import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public authService: AuthService,  private router: Router) { }

  ngOnInit() {
  }


  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['']);
  }
}

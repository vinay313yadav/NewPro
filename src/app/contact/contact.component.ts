import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public authService: AuthService,  private router: Router,) { }

  ngOnInit() {
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['']);
  }

}

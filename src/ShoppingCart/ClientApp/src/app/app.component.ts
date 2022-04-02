import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  title = 'app';
  user: any;

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    debugger
    this.userService.getUserInfo()
      .subscribe((r: any) => {
        debugger
        if (r.ok) {
          this.user = r.data;
        }
      });
  }

}

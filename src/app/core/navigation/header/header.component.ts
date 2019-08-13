import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter();
  title: string;

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private router: Router,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.getTitle().subscribe(
      appTitle => this.title = appTitle
    );
  }

  onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('login');
  }

}

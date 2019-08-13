import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      const cards = [
        {
          title: 'Rules management',
          cols: 1,
          rows: 1,
          icon: 'settings_ethernet',
          link: '/',
          buttons: [
            { name: 'Add rule chain', link: '#' },
          ]
        },
        {
          title: 'Customer management',
          cols: 1,
          rows: 1,
          icon: 'supervisor_account',
          link: '/',
          buttons: [
            { name: 'Add customer', link: '#' },
          ]
        },
        {
          title: 'Asset management',
          cols: 1,
          rows: 1,
          icon: 'domain',
          link: '/',
          buttons: [
            { name: 'Add asset', link: '#' },
          ]
        },
        {
          title: 'Device management',
          cols: 1,
          rows: 1,
          icon: 'devices_other',
          link: '/',
          buttons: [
            { name: 'Add device', link: '#' },
          ]
        },
        {
          title: 'Entity management',
          cols: 1,
          rows: 1,
          icon: 'view_quilt',
          link: '/',
          buttons: [
            { name: 'Add entity', link: '#' },
          ]
        }
      ];

      if (matches) {
        return cards;
      }

      return cards;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.appService.setTitle('Home');
  }

}

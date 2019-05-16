import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nyx-footer',
  templateUrl: `
	<span class="created-by">Created with ♥ by <b><a href="https://akveo.com" target="_blank">Nyx - Embedded Intelligence</a></b> 2019</span>
    <div class="socials">
      <a href="#" target="_blank" class="ion ion-social-github"></a>
      <a href="#" target="_blank" class="ion ion-social-facebook"></a>
      <a href="#" target="_blank" class="ion ion-social-twitter"></a>
      <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
	`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

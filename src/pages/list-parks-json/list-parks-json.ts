import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@IonicPage()
@Component({
  selector: 'page-list-parks-json',
  templateUrl: 'list-parks-json.html'
})
export class ListParksJsonPage {
  public items: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient
  ) {
    this.getData();
  }

  getData() {
    let url = 'https://jsonplaceholder.typicode.com/photos';
    let data: Observable<any> = this.http.get(url);
    data.subscribe(result => {
      this.items = result;
    });
  }
}

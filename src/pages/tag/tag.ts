import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { PostPage } from '../post/post';
import { PchatPage } from '../pchat/pchat';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the TagPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tag',
  templateUrl: 'tag.html',
})
export class TagPage {
tab1Root = ChatPage;
tab2Root = PostPage;
tab3Root = PchatPage;
username: string = '';
topping: string = '';
flight: string = '';
myDate: string = '';
myTime:string = '';
keyChat: string= '';
work: string='1';
  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
  if(this.work === '1'){
  this.username = this.navParams.get('username');
  this.topping = this.navParams.get('topping');
  this.flight = this.navParams.get('flight');
  this.myDate = this.navParams.get('myDate');
  this.myTime = this.navParams.get('myTime');
  this.keyChat = this.topping+this.flight+this.myDate+this.myTime;
  console.log(this.username);
  if('true') {
    // all cool
    this.navCtrl.push(ChatPage, {
        username: this.username,
        topping: this.topping,
        flight: this.flight,
        myDate: this.myDate,
        myTime: this.myTime
    });
   this.db.object('/info/'+ this.keyChat).set({
    username: this.username,
    topping: this.topping,
    flight: this.flight,
    myDate: this.myDate,
    myTime: this.myTime
});
}
}
this.work='2';
}
ionViewDidLoad() {
  console.log('ionViewDidLoad TagPage');
}
}

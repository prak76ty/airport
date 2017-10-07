import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
* Generated class for the ChatPage page.
*
* See http://ionicframework.com/docs/components/#navigation for more info
* on Ionic pages and navigation.
*/
//@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  username: string = '';
  topping: string = '';
  flight: string = '';
  myDate: string = '';
  myTime: string = '';
  message: string = '';
  keyChat: string = '';
  _chatSubscription;
  messages: object[] = [];

  constructor(public db: AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
      this.username = this.navParams.get('username');
      this.topping = this.navParams.get('topping');
      this.flight = this.navParams.get('flight');
      this.myDate = this.navParams.get('myDate');
      this.myTime = this.navParams.get('myTime');

      console.log(this.username);
      this.keyChat = this.topping+this.flight+this.myDate+this.myTime;
      this._chatSubscription = this.db.list('/chat').subscribe( data => {
        this.messages = data;
      });
    }

    sendMessage() {
      this.db.object('/chat/'+this.keyChat).set({
        username: this.username,
        message: this.message
      }).then( () => {
        // message is sent
      }).catch( () => {
        // some error. maybe firebase is unreachable
      });
      this.message = '';
    }

    ionViewDidLoad() {
      this.db.object('/chat/'+this.keyChat).set({
        specialMessage: true,
        message: `${this.username} has joined the room`
      });
    }

    ionViewWillLeave(){
      this._chatSubscription.unsubscribe();
      this.db.object('/chat/'+this.keyChat).set({
        specialMessage: true,
        message: `${this.username} has left the room`
      });
    }
  }

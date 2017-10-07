import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PchatPage } from './pchat';

@NgModule({
  declarations: [
    PchatPage,
  ],
  imports: [
    IonicPageModule.forChild(PchatPage),
  ],
})
export class PchatPageModule {}

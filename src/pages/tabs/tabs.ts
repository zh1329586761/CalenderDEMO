import { TixingPage } from './../tixing/tixing';
import { LianxirenPage } from './../lianxiren/lianxiren';
import { ShixiangPage } from './../shixiang/shixiang';
import { DaifaPage } from './../daifa/daifa';
import { MubanPage } from './../muban/muban';
import { Component } from '@angular/core';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MubanPage;
  tab2Root = DaifaPage;
  tab3Root = ShixiangPage;
  tab4Root = LianxirenPage;
  tab5Root = TixingPage;

  constructor() {

  }
}

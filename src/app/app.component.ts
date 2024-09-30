import { Component, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  serverElements = [{type: 'server', name:'TestServer', content:'Just a test!'}];

  onServerAdded(serverData: {serverName: string, serverContent: string} ) {

    console.log(window);
    if(serverData.serverContent.length > 0 && serverData.serverContent.length > 0){
    this.serverElements.unshift({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
    if(blueprintData.serverContent.length > 0 && blueprintData.serverContent.length > 0){
    this.serverElements.unshift({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Changed!';
  }
}

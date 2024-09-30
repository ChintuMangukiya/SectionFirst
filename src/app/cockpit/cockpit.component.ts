import { Component, ElementRef, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrl: './cockpit.component.css'
})
export class CockpitComponent implements OnChanges{

  @Output('sCreated') serverCreated= new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('class') savaare: ElementRef;

  nameInput = '';
  newServerContent = '';

  ngOnChanges(changes: SimpleChanges): void {
    console.log('uoooooooooooooooooooooooooo');
  }

  onAddServer(nameInput:HTMLInputElement):void {
    if(nameInput.value.length > 0 && this.newServerContent.length > 0){

    this.serverCreated.emit({
       serverName:nameInput.value,
       serverContent:this.savaare.nativeElement.value
    });
  }
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    if(this.newServerContent.length > 0 && nameInput.value.length > 0){
      this.blueprintCreated.emit({
        serverName: nameInput.value,
        serverContent:this.savaare.nativeElement.value
      })
  }
  }
}
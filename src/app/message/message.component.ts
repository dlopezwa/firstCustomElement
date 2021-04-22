import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  @Input() answer: string | undefined;
  @Input() name: string | undefined;

  title = 'Angular Elements';
  
  constructor() { }
  
  ngOnInit(): void {
  }

}

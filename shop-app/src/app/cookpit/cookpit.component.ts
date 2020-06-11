import { Component, OnInit , EventEmitter, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cookpit',
  templateUrl: './cookpit.component.html',
  styleUrls: ['./cookpit.component.css']
})
export class CookpitComponent implements OnInit {
  @Output('serveradd') serverCreated = new EventEmitter<{ name: string , content: string  }>();
  name = '';
  serverContent = '';
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput) {
    this.serverCreated.emit({ name: nameInput.value, content: this.serverContent})
  }

}

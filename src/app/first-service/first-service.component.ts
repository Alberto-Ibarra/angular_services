import { Component } from '@angular/core';
import { MyService } from '../my-service.service';

@Component({
  selector: 'app-first-service',
  templateUrl: './first-service.component.html',
  styleUrls: ['./first-service.component.css']
})
export class FirstServiceComponent {
  constructor(private myService: MyService){}
    ngOnInit(): void{
      const data = this.myService.getData()
      console.log(data);
    }
  
}

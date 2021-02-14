import { Component, OnInit } from '@angular/core';
import { CounterService} from '../services/counter.service'



@Component({
  selector: 'app-lapa1',
  templateUrl: './lapa1.component.html',
  styleUrls: ['./lapa1.component.scss']
})
export class Lapa1Component implements OnInit {

  constructor(public counterService: CounterService) { }

  ngOnInit(): void {
  }
public increment(val){
  this.counterService.counter += val;
}

}

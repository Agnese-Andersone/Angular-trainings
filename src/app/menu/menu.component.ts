import {Component} from "@angular/core" 
import {CounterService} from '../services/counter.service';
@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss']
})
export class MenuComponent{
    constructor(public counterService: CounterService){}
    
}

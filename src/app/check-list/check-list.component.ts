import { Component, Input, OnInit, Injector } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.css']
})
export class CheckListComponent implements OnInit {

  @Input() observer: Observable<Array<any>>;

  @Input() localStorageServiceType: any;

  public items: Array<any>;

  public progress: number = 0;

  private localStorageService: any;

  constructor(private injector: Injector) { }

  ngOnInit() {
    this.localStorageService = this.injector.get(this.localStorageServiceType);
    
    this.observer.do((result)=> {
      this.items = result;
      this.setProgress();
    }).subscribe();
  }

  public updateLocalStorage(): void {  
    this.setProgress();  
    this.localStorageService.setItems(this.items);
  }

  private setProgress(): void {
    const total = this.items.length;
    const numCompleted = this.items.filter((item)=> { return item.complete }).length;

    if(numCompleted) {
      this.progress = ( numCompleted / total ) * 100;
    } else {
      this.progress = 0;
    }
  }
}
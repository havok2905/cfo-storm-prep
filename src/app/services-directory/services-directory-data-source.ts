import SERVICE_ITEMS from '../common/seeds/services';
import { ServiceItem } from '../common/entities/service-item';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';

export class ServicesDirectoryDataSource extends DataSource<any> {
  connect(): Observable<ServiceItem[]> {
    return Observable.of(SERVICE_ITEMS);
  }

  disconnect(): void {}
}

import { ServiceItem } from './service-item';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';

export class ServicesDirectoryDataSource extends DataSource<any> {
  connect(): Observable<ServiceItem[]> {
    return Observable.of([
      new ServiceItem('Foo Service', '111-111-1111', 'foo@service.com', 'http://www.google.com'),
      new ServiceItem('Bar Service', '222-222-2222', 'bar@service.com', 'http://www.google.com'),
      new ServiceItem('Baz Service', '333-333-3333', 'baz@service.com', 'http://www.google.com')
    ]);
  }

  disconnect(): void {}
}

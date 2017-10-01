import { ServiceItem } from '../common/entities/service-item';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { DataSource } from '@angular/cdk/collections';

export class ServicesDirectoryDataSource extends DataSource<any> {
  connect(): Observable<ServiceItem[]> {
    return Observable.of([
      new ServiceItem('Orlando’s Emergency Radio Station 1650AM', 'N/A', 'N/A', 'http://www.cityoforlando.net/emergency/'),
      new ServiceItem('Orlando OEM', '321.235.5438', 'N/A', 'http://www.cityoforlando.net/emergency/contacts/')
    ]);
  }

  disconnect(): void {}
}

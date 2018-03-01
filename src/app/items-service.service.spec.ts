import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ItemsService } from './items-service.service';
import { Observable } from 'rxjs/Observable';
import { ItemList } from './intrerfaces';

import 'rxjs/add/observable/of';

describe('ItemsService', () => {
  let http: HttpTestingController;
  let service: ItemsService;
  const expectedData = [
    {Thumbnail: {}, S: '1', P: '2', N: '3', V: '4', Pos: 5},
    {Thumbnail: {}, S: '8', P: '9', N: '10', V: '11', Pos: 12}
  ];
  const itemsServiceStub = {
    getItems() {
      return Observable.of(expectedData);
    }
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [ItemsService, { provide: ItemsService, useValue: itemsServiceStub }]
    });

    service = TestBed.get(ItemsService);
    http = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have return object', () => {
    service.getItems().subscribe((data) => {
      expect(data).toEqual(expectedData);
    });

  });
});

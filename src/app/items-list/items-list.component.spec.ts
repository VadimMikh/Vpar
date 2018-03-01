import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListComponent } from './items-list.component';
import { ItemsService } from '../items-service.service';

class MockItemsService {
    getItems() {
        return {};
    }
}

describe('ItemsListComponent', () => {
  let component: ItemsListComponent;
  let fixture: ComponentFixture<ItemsListComponent>;
  let service: MockItemsService;

  /*beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsListComponent ]
    })
    .compileComponents();
  }));*/

  beforeEach(() => {
    service = new MockItemsService;
    TestBed.configureTestingModule({
      declarations: [ ItemsListComponent ],
      providers: [
        { provide: ItemsService, useValue: service }
      ]
    });
    fixture = TestBed.createComponent(ItemsListComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

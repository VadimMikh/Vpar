import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsListComponent } from './items-list.component';
import { ItemsService } from '../items-service.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sortByPos'})
class MockPipe implements PipeTransform {
  private len;
  private sorting(a, b) {
    if (parseInt(a.Pos, 10) !== parseInt(a.Pos, 10)) {
      a.Pos = this.len;
    }
    if (parseInt(b.Pos, 10) !== parseInt(b.Pos, 10)) {
      b.Pos = this.len;
    }
    return (parseInt(a.Pos, 10) - parseInt(b.Pos, 10));
  }

  transform(value: any, args?: any): any {
    if (!value) {
      return;
    } else {
      this.len = value.length;
      return  value.sort(this.sorting.bind(this));
    }
  }
}

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
      declarations: [ ItemsListComponent, MockPipe ],
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

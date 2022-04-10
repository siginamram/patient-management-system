import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenusLeftComponent } from './menus-left.component';

describe('MenusLeftComponent', () => {
  let component: MenusLeftComponent;
  let fixture: ComponentFixture<MenusLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenusLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenusLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

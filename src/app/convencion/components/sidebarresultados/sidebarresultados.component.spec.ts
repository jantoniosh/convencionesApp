import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarresultadosComponent } from './sidebarresultados.component';

describe('SidebarresultadosComponent', () => {
  let component: SidebarresultadosComponent;
  let fixture: ComponentFixture<SidebarresultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarresultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarresultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

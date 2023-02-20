import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureHeaderComponent } from './azure-header.component';

describe('AzureHeaderComponent', () => {
  let component: AzureHeaderComponent;
  let fixture: ComponentFixture<AzureHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AzureHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AzureHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

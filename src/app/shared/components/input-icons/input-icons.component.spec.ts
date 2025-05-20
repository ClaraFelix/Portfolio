import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputIconsComponent } from './input-icons.component';

describe('InputIconsComponent', () => {
  let component: InputIconsComponent;
  let fixture: ComponentFixture<InputIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [InputIconsComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(InputIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

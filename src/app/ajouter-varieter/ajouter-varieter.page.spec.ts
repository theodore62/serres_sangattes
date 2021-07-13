import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AjouterVarieterPage } from './ajouter-varieter.page';

describe('AjouterVarieterPage', () => {
  let component: AjouterVarieterPage;
  let fixture: ComponentFixture<AjouterVarieterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterVarieterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AjouterVarieterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

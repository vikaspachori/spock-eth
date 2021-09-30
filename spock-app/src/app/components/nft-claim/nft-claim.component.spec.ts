import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftClaimComponent } from './nft-claim.component';

describe('NftClaimComponent', () => {
  let component: NftClaimComponent;
  let fixture: ComponentFixture<NftClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftClaimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, TestBed } from '@angular/core/testing';
import { ProductsModule } from './products.module';

describe('ProductsModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ProductsModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(ProductsModule).toBeDefined();
  });
});

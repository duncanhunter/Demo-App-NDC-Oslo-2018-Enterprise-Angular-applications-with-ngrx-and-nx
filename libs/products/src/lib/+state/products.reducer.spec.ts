import { LoadProductsFail } from './products.actions';
import { productsReducer, initialState } from './products.reducer';

describe('productsReducer', () => {
  it('should work', () => {
    const action: LoadProductsFail = new LoadProductsFail({});
    const actual = productsReducer(initialState, action);
    expect(actual).toEqual({});
  });
});

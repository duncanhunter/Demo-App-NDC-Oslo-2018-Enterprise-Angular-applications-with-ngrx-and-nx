import { AuthLoaded } from './auth.actions';
import { authReducer, initialState } from './auth.reducer';

describe('authReducer', () => {
  it('should work', () => {
    const action: AuthLoaded = new AuthLoaded({});
    const actual = authReducer(initialState, action);
    expect(actual).toEqual({});
  });
});

import { LoginFail } from './auth.actions';
import { authReducer, initialState } from './auth.reducer';

describe('authReducer', () => {
  it('should work', () => {
    const action: LoginFail = new LoginFail({});
    const actual = authReducer(initialState, action);
    expect(actual).toEqual({});
  });
});

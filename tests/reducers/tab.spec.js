import tab from '../../reducers/tab';
import { DOCUMENT, TESTER, UPDATE_FORM, TESTER_RESPONSE, SET_TAB_TYPE } from '../../constants';

describe('tab reducer Test >', () => {

  it('No paramater', () => {
    expect(
      tab(undefined, {})
    ).to.eql(DOCUMENT);
  });

  it('SET_TAB_TYPE', () => {
    expect(
      tab({}, {
        type: SET_TAB_TYPE,
        tabType: TESTER,
      })
    ).to.eql(TESTER);
  });

  it('UPDATE_FORM', () => {
    expect(
      tab(TESTER, {
        type: UPDATE_FORM,
      })
    ).to.eql(TESTER);
  });

  it('TESTER_RESPONSE', () => {
    expect(
      tab(TESTER, {
        type: TESTER_RESPONSE,
      })
    ).to.eql(TESTER);
  });
});

import * as Actions from '../../redux/actions/gameActions';
import { ACTION_TYPE } from '../../redux/actionTypes';

const clearDataResult = { type: ACTION_TYPE.CLEAR_DATA }
const successResult = { type: ACTION_TYPE.SUCCESS,  data: 10}
const errorResult = { type: ACTION_TYPE.ERROR }
const updateTimeTakenResult = { type: ACTION_TYPE.TIME_TAKEN,  data: 120}


describe('game Action', () => {
    it('should match with expected values', () => {
      expect(Actions.clearData()).toEqual(clearDataResult);
      expect(Actions.successResult(10)).toEqual(successResult);
      expect(Actions.errorResult()).toEqual(errorResult);
      expect(Actions.updateTimeTaken(120)).toEqual(updateTimeTakenResult);
    });
});
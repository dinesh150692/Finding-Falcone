import * as Actions from '../../redux/actions/planetActions';
import { ACTION_TYPE } from '../../redux/actionTypes';

const planetList = [
    {name: 'A', distance: '200'},
    {name: 'B', distance: '200'}
];
const selectedPlanetResult = { type: ACTION_TYPE.UPDATE_SELECTED_PLANET,  id: 0, data: 'Planet'}
const planetListresult = { 
    type: ACTION_TYPE.UPDATE_PLANET_LIST,  
    data: planetList
}

describe('planet Action', () => {
    it('should match with expected values', () => {
        expect(Actions.updatePlanetSelection(0,'Planet')).toEqual(selectedPlanetResult);
        expect(Actions.updatePlanetList(planetList)).toEqual(planetListresult);
    });
});
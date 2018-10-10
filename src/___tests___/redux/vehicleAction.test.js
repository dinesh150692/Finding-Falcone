import * as Actions from '../../redux/actions/vehicleActions';
import { ACTION_TYPE } from '../../redux/actionTypes';

const vehicleList = [
    {name: 'V1', speed: '10'},
    {name: 'V2', speed: '5'}
];
const selectedVehicleList = { type: ACTION_TYPE.UPDATE_SELECTED_VEHICLE,  id: 0, data: 'V1'}
const vehicleListresult = { 
    type: ACTION_TYPE.UPDATE_VEHICLE_LIST,  
    data: vehicleList
}

describe('planet Action', () => {
    it('should match with expected values', () => {
        expect(Actions.updateVehicleSelection(0,'V1')).toEqual(selectedVehicleList);
        expect(Actions.updateVehicleList(vehicleList)).toEqual(vehicleListresult);
    });
});
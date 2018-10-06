/* Library Imports */
import React from 'react';
import { connect } from 'react-redux';

/* Action Imports */
import { updateTimeTaken } from '../../redux/actions/gameActions';
/* Style Imports */
import './style.css';

const Timer = (props) => {
    let timeTaken = 0; 
    let planetDistanceList = [];
    props.planetSelectionList.map((item)=> {
        planetDistanceList.push(props.planetMap[item]); 
        return item;
    });
    props.vehicleSelectionList.map((item,index)=> {
        timeTaken += planetDistanceList[index]/props.vehicleMap[item]
        return item;
    })
    !isNaN(timeTaken) && timeTaken !== 0 && props.updateTimeTaken(timeTaken)
    return (
       <div className="timerContainer">
           Time Taken: {timeTaken}
       </div>
    )
}

/** 
 *  Mapping the state to desired props for the component
 */
function mapStateToProps(state, ownProps) {
    return {
        planetMap:  state.planetDetails.planetMap,
        vehicleMap: state.vehicleDetails.vehicleMap,
        planetSelectionList: state.planetDetails.planetSelectionList,
        vehicleSelectionList: state.vehicleDetails.vehicleSelectionList
    };
}

export default connect(mapStateToProps, {updateTimeTaken})(Timer);
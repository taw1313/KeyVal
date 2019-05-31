import React, {Component} from 'react';
import KeyValueComponent from '../KeyValueComponent';
import { MAX_NUM_KEYVALUES } from '../../lib/constants';
import AlertModal from '../Modals/AlertModal';

import styles from './ParentComponent.scss';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataArray: [ {key: '', value: ''} ],
      showAlertModal: false,
      alertMessage:[]
    };

    //
    // bind methods for use in JSX child component
    //
    this.addKeyValue = this.addKeyValue.bind(this);
    this.updateKeyValue = this.updateKeyValue.bind(this);
    this.deleteKeyValue = this.deleteKeyValue.bind(this);
    this.submitData = this.submitData.bind(this);
    this.closeAlertModal = this.closeAlertModal.bind(this);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  addKeyValue() {
    let dataArray = this.state.dataArray;
    //
    // don't exceed maximum number of key value pairs allowed
    //
    if ( dataArray.length < MAX_NUM_KEYVALUES ) {
      let dataObj = {key: '', value: ''};
      dataArray.push(dataObj);
      this.setState({dataArray});
    }
    else {
      let alertMessage = [
        `ALERT - Max number of ${MAX_NUM_KEYVALUES} key value pairs have been created.`,
        `Please remove a key value pair or contact DragonChain support to increase this limit.`
      ];
      this.setState({showAlertModal: true, alertMessage});
    }
  }
  
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  updateKeyValue(index, objKey, objValue) {
    let dataArray = this.state.dataArray;
    dataArray[index][objKey] = objValue;
    this.setState({dataArray});
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  submitData() {
    let dataArray = this.state.dataArray;
    ///////////////////////////////////////////////////////////////////////////
    //  To allow for key's and values to be empty and 
    //  to allow key's to be non-unique the following will not be used
    //
    //  let outputObj = {}
    //  dataArray.forEach( (d) => {
    //    outputObj[d.key] = d.value
    //  })
    //  console.log( JSON.stringify(outputObj, null, 2) )
    //
    ///////////////////////////////////////////////////////////////////////////

    //
    // I will resort to using a simple for loop to avoid last comma in output string of each key value pair
    //
    let len = dataArray.length;
    console.log(`\`\`\`\n{`) ;
    for (let i=0; i<len-1; i++) {
      console.log(`\t ${dataArray[i].key}: ${dataArray[i].value},`);
    }
    console.log(`\t ${dataArray[len-1].key}: ${dataArray[len-1].value}`);
    console.log(`}\n\`\`\``) ;

  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  deleteKeyValue(index) {
    let dataArray = this.state.dataArray;
    //
    // only add key values if not equal to the user selected index
    //
    dataArray = dataArray.filter( (d,i) => i !== index );
    this.setState({dataArray});
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  closeAlertModal() {
    this.setState({showAlertModal: false, alertMessage: []});
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div data-test-hook="ParentComponentPage" className={styles.parentComponent}>
        <AlertModal
            closeModal={this.closeAlertModal}
            modalIsOpen={this.state.showAlertModal}
            message={this.state.alertMessage}
        />
        <header>
          <p>{this.constructor.name}</p>
        </header>
        <KeyValueComponent
          dataArray={this.state.dataArray}
          add={this.addKeyValue}
          update={this.updateKeyValue}
          delete={this.deleteKeyValue}
          submit={this.submitData}
        />
      </div>
    );
  }
}

export default ParentComponent;
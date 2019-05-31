import React, {Component} from 'react';
import styles from './KeyValueComponent.scss';
import { KEY_MAX_LENGTH, VALUE_MAX_LENGTH } from '../../lib/constants';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class KeyValueComponent extends Component {
  constructor(props) {
    super(props);

    //
    // bind methods for use in JSX child component
    //
    this.handleChange = this.handleChange.bind(this);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // added this method to make it easier to see what event targets are being used
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  handleChange(index) {
    this.props.update(index, event.target.name, event.target.value);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  render() {
    return (
      <div data-test-hook="KeyValueComponent" className={styles.keyvalueComponent}>
        <header>
            <p>
              {this.constructor.name}
              <span>
                <button className={styles.headerButtonCell} onClick={this.props.add}>+</button>
              </span>
            </p>
        </header>
        <div className={styles.overflowTable} >
        <table>
          <tbody>
            {this.props.dataArray.map( (d, i) => (
              <tr key={`row${i}`}>
                <td className={styles.keyvalueCell}>
                  <input type='text' placeholder='Key' name='key' maxLength = {KEY_MAX_LENGTH}
                         value={d.key} onChange={() => this.handleChange(i)}
                  />
                </td>
                <td className={styles.keyvalueCell}>
                  <input type='text' name='value' placeholder='Value'  maxLength = {VALUE_MAX_LENGTH}
                         value={d.value} onChange={() => this.handleChange(i)}
                  />
                </td>
                <td className={styles.removeCell} onClick={() => this.props.delete(i)}>x</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <footer>
          <button className={styles.submitButton} onClick={this.props.submit}>Submit</button>
        </footer>
      </div>
    );
  }
}

export default KeyValueComponent;
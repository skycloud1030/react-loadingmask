/*compomentMask.jsx */
var React = require('react');
var ReactDOM = require('react-dom');
import {LoadingMask} from 'react-loadingmask';
require('../css/loadingMask.css');

class CompomentMask extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        <LoadingMask state={true}>
          <div style={{width:500,height:300}}>
            Compoment You want to display
          </div>
        </LoadingMask>

      </div>
    )
  }
};

ReactDOM.render(
  <CompomentMask/>,
  document.getElementById('CompomentMask')
);

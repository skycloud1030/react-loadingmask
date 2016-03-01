/* loadingMask.jsx*/
var React = require('react');
var ReactDOM = require('react-dom');
var classNames = require('classnames');

export class LoadingMask extends React.Component{
  constructor(props) {
    super(props);
    this.state=({
      width:300,
      height:300,
      classSet:"loadingMask"
    })
  }
  _autoWidth(){
    let {children}=this.props;
    var domNode = ReactDOM.findDOMNode(this.refs[0]);
    if(domNode){
      this.setState({width:domNode.offsetWidth,height:domNode.offsetHeight});
    }
  }
  componentDidMount(){
    this._autoWidth();
  }
  componentWillReceiveProps(){
    this._autoWidth();
  }
  render(){
    let {state,children}=this.props;
    let {width,height,classSet}=this.state;
    let newChildren;

    if(children){
      newChildren= React.cloneElement(children, {ref: 0});
    }
    else{
      classSet=classNames(classSet,"global");
      width="100%";
      height="100%";
    }

    if(state==false){
      return(
        <div>
          {children}
        </div>
      );
    }
    else{
      return(
        <div>
          <div className={classSet} style={{width:width,height:height}}>
            <div className="backColor"></div>
            <div className="backGif"></div>
          </div>
          {newChildren}
        </div>

      );
    }

  }
};
LoadingMask.defaultProps={state:false,children:null};
LoadingMask.propTypes={children:React.PropTypes.object};

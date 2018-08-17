import React from "react";
import ReactDOM from "react-dom";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import "./index.css"; // User Customize

/**
 * Font awesonme Component
 */
const Icon = ({ type, className = "", style = {} } = {}) => (
  <i className={`fas fa-${type} ${className}`} style={style} />
);

const fontSize = 24;
const Spin = <i className="fas fa-sync-alt rc-loading-spin" style={{ fontSize }} />;
const Rocket = <i className="fas fa-rocket rc-loading-move-right" style={{ fontSize, color: "red" }} />;
const RocketHor = <Icon type="rocket" className="animation-horizon" style={{ fontSize, color: "#120338" }} />;
const styles = { marginBottom: 20, height: 150 };

class Demo extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  onLoadingSwitch = () => {
    this.setState({ loading: !this.state.loading });
  };
  render() {
    const { loading } = this.state;
    return (
      <div className="container">
        <Row>
          <Col span={6} style={{ marginTop: 20 }}>
            <Button style={{ marginBottom: 20 }} bsStyle="primary" onClick={this.onLoadingSwitch}>
              {loading ? "Close Loading" : "Open Loading"}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <LoadingMask loading={loading} loadingText={"Default"}>
              <div style={styles}>Compoment You want to display</div>
            </LoadingMask>
          </Col>
          <Col span={6}>
            <LoadingMask className="customize" loading={loading} loadingText={"Customize"} indicator={Spin}>
              <div style={styles}>Customize with font awesome</div>
            </LoadingMask>
          </Col>
          <Col span={12}>
            <LoadingMask loading={loading} loadingText={"More animation"} indicator={Rocket}>
              <div style={styles}>More animation, Control by CSS</div>
            </LoadingMask>
          </Col>
          <Col span={12}>
            <LoadingMask
              className="customize"
              loading={loading}
              loadingText={"Customize animation"}
              indicator={RocketHor}
            >
              <div style={styles}>Your own animation</div>
            </LoadingMask>
          </Col>
        </Row>
      </div>
    );
  }
}

/**
 *  Boostrap Component
 */
const Row = props => <div className="row">{props.children}</div>;
const Col = props => (
  <div className={`col-${props.span}`} style={props.style}>
    {props.children}
  </div>
);
const Button = props => {
  const { style, bsStyle, onClick } = props;
  const className = bsStyle ? `btn btn-${bsStyle}` : "btn";
  return (
    <button style={style} className={className} onClick={onClick}>
      {props.children}
    </button>
  );
};

ReactDOM.render(<Demo />, document.getElementById("index"));

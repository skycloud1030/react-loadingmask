import React from "react";
import ReactDOM from "react-dom";
import LoadingMask from "react-loadingmask";
import "react-loadingmask/dist/react-loadingmask.css";
import "./index.css";

const Spin = <i className="fas fa-sync-alt fa-spin" style={{ fontSize: 24 }} />;
const margin = { marginBottom: 20 };
class Demo extends React.Component {
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
      <div>
        <button onClick={this.onLoadingSwitch} style={margin}>
          {loading ? "Close Loading" : "Open Loading"}
        </button>
        <LoadingMask loading={loading} loadingText={"Default"}>
          <div style={{ ...margin, width: 500, height: 300 }}>Compoment You want to display</div>
        </LoadingMask>

        <LoadingMask loading={true} loadingText={"Customize"} indicator={Spin} className="customize">
          <div style={{ width: 500, height: 300 }}>Customize with font awesome</div>
        </LoadingMask>
      </div>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById("index"));

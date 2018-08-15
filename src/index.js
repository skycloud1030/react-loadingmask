import React from "react";
/**
 * A spinner component for displaying loading state of a page or a section
 */
export default class LoadingMask extends React.PureComponent {
  static defaultProps = {
    loading: false,
    text: "",
    prefixCls: "rc-loading",
    className: "",
    style: {},
    indicator: <span className="rc-loading-icon-default" />
  };
  render() {
    const { loading, prefixCls, indicator } = this.props;
    const { loadingText } = this.props;
    const loadingCss = loading ? prefixCls : `${prefixCls}-hide`;
    const { className, style } = this.props;
    const css = `${className} ${loadingCss}`;

    return (
      <div className={css} style={style}>
        <div className={`${prefixCls}-mask`}>
          <div className={`${prefixCls}-icon`}>{indicator}</div>
          <div className={`${prefixCls}-text`}>{loadingText}</div>
        </div>
        <div className={`${prefixCls}-content`}>{this.props.children}</div>
      </div>
    );
  }
}

import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

/* react-loadingmask.jsx*/
export class LoadingMask extends React.Component {
    static defaultProps = {
        loading: false,
        loadingText: "loading..."
    }
    render() {
        let {className}=this.props;
        let loadingCss = (this.props.loading)? "loading-mask": "loading-mask-hide";
        loadingCss = classNames(className,loadingCss);
        return (
            <div className={loadingCss}>
                <div className="loading-mask-show">
                    <span/>
                    <div className="loading-mask-show-text">
                        {this.props.loadingText}
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
};

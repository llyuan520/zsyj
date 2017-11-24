import React, { Component } from 'react';
import enquire from 'enquire.js';
import {Header,Footer} from '../src/components';
import {Banner, Content, Service,Partner, About} from '../src/models/home';

import '../src/models/less/antMotion_style.less';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isMode: false,
            show: !window.location.port,
        };
    }
    componentDidMount() {
        // 适配手机屏幕;
        this.enquireScreen((isMode) => {
            this.setState({ isMode });
        });
        // dva 2.0 样式在组件渲染之后动态加载，导致滚动组件不生效；线上不影响；
        if (window.location.port) {
            // 样式 build 时间在 200-300ms 之间;
            setTimeout(() => {
                this.setState({
                    show: true,
                });
            }, 500);
        }
    }

    enquireScreen = (cb) => {
        /* eslint-disable no-unused-expressions */
        enquire.register('only screen and (min-width: 320px) and (max-width: 767px)', {
            match: () => {
                cb && cb(true);
            },
            unmatch: () => {
                cb && cb();
            },
        });
        /* eslint-enable no-unused-expressions */
    }

    render() {

        const children = [
          <Header id="home" key="1" isMode={this.state.isMode} />,
          <Banner id="banner" key="2" isMode={this.state.isMode} />,
          <Content id="content" key="3" isMode={this.state.isMode} />,
          <Service id="service" key="4" isMode={this.state.isMode} style={{height:'800px'}} />,
          <Partner id="partner" key="5" isMode={this.state.isMode} style={{height:'950px', background: 'rgba(51, 51, 51, 0.95)'}} />,
          <About id="about" key="6" isMode={this.state.isMode} style={{height:'500px'}} />,
          <Footer id="footer" key="7" isMode={this.state.isMode} />,
        ];

        return (
            <div className="templates-wrapper">
                {this.state.show && children}
            </div>

        );
    }
}

export default App;

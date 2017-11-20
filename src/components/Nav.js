/**
 * author       : liuliyuan
 * createTime   : 2017/11/18 16:45
 * description  :
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import { Menu } from 'antd';
import logo from './img/logo.png'
import tel from './img/tel.png'

const Item = Menu.Item;

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneOpen: false,
        };
    }

    phoneClick = () => {
        this.setState({
            phoneOpen: !this.state.phoneOpen,
        });
    }

    render() {
        const props = { ...this.props };
        const isMode = props.isMode;
        delete props.isMode;
        const navData = [{
            label: '首页',
            value:'banner',
        },{
            label: '税务服务',
            value:'service',
        },{
            label: '合作客户',
            value:'partner',
        },{
            label: '关于我们',
            value:'about',
        }];
        const navChildren = navData.map((item, i)=>(<Item key={item.value}>{item.label} </Item>))

        return (<TweenOne
            component="header"
            animation={{ opacity: 0, type: 'from' }}
            {...props}
        >
            <TweenOne
                className={`${this.props.className}-logo`}
                animation={{ x: -30, type: 'from', ease: 'easeOutQuad' }}
                id={`${this.props.id}-logo`}
            >
                <a title="中税盈佳" href="/" className="logo"><img alt="中税盈佳" width="100%" src={logo} /></a>
                <img alt="客服电话" className="tel" width="100%" src={tel} /> <strong>0755-82542569</strong>
            </TweenOne>
            {isMode ? (<div
                className={`${this.props.className}-phone-nav${this.state.phoneOpen ? ' open' : ''}`}
                id={`${this.props.id}-menu`}
            >
                <div
                    className={`${this.props.className}-phone-nav-bar`}
                    onClick={() => {
                        this.phoneClick();
                    }}
                >
                    <em />
                    <em />
                    <em />
                </div>
                <div
                    className={`${this.props.className}-phone-nav-text`}
                >
                    <Menu
                        defaultSelectedKeys={['banner']}
                        mode="inline"
                        theme="dark"

                    >
                        {navChildren}
                    </Menu>
                </div>
            </div>) : (<TweenOne
                className={`${this.props.className}-nav`}
                animation={{ x: 30, type: 'from', ease: 'easeOutQuad' }}
            >
                <Menu
                    mode="horizontal" defaultSelectedKeys={['banner']}
                    id={`${this.props.id}-menu`}
                    onSelect={
                        ({item,key,selectedKeys})=>{
                            if (key) {
                                // 找到锚点
                                let anchorElement = document.getElementById(key);
                                console.log(anchorElement);
                                // 如果对应id的锚点存在，就跳转到锚点
                                if(anchorElement) { anchorElement.scrollIntoView(); }
                            }
                        }

                    }
                >
                    {navChildren}
                </Menu>
            </TweenOne>)}
        </TweenOne>);
    }
}

Header.propTypes = {
    className: PropTypes.string,
    dataSource: PropTypes.object,
    id: PropTypes.string,
};

Header.defaultProps = {
    className: 'header0',
};

export default Header;

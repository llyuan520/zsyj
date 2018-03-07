/**
 * author       : liuliyuan
 * createTime   : 2017/11/18 17:20
 * description  :
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import { Tabs } from 'antd';

import banner1 from '../less/img/partner/banner1-1.jpg'
import banner2 from '../less/img/partner/banner1-2.jpg'

const TabPane = Tabs.TabPane;

class Partner extends Component {

    static propTypes = {
        id: PropTypes.string,
        className: PropTypes.string,
    };

    static defaultProps = {
        className: 'partner',
    };

    state = {
        show: 0,
    };

    onChange = (key) => {
        this.setState({ show: parseInt(key,0) })
    }

    getBlockChildren = (item, i) => {
        const tag = item.tag;
        const img = item.img;
        return (
            <TabPane
                key={i}
                tab={(<span
                    className={`${this.props.className}-tag`}
                    id={`${this.props.id}-tagBlock${i}`}
                    style={{color:'#fff'}}
                >
          <i><img alt={tag.tag} src={tag.icon} width="100%" /></i>
                    {tag.tag}
        </span>)}
            >
                <TweenOne.TweenOneGroup
                    enter={{ y: 30, delay: 300, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
                    leave={null}
                    component=""
                >
                    {this.state.show === i && (
                        <div key="content">
                            {img}
                        </div>)}
                </TweenOne.TweenOneGroup>
            </TabPane>
        );
    };

    render() {
        const props = { ...this.props };
        delete props.isMode;
        const childrenData = [
            {
                tag: { tag: '地产业', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
                img: <img alt="合作客户列表" src={banner1} />,
            },
            {
                tag: { tag: '其他行业', icon: 'https://zos.alipayobjects.com/rmsportal/XnzcslQvRoBHMHd.svg' },
                img: <img alt="合作客户列表" src={banner2} />,
            }
        ];
        const tabsChildren = childrenData.map(this.getBlockChildren);
        return (
            <div
                {...props}
                className={`content-template-wrapper ${props.className}-wrapper`}
            >
                <OverPack
                    className={`content-template ${props.className}`}
                    location={props.id}
                >
                    <TweenOne
                        animation={{ y: '+=30', opacity: 0, type: 'from' }}
                        component="h1"
                        key="h1"
                        reverseDelay={200}
                        id={`${props.id}-title`}
                    >
                        <font color="#fff">合作<span style={{color:'#2257d1'}}>客户</span></font>
                    </TweenOne>
                    <TweenOne
                        animation={{ y: '+=30', opacity: 0, type: 'from', delay: 100 }}
                        component="p"
                        key="p"
                        reverseDelay={100}
                        id={`${props.id}-content`}
                    >
                        <font color="#fff">以下企业为近期服务的部分合作客户，排名随机展示不分前后</font>
                    </TweenOne>
                    <TweenOne.TweenOneGroup
                        key="tabs"
                        enter={{ y: 30, opacity: 0, delay: 200, type: 'from' }}
                        leave={{ y: 30, opacity: 0 }}
                        className={`${props.className}-tabs`}
                        id={`${props.id}-tabs`}
                    >
                        <Tabs key="tabs" onChange={this.onChange} activeKey={`${this.state.show}`}>
                            {tabsChildren}
                        </Tabs>
                    </TweenOne.TweenOneGroup>
                </OverPack>
            </div>
        );
    }
}

export default Partner;

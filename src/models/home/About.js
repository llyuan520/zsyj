/**
 * author       : liuliyuan
 * createTime   : 2017/11/18 17:20
 * description  :
 */
import React from 'react';
import {Row,Col} from 'antd';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import 'rc-banner-anim/assets/index.css';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import about from '../less/img/about/about.png'

const BgElement = Element.BgElement;
class About extends React.Component {

    static propTypes = {
        className: PropTypes.string,
        dataSource: PropTypes.object,
        id: PropTypes.string,
    };

    static defaultProps = {
        className: 'about',
    };

    render() {
        const props = { ...this.props };
        const isMode = props.isMode;
        delete props.isMode;
        const follow = !isMode ? {
            delay: 1000,
            minMove: 0.1,
            data: [
                { id: 'bg$0', value: 15, bgPosition: '50%', type: ['backgroundPositionX'] },
                { id: `${props.id}-wrapperBlock0`, value: -15, type: 'x' },
            ],
        } : null;
        const childrenToRender = (<Element
            key="0"
            prefixCls="banner-user-elem"
            followParallax={follow}
        >
            <BgElement
                className="bg bg0"
                key="bg"
                id="bg$0"
            />
            <QueueAnim
                className={`${props.className}-title`}
                key="text"
                id={`${props.id}-wrapperBlock0`}
            >
                <h1
                    className="logo"
                    key="logo"
                    id={`${props.id}-titleBlock0`}
                >
                    关于我们
                </h1>

                <div
                    className="contents"
                    key="content"
                    id={`${props.id}-contentBlock0`}
                >
                    <Row gutter={16} className="first">
                        <Col span={10} className="left">
                            <img alt="关于我们" width="80%" src={about} />
                        </Col>
                        <Col span={14} className="right">
                            深圳中税盈佳信息管理服务有限公司是由中税税务和喜盈佳两家股东公司发起成立，专注于 税务咨询服务+信息化 的专业公司。
                            创始人团队包括原税务机关诸多重要税收法规的起草者、业内专家，数十年经验的国内领先房地产企业税务、财务负责人，“四大”国际会计师事务所的资深税务经理。团队拥有精深的税收法规政策研究能力与丰富的税务管理实践经验。
                        </Col>
                    </Row>

                    {/*<Row gutter={16} className="middle">
                        <Col span={24}>
                            中税税务师事务所China Taxation Agency Co., Ltd.（简称“中税税务”）是一家总部位于中国北京，全国36家子公司，覆盖各省市地区的大型综合性税务服务实体，其历史可追溯到于1997年成立的中税税务代理有限公司，当时隶属于国家税务总局税务学会。截至目前已经拥有20年的专业税务服务经验。
                        </Col>
                    </Row>

                    <Row gutter={16} className="last">
                        <Col span={24}>
                            中税税务师事务所China Taxation Agency Co., Ltd.（简称“中税税务”）是一家总部位于中国北京，全国36家子公司，覆盖各省市地区的大型综合性税务服务实体，其历史可追溯到于1997年成立的中税税务代理有限公司，当时隶属于国家税务总局税务学会。截至目前已经拥有20年的专业税务服务经验。
                        </Col>
                    </Row>*/}

                </div>
            </QueueAnim>
        </Element>);

        return (
            <OverPack
                {...props}
            >
                <TweenOneGroup
                    key="banner"
                    enter={{ opacity: 0, type: 'from' }}
                    leave={{ opacity: 0 }}
                    component=""
                >
                    <BannerAnim
                        key="banner"
                    >
                        {childrenToRender}
                    </BannerAnim>
                </TweenOneGroup>
            </OverPack>
        );
    }
}

export default About;


/**
 * author       : liuliyuan
 * createTime   : 2017/11/18 16:56
 * description  :
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;

class Banner extends Component {

    static propTypes = {
        className: PropTypes.string,
    };

    static defaultProps = {
        className: 'banner',
    };

    render() {
        const props = { ...this.props };
        delete props.isMode;
        const childrenData = [
            {
                title: '<h1>房地产税收整体筹划服务方案</h1>',
                content: '对房地产开发经营业务的土地获取、立项开发、拆迁补偿、销售租赁、土地增值税清算、资产证券化、地产供应链和信息化管理等各节点进行全方位、全流程、全链条式税务筹划，助力企业增强盈利能力和竞争实力。',
            }, {
                title: '<h1>税务争议解决专业税务团队</h1>',
                content: '代表客户应对税务机关约谈，协助客户与税务机关建立良好沟通关系。是有关说明与申辩更全面有效地被税局接纳。',
            }, {
                title: '<h1>长期税务顾问财税专属服务商</h1>',
                content: '不断完善行业领域财税服务内容，帮助在集团上市企业推动自身财务变革。',
            }, {
                title: '<h1>税收筹划特定专项服务</h1>',
                content: '以税负最低为目标设计最有税务筹划方案，与管理层沟通确保方案的可操作性。',
            }
        ];
        const childrenToRender = childrenData.map((item, i) => {
            const title = item.title;
            const content = item.content;
            return (<Element
                key={i}
                prefixCls="banner-user-elem"
            >
                <BgElement
                    className={`bg bg${i}`}
                    key="bg"
                />
                <QueueAnim
                    type={['bottom', 'top']} delay={200}
                    className={`${props.className}-title`}
                    key="text"
                    id={`${props.id}-wrapperBlock${i}`}
                >
          <span
              className="logo"
              key="logo"
              id={`${props.id}-titleBlock${i}`}
              dangerouslySetInnerHTML={{
                  __html: title,
              }}
          />
                    <p
                        key="content"
                        id={`${props.id}-contentBlock${i}`}
                    >
                        {content}
                    </p>
                </QueueAnim>
            </Element>);
        });
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
                    <div className={`${props.className}-wrapper`}>
                        <BannerAnim
                            key="banner"
                        >
                            {childrenToRender}
                        </BannerAnim>
                    </div>
                </TweenOneGroup>
                <TweenOne
                    animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
                    className={`${props.className}-icon`}
                    style={{ bottom: 40 }}
                    key="icon"
                >
                    <Icon type="down" />
                </TweenOne>
            </OverPack>
        );
    }
}

export default Banner;


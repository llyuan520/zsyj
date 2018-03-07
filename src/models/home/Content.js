/**
 * author       : liuliyuan
 * createTime   : 2017/11/18 17:06
 * description  :
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import banner1 from '../less/img/content/banner2-1.png'
import banner2 from '../less/img/content/banner2-2.png'
import banner3 from '../less/img/content/banner2-3.png'
import banner4 from '../less/img/content/banner2-4.png'

class Content extends Component {

    static propTypes = {
        className: PropTypes.string,
        id: PropTypes.string,
    };

    static defaultProps = {
        className: 'contents',
    };

    getBlockChildren = (item, i) =>(
        <li key={i} id={`${this.props.id}-block${i}`}>
            <div className="icon">
                <img alt="选择中税盈佳" src={item.icon} width="100%" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
        </li>);

    render() {
        const props = { ...this.props };
        delete props.isMode;
        const dataSource = [
            { icon: banner1, title: '世界500强企业认可', content: '在中国，中税盈佳成功为上千家外资企业提供了高品质的税务服务，同时几十家世界五百强企业达成战略合作伙伴。实现跨国企业效益最大化，提升在华的竞争优势；驱动企业的持续发展。' },
            { icon: banner2, title: '国际理念本土经验', content: '中税盈佳同政府行政部门，国际行业协会保持密切联系。拥有丰富的项目经验，无论是剖析企业问题，解决方案制定，还是执行层面，丰富的经验，使我们能够为客户提供更完善的服务。' },
            { icon: banner3, title: '企业定制以客为尊', content: '我们将根据企业所面临的问题结合实际情况，为企业定制严谨的解决方案。这种方案可根据客户需要把不同的服务组合或拆分。确保每次服务都按需定制。旨在为客户提供更精细化的服务。' },
            { icon: banner4, title: '后收费保障机智', content: '后收费保障机制，将更有利于企业对项目前期成本的管控，同时也是中税盈佳对企业服务质量的保证，使企业问题没有得到真正的解决时，不必在项目完结前支付过高的费用。' },
        ];
        const listChildren = dataSource.map(this.getBlockChildren);
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
                        animation={{ y: '+=30', type: 'from'}}
                        component="h1"
                        key="h1"
                        reverseDelay={300}
                        id={`${props.id}-title`}
                    >
                        <font color="#fff"><span style={{color:'#2257d1'}}>选择</span>中税盈佳</font>
                    </TweenOne>
                    <QueueAnim
                        component="ul" type="bottom" key="block" leaveReverse
                        id={`${props.id}-contentWrapper`}
                    >
                        {listChildren}
                    </QueueAnim>
                </OverPack>
            </div>
        );
    }
}

export default Content;

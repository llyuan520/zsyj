/**
 * author       : liuliyuan
 * createTime   : 2017/11/18 16:48
 * description  :
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import code from './img/code.png'

class Footer extends Component {
    static propTypes = {
        className: PropTypes.string,
        id: PropTypes.string,
    };

    static defaultProps = {
        className: 'footer1',
    };

    render() {
        const props = { ...this.props };
        const isMode = props.isMode;
        delete props.isMode;
        const dataSource = {
            title:'联系我们',
            contact:[
                {
                    label:'电话',
                    value:'0755-82542569',
                },{
                    label:'邮箱',
                    value:'yanweijuntax@163.com',
                },{
                    label:'地址',
                    value:'广东省深圳市福田区金田路卓越世纪中心1号1801室',
                },
            ],
            links:{
                title:'友情链接',
                data:[{
                    label:'喜盈佳',
                    value:'http://www.servingcloud.com/',
                },{
                    label:'万科采筑',
                    value:'http://p.vvupup.com/',
                }],
            },
            code:{
                img: `${code}`, content: '关注我们'
            }
        }
        return (<OverPack
            {...props}
            playScale={isMode ? 0.5 : 0.2}
        >
            <QueueAnim type="bottom" component="ul" key="ul" leaveReverse id={`${props.id}-ul`}>

                <ul className="contactUs">
                    <li>
                        <h2>{dataSource.title}</h2>
                        {
                            dataSource.contact.map((item,i)=><p key={i}>{item.label}：{item.value}</p>)
                        }

                        <div className="link">
                            {dataSource.links.title}：{dataSource.links.data.map((item,i)=><a key={i} title={item.label} target="_blank" href={item.value}>{item.label}</a> )}
                        </div>

                    </li>
                    <li style={{textAlign:'center'}}>
                        <p><img alt="中税盈佳" src={dataSource.code.img} /></p>
                        <p>{dataSource.code.content}</p>
                    </li>
                </ul>
            </QueueAnim>
            <TweenOne
                animation={{ y: '+=30', opacity: 0, type: 'from' }}
                key="copyright"
                className="copyright"
                id={`${props.id}-content`}
            >
        <span>
           All Rights Reserved.© 2008-2017 深圳中税盈佳信息管理服务有限公司 粤ICP备17145410号
        </span>
            </TweenOne>
        </OverPack>);
    }
}

export default Footer;

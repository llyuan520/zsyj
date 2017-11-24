/**
 * author       : liuliyuan
 * createTime   : 2017/11/18 17:13
 * description  :
 */
import React,{Component} from 'react';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';

import pic1 from '../less/img/sever/pic-1.jpg'
import pic2 from '../less/img/sever/pic-2.jpg'
import pic3 from '../less/img/sever/pic-3.jpg'
import pic4 from '../less/img/sever/pic-4.jpg'
import pic5 from '../less/img/sever/pic-5.jpg'
import pic6 from '../less/img/sever/pic-6.jpg'
import pic7 from '../less/img/sever/pic-7.jpg'
import pic8 from '../less/img/sever/pic-8.jpg'

import pic9 from '../less/img/sever/pic-9.png'
import pic10 from '../less/img/sever/pic-10.png'
import pic11 from '../less/img/sever/pic-11.png'
import pic12 from '../less/img/sever/pic-12.png'

class Service extends Component {
    state={
        display:false,
        top:false,
        index:'',
        data:[],
    }

    static defaultProps = {
        className: 'service',
    };

    handleMouseOver=(i,item)=>{

        if(parseInt(i, 0) === 4 || parseInt(i, 0) === 6){
            this.setState({
                top: true,
            })
        }else{
            this.setState({
                top: false,
            })
        }

        this.setState({
            display: true,
            index:i,
            data: item,
        })
    }

    handleMouseOut=(i,item)=>{
        if(parseInt(i, 0) === 4 || parseInt(i, 0) === 6){
            this.setState({
                top: true,
            })
        }else{
            this.setState({
                top: false,
            })
        }

        this.setState({
            display: false,
            index:i,
            data: item,
        })
    }

    getDelay = e => e % 4 * 100 + Math.floor(e / 4) * 100 + 300;

    render() {
        const props = { ...this.props };
        delete props.isMode;
        const oneAnim = { y: '+=30', opacity: 0, type: 'from', ease: 'easeOutQuad' };
        const blockArray = [{
            icon: pic1,
        }, {
            icon: pic2,
            title: '税务争议解决',
            bgContent:pic9,
            content:[{
                title: '特定事项税务解决',
                child: [
                    '企业收并购、重组等重大交易中特定税务事项解决服务',
                    '土地增值税清算争议解决服务',
                    '特定交易涉税事先裁定服务',
                    '其他特定事项税务解决方案服务',
                ],
            },{
                title:'税务稽查顾问',
                child:[
                    '针对税务机关提出的各种稽查质询，协助客户归集整理相关证据材料，编写情况说明和申辩报告',
                    '代表客户应对税务机关约谈，向税局说明情况、列示证据和论证观点。',
                    '协助客户与税务机关建立良好沟通关系，使有关说明与申辩更全面有效地被税局接纳',
                ],
            },{
                title:'纳税评估顾问',
                child:[
                    '针对税务机关提出的各种评估质询，协助客户归集整理相关证据材料，编写情况说明和申辩报告',
                    '代表客户应对税务机关约谈，向税局说明情况、列示证据和论证观点',
                    '协助客户与税务机关建立良好沟通关系，使有关说明与申辩更全面有效地被税局接纳',
                ],
            },{
                title:'税务行政复议顾问',
                child:[
                    '当企业对涉税具体行政行为存在异议，合法权益可能遭受重大损失时，协助企业依法向上一级税务机关提出行政复议，避免客户因缺乏复议能力和经验，作出不恰当处理使企业合法权益受损。',
                ],
            }],
        }, {
            icon: pic3,
        }, {
            icon: pic4,
            title: '税收优惠落地',
            bgContent:pic10,
            content:[{
                title: '税收优惠落实服务',
                child: [
                    '在合理、合法的前提下通过对企业的投资、经营、理财活动的事先筹划和安排，以落实国家税收优惠政策从而降低企业税负，辅导企业实施各项减退税',
                ],
            },{
                title:'税收优惠落实服务',
                child:[
                    '步骤一：查阅公司章程，工商登记等企业设立资料，确定客户或集团股权架构，生产经营范围等企业设计信息。',
                    '步骤二：详细了解客户组织架构业务流程，如生产流程采购流程，销售流程等。',
                    '步骤三：查阅客户经济合同，会计凭证，会计账簿纳税申报等财税资料。',
                ],
            }],
        }, { icon: pic5,
            title: '常年税务顾问',
            bgContent:pic11,
            content:[{
                title: '日常税务咨询',
                child: [
                    '通过电话、电子邮件、电话会议等形式及时解答客户日常运营中遇到的财务、税务问题',
                ],
            },{
                title:'税收/财务法规速递',
                child:[
                    '收集财政部、国家税务总局、省、市国税/地税新颁布的税务/财务政策及相关权威解读。及时告知与客户密切相关的财税政策，使客户第一时间掌握并针对最新政策快速作出相应安排',
                ],
            },{
                title:'税务风险检查',
                child:[
                    '查看客户相关业务资料，全面了解客户实际经营情况',
                    '查阅客户经济合同、会计凭证、会计账簿、纳税申报等财税资料',
                    '出具《税务风险报告》，以识别、揭示和评估客户存在或潜在的各项税务风险，并为客户处理该税务风险提供方向性建议',
                ],
            },{
                title:'经济合同涉税审阅',
                child:[
                    '了解经济合同反映的经济业务实质',
                    '关注经济合同涉税条款，以评估、揭示合同涉税条款的税务风险',
                    '对经济合同涉税条款提供避免涉税风险的修改意见',
                    '识别有无优化涉税交易流程的空间进而降低企业税负',
                ],
            }],
        }, {
            icon: pic6,
        }, {
            icon: pic7,
            title: '税务筹划特定专项服务',
            bgContent:pic12,
            content:[{
                title: '制定筹划目标',
                child: [
                    '根据特定交易事项的经营目标，以税负最低为目标设计最优税务筹划方案；如下步骤一：历史涉税问题清理，寄以往年度税务更新申报及上市证明服务。步骤二：股权架构调整涉及企业重组的税务专项服务。步骤三：以税负优化为目标的股权架构优化服务。',
                ],
            },{
                title:'管理层沟通',
                child:[
                    '与管理层就税务筹划方案进行沟通确保方案的可操作性；',
                ],
            },{
                title:'协助实施',
                child:[
                    '协助客户税务筹划方案的实施，确保方案目标的实现',
                ],
            }],
        }, {
            icon: pic8,
        },
        ];
        const children = blockArray.map((item, i) => {
            const id = `block${i}`;
            const delay = this.getDelay(i);
            const liAnim = { opacity: 0, type: 'from', ease: 'easeOutQuad', delay };
            return (<TweenOne
                component="li"
                animation={liAnim}
                key={i}
                id={`${props.id}-${id}`}
            >
                <TweenOne
                    animation={{ x: '-=10', opacity: 0, type: 'from', ease: 'easeOutQuad' }}
                    className="img"
                    key="img"
                >
                    <img alt="税务服务" className="img" src={item.icon} width="100%" />

                    {
                        item.bgContent && <div className="topShow"
                                               onMouseOver={()=>this.handleMouseOver(i, item.content)}
                                               onMouseOut={()=>this.handleMouseOut(i, item.content)}>
                            <div className="icon"><img alt="税务服务" className="imgs" src={item.bgContent} /></div>
                            <h3>{item.title}</h3>
                            <i className={ (parseInt(i, 0) === 4 || parseInt(i, 0) === 6) ? 'top' : 'bottom'}></i>
                        </div>
                    }

                </TweenOne>
            </TweenOne>);
        });
        return (
            <div {...props} className={`content-template-wrapper ${props.className}-wrapper`}>
                <OverPack
                    className={`content-template ${props.className}`}
                    location={props.id}
                >
                    <TweenOne
                        key="h1"
                        animation={oneAnim}
                        component="h1"
                        id={`${props.id}-title`}
                        reverseDelay={100}
                    >
                        <span style={{color:'#2257d1'}}>税务</span>服务
                    </TweenOne>
                    <TweenOne
                        key="p"
                        animation={{ ...oneAnim, delay: 100 }}
                        component="p"
                        id={`${props.id}-titleContent`}
                    >
                        我们的服务将依据行业、经营业务和市场环境进行可行性分析，为企业系统地制定税务解决方案。我们的专业领域经验及深厚的社会资源，将帮助企业成功实施解决方案并有效降低操作风险。
                    </TweenOne>
                    <QueueAnim
                        key="ul"
                        type="bottom"
                        className={`${props.className}-contentWrapper`}
                        id={`${props.id}-contentWrapper`}
                    >
                        <ul key="ul">
                            {children}
                        </ul>
                        <ul className="model" style={{display: this.state.display ? 'inline-block' : 'none', top: this.state.top ? '-20px' : '240px', borderTop: (parseInt(this.state.index, 0) < 4) && '1px', borderBottom: (parseInt(this.state.index, 0) > 3) && '1px'  }}>
                            {
                                this.state.data.map((item, i) => {
                                    return(
                                        <li key={i}>
                                            <ol>
                                                <li>
                                                    <h2 style={{color:  (i%2 !== 0) ? '#fff' : '#333',background: (i%2 !== 0) ? '#2257d1' : '#CCCCCC',marginBottom:'10px'}}>{item.title}</h2>
                                                </li>
                                                {
                                                    item.child && item.child.map((item2,j)=>{
                                                        return(
                                                            <li key={j} style={{marginBottom:'10px'}}>● {item2}</li>
                                                        )
                                                    })
                                                }
                                            </ol>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </QueueAnim>
                </OverPack>
            </div>
        );
    }
}


export default Service;

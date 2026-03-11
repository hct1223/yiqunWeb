import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Users, Coffee, Target, TrendingUp, BrainCircuit, CheckCircle, ArrowRight,
  Gamepad2, Gift, Award, Megaphone, Cpu, Layers, Shield, MessageSquare,
  PartyPopper, BarChart, Building2, ShieldCheck, FlaskConical, Zap
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { cn } from '../lib/utils';

interface CaseItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  content: {
    customer?: {
      logo?: string;
      name: string;
      partner?: string;
    };
    requirements?: string[];
    solution?: string;
    highlights?: Array<{ title: string; items: string[] }>;
    platforms?: Array<{ title: string; image: string; description: string }>;
    results?: Array<{ label: string; value: string }>;
    summary: string;
  };
}

const cases: CaseItem[] = [
  {
    id: "nestle",
    icon: <Gamepad2 size={28} />,
    title: "雀巢联名活动",
    subtitle: "品牌联名H5游戏活动",
    tags: ["OMO营销", "社交裂变", "品牌传播"],
    description: "雀巢 × 萃春疯联名活动，2026年元旦《新年消消乐》OMO互动营销",
    content: {
      customer: {
        name: "雀巢 × 萃春疯",
        partner: "国际食品巨头 × 本土新锐茶饮品牌"
      },
      requirements: [
        "品牌曝光提升（声量增长）",
        "市场推广和目标用户群体触达（用户增长）",
        "活动产品销售和门店综合销售（销售增长）"
      ],
      solution: "以「H5小游戏矩阵」为核心的OMO互动营销策略，推出《新年消消乐》游戏，融合收集+消除元素，自然植入双品牌产品，实现玩中传播。",
      platforms: [
        {
          title: "新年消消乐H5游戏",
          image: "/nestle/nestle.png",
          description: "《新年消消乐》是一款融合收集与消除元素的H5小游戏，专为2026年元旦打造。游戏界面采用喜庆的新春主题设计，融入雀巢与萃春疯双品牌产品元素作为消除道具，让用户在轻松愉快的游戏体验中自然接触双品牌产品。游戏操作简单，适配全年龄段用户，支持微信一键分享，助力品牌社交裂变传播。"
        }
      ],
      highlights: [
        {
          title: "核心方案",
          items: [
            "游戏机制简单，适配全年龄段",
            "消除玩法带来成就感，提升用户粘性",
            "元旦节日氛围契合，易于传播",
            "页面融入双方原料卡片，实现双品牌同步曝光"
          ]
        },
        {
          title: "配套系统",
          items: [
            "智能H5游戏系统 - 快速部署，支持高并发",
            "用户行为分析后台 - 实时监测参与数据",
            "智能卡券核销系统 - 打通线上线下",
            "AI运维支持 - 7x24小时技术保障"
          ]
        }
      ],
      results: [
        { label: "覆盖人数", value: "6,906" },
        { label: "参与率", value: "82.9%" },
        { label: "人均游戏次数", value: "3.4次" },
        { label: "社交分享次数", value: "4,516" }
      ],
      summary: "域见增长和蚁群科技结合用户需求和目标，通过精准的策略规划、创新的游戏创意和强大的技术支持，成功为雀巢与萃春疯打造了一场现象级新年联名营销活动，实现了品牌声量、用户互动与销售增长的三重提升。"
    }
  },
  {
    id: "ceprei",
    icon: <FlaskConical size={28} />,
    title: "中国赛宝实验室",
    subtitle: "科研院所数字化",
    tags: ["数字化转型", "业务流程闭环", "数据资产化"],
    description: "建设综合业务管理系统，实现检验检测全流程数字化，提升科研机构运营效率",
    content: {
      customer: {
        name: "中国赛宝实验室（CEPREI）",
        partner: "工业和信息化部电子第五研究所"
      },
      requirements: [
        "业务流程碎片化，协同效率低",
        "科研数据分散，难以形成资产",
        "服务响应慢，客户体验差"
      ],
      solution: "打造全流程业务闭环数字化解决方案，涵盖从业务受理、样品管理、检验检测到报告发放的完整流程，建立业务中台、数据中台、服务中台三大核心平台。",
      platforms: [
        {
          title: "综合业务服务平台",
          image: "/ceprei/综合服务平台.png",
          description: "作为中国赛宝实验室核心业务聚合载体，全面整合实验室全部业务系统，打造统一、便捷的业务入口。平台涵盖业务咨询、委托下单、课程培训、解决方案、新闻中心、报告查询等全场景功能，同时精准整合企业画像、用户画像等各类核心数据，为实验室开展数据分析、优化运营策略、提升服务质量提供强有力的数据支撑。"
        },
        {
          title: "云上赛宝",
          image: "/ceprei/云上赛宝.png",
          description: "聚焦用户全流程服务需求，整合行业论坛、业务介绍、业务咨询、来访预约、报告查询、委托下单、线下培训、视频宣传、新闻中心等多元功能，全方位覆盖检测业务办理、技术培训开展、企业形象宣传三大核心场景。打破线上线下服务壁垒，构建起「线上服务便捷化、线下对接高效化」的双向联动服务体系。"
        },
        {
          title: "赛宝质云平台应用SaaS平台",
          image: "/ceprei/赛宝质云Sass平台.png",
          description: "以赛宝质云应用商城为核心，聚焦APP应用的全生命周期管理与运营。承担APP应用展示、销售、管理及企业用户信息统筹管理等核心职能。平台为企业用户提供便捷的应用选购渠道，同时实现对应用上线、更新、维护的规范化管理，助力实验室实现应用服务的商业化运营与用户管理的精细化。"
        },
        {
          title: "云课堂",
          image: "/ceprei/云课堂.png",
          description: "依托移动互联网、大数据、人工智能等新一代信息技术，搭建起高效便捷的技术服务与交流桥梁。平台不仅能让客户实时掌握工信部五所的最新发展动态、行业前沿技术趋势，增强客户粘性与归属感，同时搭建起完善的知识库体系，沉淀技术服务经验与行业资讯，为五所持续提升技术服务能力、推进研发创新提供坚实的知识参考与支撑。"
        },
        {
          title: "赛宝质云门户官网",
          image: "/ceprei/赛宝质云门户官网.png",
          description: "作为工信部五所赛宝实验室的官方门户网站，采用2.5D立体设计风格，视觉呈现兼具科技感与层次感，深度诠释研发中心「智连世界，质造未来」的核心发展理念。官网涵盖工业APP产品展示、在线课堂、应用商城、解决方案、新闻资讯等核心模块，全面展现赛宝实验室的技术实力、产品体系、服务能力与发展动态。"
        },
        {
          title: "绿色设计制造平台官网",
          image: "/ceprei/绿色设计制造平台官网.png",
          description: "以「绿色设计、绿色制造」为核心主题，采用简约明快的设计风格，整体视觉清新自然、布局简洁有序，既高度贴合绿色发展的核心导向，又能清晰、直观地传递客户的核心诉求。官网通过合理的板块划分与内容呈现，让访问者快速捕捉绿色设计、绿色制造相关的核心信息，高效传递平台的定位与价值，助力推广绿色发展理念、对接绿色产业需求。"
        }
      ],
      results: [
        { label: "效率提升", value: "70%" },
        { label: "客户满意度", value: "95%" },
        { label: "报告出具时间", value: "缩短60%" },
        { label: "无纸化率", value: "100%" }
      ],
      summary: "通过数字化转型，中国赛宝实验室实现了业务全流程线上化，构建了6大核心平台系统，大幅提升了检验检测效率和客户服务质量，为科研机构数字化建设树立了标杆。"
    }
  },
  {
    id: "taikoo",
    icon: <Building2 size={28} />,
    title: "广州太古汇",
    subtitle: "商业地产智慧运营",
    tags: ["智慧商场", "会员运营", "AI-OCR审核"],
    description: "建设智慧运营平台，整合会员CRM和营销系统，实现商场数字化运营管理",
    content: {
      customer: {
        name: "广州太古汇",
        partner: "太古地产旗下高端购物中心"
      },
      requirements: [
        "会员活跃度低，营销触达难",
        "财务审核繁琐，人工易出错",
        "运营数据孤岛，决策缺乏支撑"
      ],
      solution: "打造「运营管理+客户服务+营销活动」全体系解决方案，整合会员、营销、运营三大核心能力，通过AI技术提升运营效率。",
      platforms: [
        {
          title: "臻享活动平台",
          image: "/taikoo/臻享活动平台.png",
          description: "聚焦太古汇C端消费者数字化服务，核心支撑商场全年度营销活动落地。支持自助权益兑换，消费者可自助完成各类营销、体验活动的资格兑换，降低用户参与门槛；作为线下活动的电子化载体，可定制适配打卡、预约排队等各类互动场景；采用「模块化高复用+定制化对接」架构，可快速迭代升级，低成本支撑全年度各类主题营销活动。"
        },
        {
          title: "小票OCR识别审核系统",
          image: "/taikoo/小票识别.png",
          description: "面向消费相关审核场景的智能化工具，可自动识别用户提交的消费小票、支付凭证图片，将图片中的关键数据提取并生成结构化数据，自动填入页面指定位置。系统大幅减少人工录入成本与误差，助力审核流程高效推进，提升财务审核效率90%以上。"
        },
        {
          title: "租户销售月报审核系统",
          image: "/taikoo/租户销售月报审核系统.png",
          description: "针对租户销售月报审核需求的自动化工具，可自动识别租户提交的销售月报PDF文件，提取文件中的关键数据并转换为结构化数据，自动填充至页面指定审核位置。系统简化审核流程，提升审核效率与准确性，实现租户销售数据的统一管理与高效审核。"
        },
        {
          title: "会员管理系统CRM",
          image: "/taikoo/会员管理系统.png",
          description: "聚焦会员全生命周期管理的综合系统，核心功能包含会员信息管理、优惠券管理、积分管理、活动管理等模块。系统配套设计数据采集流程、用户画像构建、精准营销方案及标签生成流程，实现会员精细化运营，为商场提供全面的会员数据分析与运营支撑。"
        },
        {
          title: "太古汇会员小程序",
          image: "/taikoo/太古汇会员小程序.png",
          description: "将粉丝与会员页面进行整合的移动端应用，通过创新的UI/UE设计，确保会员和粉丝获得非凡的用户体验。小程序集成精彩活动、积分尊享、便捷停车与权益兑换等功能，为用户提供更加便捷、个性化的服务，打通线上线下服务链路，助力会员留存与活跃度提升。"
        },
        {
          title: "业务中台",
          image: "/taikoo/太古汇业务中台.png",
          description: "为企业搭建的微服务式基础业务框架，完成网关基础设施建设，支持应用管理、接口管理、接口权限分配、文档管理、OCR文档识别等多项核心功能。采用多租户架构设计，能够支持同时管理多区域数据，实现不同区域数据逻辑层隔离，保障数据安全与管理便捷性。"
        },
        {
          title: "租户管理平台",
          image: "/taikoo/租户管理平台.png",
          description: "聚焦太古汇全国商场门店及写字楼租户管理的全方位服务平台。核心功能包括管理太古汇全国商场门店销售数据，支持店长上传每月销售数据、生成销售月报、查看商场公告等；同时为商场及写字楼租户提供加班空调申请、设备报修等基础便民服务，提升运营管理效率。"
        },
        {
          title: "停车预约服务",
          image: "/taikoo/停车预约服务.png",
          description: "专为太古汇高级VIP打造的专属停车预约服务，实现多端协同管理。iPad后台可实时显示所有停车预约情况，方便管理人员快速办理用户停车相关事项；小程序端为高级VIP客户提供便捷的停车预约入口，简化预约流程，为客户提供专属、高效的停车体验，彰显尊贵服务品质。"
        }
      ],
      highlights: [
        {
          title: "核心系统",
          items: [
            "臻享活动平台 - C端数字化营销工具",
            "小票OCR识别审核系统 - 消费小票智能识别",
            "租户销售月报审核系统 - PDF月报自动审核",
            "会员管理系统CRM - 会员全生命周期管理",
            "太古汇会员小程序 - 移动端会员服务",
            "业务中台 - 微服务架构基础平台",
            "租户管理平台 - 全国租户统一管理",
            "停车预约服务 - VIP专属停车预约"
          ]
        },
        {
          title: "方案优势",
          items: [
            "全渠道会员运营 - 打通线上线下会员体系",
            "AI-OCR财务审核 - 审核效率提升90%",
            "数字化营销闭环 - 全链路数据支撑",
            "多租户架构 - 支持多区域数据隔离"
          ]
        }
      ],
      results: [
        { label: "会员活跃度", value: "提升40%" },
        { label: "营销ROI", value: "提升30%" },
        { label: "财务审核效率", value: "提升90%" },
        { label: "运营成本", value: "降低20%" }
      ],
      summary: "通过智慧运营平台建设，太古汇实现了会员精准营销、财务智能化审核和运营数据统一分析，显著提升了商场运营效率和商业价值。"
    }
  },
  {
    id: "gzsei",
    icon: <ShieldCheck size={28} />,
    title: "广州特种设备检测研究院",
    subtitle: "特种设备检测数字化",
    tags: ["移动化检验", "报告自动化", "全程追溯"],
    description: "部署检务通系统，实现电梯、起重机等设备移动化检验，提升检验效率",
    content: {
      customer: {
        name: "广州特种设备检测研究院",
        partner: "专业特种设备检验检测机构"
      },
      requirements: [
        "现场检验环境复杂，数据录入难",
        "报告生成周期长，人工成本高",
        "设备追溯不完整，安全风险大"
      ],
      solution: "为特种设备检测机构量身打造的移动化检验解决方案，通过检务通APP实现现场检验数字化，配合管理系统实现业务全流程闭环。",
      platforms: [
        {
          title: "检务通APP",
          image: "/gzsei/检务通App.png",
          description: "专为检验现场设计的移动化应用，支持离线检验、拍照存证、电子签名等核心功能。检验人员可随时随地进行设备检验，无需担心网络环境。APP内置智能表单，支持多种特种设备检验模板，大幅提升现场检验效率和数据准确性。"
        },
        {
          title: "检验检测综合业务管理系统",
          image: "/gzsei/检验检测综合业务系统.png",
          description: "统一管理特种设备检测全流程业务，涵盖任务分配、进度跟踪、报告审核、档案管理等核心功能。系统实现业务数据集中化管理，支持多维度数据统计分析，为管理决策提供数据支撑，显著提升机构整体运营效率。"
        },
        {
          title: "检验检测服务小程序",
          image: "/gzsei/服务平台小程序.png",
          description: "面向客户的移动服务平台，提供在线报检、进度查询、报告下载、电子发票等便捷服务。客户可通过微信小程序随时办理业务，实时了解检验进度，大幅提升客户服务体验和满意度，构建机构与客户之间的高效连接通道。"
        }
      ],
      highlights: [
        {
          title: "核心系统",
          items: [
            "检务通移动APP - 离线检验、拍照存证、电子签名",
            "检验检测服务小程序 - 客户在线服务",
            "检验检测综合管理系统 - 业务统一管理"
          ]
        },
        {
          title: "方案优势",
          items: [
            "移动化现场检验 - 支持离线作业，适应复杂现场",
            "自动化报告生成 - 检验数据自动抓取，效率提升80%",
            "全生命周期追溯 - 设备检验全程可追溯"
          ]
        }
      ],
      results: [
        { label: "检验效率", value: "提升60%" },
        { label: "报告出具时间", value: "缩短70%" },
        { label: "业务办理时间", value: "压缩50%" },
        { label: "设备追溯率", value: "100%" }
      ],
      summary: "通过检务通系统和综合管理平台建设，广州特检院实现了现场检验移动化、报告生成自动化、设备追溯全程化，大幅提升了特种设备检验效率和服务质量。"
    }
  }
];

export default function Cases() {
  const [activeCase, setActiveCase] = useState<string>('nestle');

  const currentCase = cases.find(c => c.id === activeCase)!;

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-bold"
            >
              <BarChart size={16} />
              Success Cases
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              客户案例
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              真实项目案例，见证数字营销的力量
            </motion.p>
          </div>
        </div>
      </section>

      {/* Case Tabs */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-16 z-40 shadow-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {cases.map((caseItem) => (
              <button
                key={caseItem.id}
                onClick={() => setActiveCase(caseItem.id)}
                className={cn(
                  "px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2",
                  activeCase === caseItem.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {caseItem.icon}
                {caseItem.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Content */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeCase}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="py-16 bg-white"
        >
          <div className="container-custom">
            {/* Case Header */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    {currentCase.icon}
                    <div className="flex flex-wrap gap-2">
                      {currentCase.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-3">{currentCase.title}</h2>
                  <p className="text-white/90 text-lg">{currentCase.description}</p>
                </div>
              </div>
            </div>

            {/* Customer Info */}
            {currentCase.content.customer && (
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <Building2 size={24} />
                  </div>
                  客户信息
                </h4>
                <div className="bg-slate-50 rounded-xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-bold text-slate-900 mb-3 text-lg">{currentCase.content.customer.name}</h5>
                      {currentCase.content.customer.partner && (
                        <p className="text-slate-600">{currentCase.content.customer.partner}</p>
                      )}
                    </div>
                    {currentCase.content.requirements && (
                      <div>
                        <h5 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <Target size={20} className="text-primary" />
                          项目需求
                        </h5>
                        <ul className="space-y-2">
                          {currentCase.content.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-600">
                              <CheckCircle size={16} className="text-primary mt-1 shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Solution */}
            {currentCase.content.solution && (
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <BrainCircuit size={24} />
                  </div>
                  解决方案
                </h4>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-8 border border-blue-200">
                  <p className="text-blue-900 text-lg leading-relaxed">{currentCase.content.solution}</p>
                </div>
              </div>
            )}

            {/* Highlights */}
            {currentCase.content.highlights && (
              <div className="mb-12">
                {currentCase.content.highlights.map((highlight, index) => (
                  <div key={index} className="mb-8 last:mb-0">
                    <h4 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                        <Zap size={20} />
                      </div>
                      {highlight.title}
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {highlight.items.map((item, i) => (
                        <div key={i} className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                          <div className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-primary mt-1 shrink-0" />
                            <span className="text-slate-700">{item}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Platforms */}
            {currentCase.content.platforms && (
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Layers size={24} />
                  </div>
                  建设成果
                </h4>
                <div className="space-y-6">
                  {currentCase.content.platforms.map((platform, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="grid lg:grid-cols-2 gap-0">
                        {/* Platform Image */}
                        <div className="relative h-64 lg:h-80 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden group">
                          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                          <img
                            src={platform.image}
                            alt={platform.title}
                            className="w-full h-full object-contain p-4 lg:p-8 transition-transform duration-500 group-hover:scale-105"
                            onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                              e.currentTarget.style.display = 'none';
                            }}
                          />
                          {/* Image Overlay Effect */}
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
                        </div>

                        {/* Platform Content */}
                        <div className="p-8 flex flex-col justify-center">
                          <h5 className="text-xl lg:text-2xl font-bold text-slate-900 mb-4">{platform.title}</h5>
                          <p className="text-slate-600 leading-relaxed">{platform.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Results */}
            {currentCase.content.results && (
              <div className="mb-12">
                <h4 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <TrendingUp size={24} />
                  </div>
                  实施效果
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {currentCase.content.results.map((result, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-br from-primary to-emerald-500 rounded-xl p-6 text-white text-center"
                    >
                      <div className="text-3xl font-bold mb-2">{result.value}</div>
                      <div className="text-sm text-white/90">{result.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Summary */}
            <div>
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-8 text-white">
                <h4 className="font-bold text-xl mb-4 flex items-center gap-3">
                  <Award size={24} className="text-primary" />
                  案例总结
                </h4>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {currentCase.content.summary}
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              需要类似的解决方案？
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              我们的专业团队将为您量身打造最适合的数字化解决方案
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/#contact"
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all flex items-center gap-2"
              >
                立即咨询
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/solutions"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all flex items-center gap-2"
              >
                <Gamepad2 size={18} />
                查看解决方案
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

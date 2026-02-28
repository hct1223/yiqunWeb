import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, Shield, Zap, Users, Award, Rocket, Code, Smartphone, 
  Globe, Settings, BarChart, Cpu, Search, MessageSquare, CheckCircle,
  FlaskConical, ShieldCheck, Building2, Factory, BrainCircuit, Target, Eye, Heart,
  Send, MapPin, Phone, Mail, ExternalLink, Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { cn } from '../lib/utils';

export default function Home() {
  const [activeSolution, setActiveSolution] = useState(0);

  const solutions = [
    {
      id: "research",
      icon: <FlaskConical size={24} />,
      title: "科研院所数字化",
      subtitle: "Research Institute Digitalization",
      desc: "面向科研院所、检测机构，打通业务、数据、服务全链路，实现业务线上化、管理智能化、数据资产化。",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1200",
      painPoints: ["业务流程碎片化，协同效率低", "科研数据分散，难以形成资产", "服务响应慢，客户体验差"],
      architecture: ["业务中台：整合核心业务逻辑", "数据中台：统一数据标准与存储", "服务中台：快速响应前端需求"],
      features: [
        { title: "全流程业务闭环", desc: "从委托受理到报告发放的全流程数字化管理。" },
        { title: "数据资产化管理", desc: "沉淀科研数据，实现跨部门、跨层级的数据共享与分析。" },
        { title: "智能化决策支持", desc: "基于大数据分析，为科研决策提供精准的数据支撑。" }
      ],
      modules: ["综合业务服务平台", "线上服务小程序", "工业互联网平台", "专项数字化系统及门户"]
    },
    {
      id: "inspection",
      icon: <ShieldCheck size={24} />,
      title: "特种设备检测",
      subtitle: "Special Equipment Inspection",
      desc: "面向特种设备检测机构，实现现场检验、业务管理、客户服务全流程线上化、智能化，提升检验效率与服务质量。",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200",
      painPoints: ["现场检验环境复杂，数据录入难", "报告生成周期长，人工成本高", "设备追溯不完整，安全风险大"],
      architecture: ["移动端：检务通APP现场作业", "管理端：综合业务管理系统", "服务端：客户服务小程序"],
      features: [
        { title: "移动化现场检验", desc: "检务通APP支持离线检验、拍照存证、电子签名。" },
        { title: "全生命周期追溯", desc: "实现设备从安装、检验到报废的全生命周期数据追踪。" },
        { title: "自动化报告生成", desc: "基于模板自动抓取检验数据，秒级生成标准化检验报告。" }
      ],
      modules: ["检务通移动APP", "检验检测服务小程序", "检验检测综合管理系统"]
    },
    {
      id: "realestate",
      icon: <Building2 size={24} />,
      title: "商业地产智慧运营",
      subtitle: "Commercial Real Estate",
      desc: "面向高端商场、商业综合体，打造“运营管理+客户服务+营销活动”全体系解决方案，实现智慧化运营，提升商业价值。",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
      painPoints: ["会员活跃度低，营销触达难", "财务审核繁琐，人工易出错", "运营数据孤岛，决策缺乏支撑"],
      architecture: ["运营层：商场运营管理系统", "会员层：CRM与会员管理系统", "营销层：臻享营销活动平台"],
      features: [
        { title: "全渠道会员运营", desc: "打通线上线下会员体系，实现精准画像与个性化营销。" },
        { title: "AI-OCR 财务审核", desc: "智能识别各类票据，大幅提升商户返利与活动审核效率。" },
        { title: "数字化营销闭环", desc: "从活动策划、执行到效果分析的全链路数字化支撑。" }
      ],
      modules: ["商场运营管理系统", "会员管理与CRM系统", "臻享营销活动系统", "营销活动数字化平台"]
    }
  ];

  return (
    <div className="overflow-hidden" id="top">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-slate-900 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>

        <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              企业数字化应用落地服务专家
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              赋能企业 <br />
              <span className="text-primary">数字化转型</span>与业务增长
            </h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              致力于提升企业效率和生产力，帮助企业快速发展 · 数字化应用落地。
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary flex items-center gap-2">
                立即咨询 <ChevronRight size={18} />
              </a>
              <a href="#solutions" className="btn-outline border-slate-700 text-white hover:bg-slate-800">
                查看解决方案
              </a>
            </div>
            <div className="pt-8 border-t border-slate-800 flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-white">2016</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">成立年份</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">落地项目</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">90%</div>
                <div className="text-xs text-slate-500 uppercase tracking-widest">客户续约率</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070" 
                alt="Digital Transformation" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            </div>
            {/* Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600">
                <Zap size={20} />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-bold uppercase">交付率</div>
                <div className="text-lg font-bold text-slate-900">100%</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeader 
            subtitle="Core Advantages"
            title="深耕数字化领域，打造不可替代的核心竞争力"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Cpu className="text-primary" />,
                title: "技术驱动，自主可控",
                desc: "高新技术企业，70%研发团队占比，核心算法与平台自主研发，技术实力行业领先。"
              },
              {
                icon: <Search className="text-primary" />,
                title: "垂直深耕，懂行更专业",
                desc: "聚焦科研院所、特检、商业地产3大赛道，10年行业经验，方案1:1匹配业务需求。"
              },
              {
                icon: <Users className="text-primary" />,
                title: "全栈服务，全程陪伴",
                desc: "覆盖需求调研、方案设计、研发交付、运维运营全流程，一站式解决数字化落地痛点。"
              },
              {
                icon: <Award className="text-primary" />,
                title: "标杆背书，口碑过硬",
                desc: "服务中国赛宝、广州特检院、太古汇等头部客户，项目交付率100%，续约率90%+。"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Matrix */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
        
        <div className="container-custom relative z-10">
          <SectionHeader 
            subtitle="Business Matrix"
            title="全栈技术服务，覆盖多元数字化需求"
            description="我们提供从咨询设计到研发交付的全生命周期IT服务，以技术实力保障每一个项目的卓越品质。"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Globe size={24} />, 
                name: "设计咨询", 
                desc: "深度调研业务需求，提供专业的数字化转型路径规划与UI/UX设计。",
                color: "bg-blue-500"
              },
              { 
                icon: <Code size={24} />, 
                name: "定制开发", 
                desc: "基于微服务架构，为企业量身打造高可用、可扩展的核心业务系统。",
                color: "bg-indigo-500"
              },
              { 
                icon: <Smartphone size={24} />, 
                name: "移动App开发", 
                desc: "覆盖iOS/Android原生及跨平台开发，打造极致流畅的移动端交互体验。",
                color: "bg-purple-500"
              },
              { 
                icon: <MessageSquare size={24} />, 
                name: "微信小程序开发", 
                desc: "充分利用微信生态优势，快速构建轻量化、高转化的业务触达入口。",
                color: "bg-emerald-500"
              },
              { 
                icon: <Globe size={24} />, 
                name: "响应式网站建设", 
                desc: "适配全终端的品牌门户建设，兼顾视觉美感与SEO优化。",
                color: "bg-sky-500"
              },
              { 
                icon: <Rocket size={24} />, 
                name: "行业解决方案定制", 
                desc: "针对科研、特检、地产等垂直赛道，提供1:1匹配业务的闭环方案。",
                color: "bg-orange-500"
              },
              { 
                icon: <Zap size={24} />, 
                name: "H5营销活动开发", 
                desc: "创意交互与高性能渲染结合，助力企业实现社交裂变与品牌传播。",
                color: "bg-yellow-500"
              },
              { 
                icon: <Shield size={24} />, 
                name: "系统运维保障", 
                desc: "7*24小时全方位监控与技术支持，确保企业数字化资产安全稳定运行。",
                color: "bg-rose-500"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-white p-8 rounded-3xl border border-slate-200/60 hover:border-primary/30 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Hover Background Accent */}
                <div className={cn("absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500", item.color)} />
                
                <div className="relative z-10 space-y-5">
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3", item.color)}>
                    {item.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 group-hover:text-slate-600 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 h-1 bg-primary rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core AI Business */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container-custom relative z-10">
          <SectionHeader 
            subtitle="Core AI Business"
            title="AI赋能，重塑企业生产力"
            description="紧跟人工智能浪潮，我们将先进的AI技术转化为可落地的业务应用，助力企业从“数字化”迈向“智能化”。"
          />
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: <BrainCircuit className="text-white" />,
                title: "大模型私有化与知识库",
                desc: "基于开源大模型提供私有化部署方案，构建企业专属知识库，解决数据安全顾虑，提升内部知识检索与问答效率。",
                tags: ["私有化部署", "RAG架构", "知识库构建"]
              },
              {
                icon: <Eye className="text-white" />,
                title: "AI-OCR 智能识别系统",
                desc: "深度定制的OCR识别引擎，支持复杂表格、手写体、多语种票据的高精度识别，已成功应用于商业地产财务审核场景。",
                tags: ["高精度识别", "复杂场景适配", "自动化审核"]
              },
              {
                icon: <Target className="text-white" />,
                title: "智能体 (AI Agents) 开发",
                desc: "开发具备任务规划、工具调用能力的智能体，自动化处理重复性业务流程，实现从“人找工具”到“工具找人”的转变。",
                services: ["流程自动化", "智能客服", "决策辅助"]
              },
              {
                icon: <BarChart className="text-white" />,
                title: "智能数据洞察与预测",
                desc: "利用机器学习算法对海量业务数据进行深度挖掘，提供销量预测、故障预警、用户画像等决策支持。",
                services: ["预测性维护", "精准营销", "风险控制"]
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-16 h-16 shrink-0 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:rotate-6 transition-transform">
                    {item.icon}
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {(item.tags || item.services || []).map((tag, j) => (
                        <span key={j} className="px-3 py-1 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Solutions - Special Feature Design */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="solutions">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary blur-[120px] rounded-full" />
          <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-indigo-500 blur-[120px] rounded-full" />
        </div>

        <div className="container-custom relative z-10">
          <SectionHeader 
            light
            subtitle="Industry Solutions"
            title="聚焦核心赛道，提供专题级解决方案"
            description="我们不只是提供软件，更是深入行业场景，为企业量身定制可进化的数字化专题方案。"
          />

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {solutions.map((sol, index) => (
              <button
                key={sol.id}
                onClick={() => setActiveSolution(index)}
                className={cn(
                  "px-8 py-4 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center gap-3 border",
                  activeSolution === index 
                    ? "bg-primary border-primary text-white shadow-lg shadow-primary/30 scale-105" 
                    : "bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-500"
                )}
              >
                {sol.icon}
                {sol.title}
              </button>
            ))}
          </div>

          {/* Solution Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSolution}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              {/* Left Content */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/30">
                    {solutions[activeSolution].subtitle}
                  </div>
                  <h3 className="text-4xl font-bold leading-tight">
                    {solutions[activeSolution].title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {solutions[activeSolution].desc}
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Pain Points */}
                  <div className="p-6 rounded-2xl bg-red-500/5 border border-red-500/10">
                    <h4 className="text-sm font-bold text-red-400 mb-3 flex items-center gap-2">
                      <Shield size={14} /> 行业痛点 (Pain Points)
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {solutions[activeSolution].painPoints.map((point, i) => (
                        <li key={i} className="text-xs text-slate-400 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-red-500" /> {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Architecture */}
                  <div className="p-6 rounded-2xl bg-blue-500/5 border border-blue-500/10">
                    <h4 className="text-sm font-bold text-blue-400 mb-3 flex items-center gap-2">
                      <Layers size={14} /> 方案架构 (Architecture)
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {solutions[activeSolution].architecture.map((arch, i) => (
                        <li key={i} className="text-xs text-slate-400 flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-blue-500" /> {arch}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-bold text-slate-300 flex items-center gap-2">
                      <Zap size={14} className="text-primary" /> 核心优势 (Key Features)
                    </h4>
                    {solutions[activeSolution].features.map((feature, i) => (
                      <div key={i} className="flex gap-4 group">
                        <div className="w-8 h-8 shrink-0 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                          <CheckCircle size={14} className="text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-slate-100 mb-0.5">{feature.title}</h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="text-sm font-bold text-slate-300 mb-4 flex items-center gap-2">
                    <Layers size={16} className="text-primary" /> 核心服务模块
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {solutions[activeSolution].modules.map((module, i) => (
                      <span key={i} className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300">
                        {module}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="lg:col-span-7 relative">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
                  <img 
                    src={solutions[activeSolution].image} 
                    alt={solutions[activeSolution].title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                </div>
                
                {/* Floating Stats or Badges */}
                <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl bg-primary shadow-xl text-white max-w-[200px] hidden md:block">
                  <div className="text-2xl font-bold mb-1">100%</div>
                  <div className="text-[10px] uppercase tracking-widest opacity-80">业务场景深度适配</div>
                </div>
                <div className="absolute -top-6 -right-6 p-6 rounded-2xl bg-white shadow-xl text-slate-900 max-w-[200px] hidden md:block">
                  <div className="text-2xl font-bold mb-1 text-primary">24/7</div>
                  <div className="text-[10px] uppercase tracking-widest text-slate-500">全天候数字化支撑</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* About Us */}
      <section className="py-24 bg-slate-50" id="about">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <SectionHeader 
                centered={false}
                subtitle="About Us"
                title="企业数字化转型的可靠合作伙伴"
              />
              <p className="text-slate-600 leading-relaxed">
                广州蚁群信息科技有限公司成立于2016年，是一家以技术创新为驱动、专注于企业数字化应用落地服务的高新技术企业。
              </p>
              <p className="text-slate-600 leading-relaxed">
                我们聚焦科研院所、特种设备检测、商业地产等核心赛道，提供需求调研、方案设计、研发交付、运维运营一站式IT服务，凭借深厚的行业经验、强大的技术实力，已为数十家行业头部企业定制贴合业务的信息化系统。
              </p>
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="p-6 rounded-2xl bg-white shadow-sm text-center">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4"><Target size={20} /></div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-widest">使命</div>
                  <div className="text-sm text-slate-500">技术驱动</div>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-sm text-center">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4"><Eye size={20} /></div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-widest">愿景</div>
                  <div className="text-sm text-slate-500">行业领先</div>
                </div>
                <div className="p-6 rounded-2xl bg-white shadow-sm text-center">
                  <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mx-auto mb-4"><Heart size={20} /></div>
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-widest">价值观</div>
                  <div className="text-sm text-slate-500">诚信责任</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
                  alt="Our Team" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-primary p-8 rounded-2xl shadow-xl text-white hidden md:block">
                <div className="text-4xl font-bold mb-1">10+</div>
                <div className="text-xs uppercase tracking-widest opacity-80">行业深耕经验</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white" id="contact">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <SectionHeader 
                centered={false}
                subtitle="Contact Us"
                title="携手同行，共创价值"
                description="如果您有数字化转型相关需求与疑问，欢迎随时联系我们，我们将提供一对一专业咨询与定制化解决方案。"
              />
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><MapPin size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">公司地址</h4>
                    <p className="text-slate-600">广东省广州市天河区</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">咨询热线</h4>
                    <p className="text-slate-600">xxx-xxxxxxx</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">联系邮箱</h4>
                    <p className="text-slate-600">xxx@yiqunkeji.com</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100"
            >
              <h3 className="text-2xl font-bold mb-8 text-slate-900">商务咨询表单</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">姓名*</label>
                    <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all" placeholder="您的姓名" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">联系电话*</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all" placeholder="您的联系电话" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">企业名称*</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all" placeholder="您的企业名称" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">需求描述*</label>
                  <textarea className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition-all h-32 resize-none" placeholder="请简要描述您的需求" required></textarea>
                </div>
                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                  提交咨询 <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

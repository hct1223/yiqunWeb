import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Shield, Zap, Users, Award, Rocket, Code, Smartphone,
  Globe, BarChart, Cpu, Search, MessageSquare,
  Building2, BrainCircuit, Target, Eye,
  Send, MapPin, Phone, Mail, ArrowRight
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { solutions } from '../data/solutions';

export default function Home() {

  return (
    <div className="overflow-hidden" id="top">
      {/* Hero Section with Carousel */}
      <section className="relative min-h-[600px] lg:min-h-[700px] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />

          {/* Floating Orbs */}
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[128px]"
            animate={{
              scale: [1.3, 1, 1.3],
              x: [0, -30, 0],
              y: [0, 20, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="container-custom relative z-10 h-full flex items-center">
          <div className="w-full py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="text-white space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: -20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-primary/10"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  企业数字化应用落地服务专家
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 150 }}
                  className="text-4xl md:text-6xl font-bold leading-tight"
                >
                  <span className="inline-block">
                    {Array.from("赋能企业").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 + i * 0.05 }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                  {" "}
                  <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]"
                    style={{
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 3s linear infinite',
                    }}
                  >
                    数字化转型
                  </span>
                  {" "}
                  <span className="inline-block">
                    {Array.from("与业务增长").map((char, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.05 }}
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg text-slate-300"
                >
                  致力于提升企业效率和生产力，帮助企业快速发展 · 数字化应用落地
                </motion.p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-3 gap-6 pt-4"
                >
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">2016</div>
                    <div className="text-xs text-slate-400">成立年份</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">100+</div>
                    <div className="text-xs text-slate-400">落地项目</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary">90%</div>
                    <div className="text-xs text-slate-400">客户续约率</div>
                  </div>
                </motion.div>
              </div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="hidden lg:flex aspect-square rounded-3xl bg-gradient-to-br from-slate-800 to-slate-700 items-center justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-emerald-500 opacity-20" />
                <motion.img
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 0.8, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                  alt="企业数字化转型"
                  className="w-full h-full object-cover rounded-3xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Add shimmer animation keyframes */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 3s linear infinite;
        }
      `}</style>

      {/* Core Advantages */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            subtitle="Core Advantages"
            title="核心优势"
            description="十年沉淀，铸就卓越实力"
          />
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: "01",
                icon: <Cpu size={32} />,
                title: "技术驱动",
                tag: "70% 研发团队",
                desc: "高新技术企业认证，核心技术100%自主研发，拥有微服务架构、AI算法、移动开发等全栈技术能力，确保系统安全可控、技术领先。"
              },
              {
                number: "02",
                icon: <Search size={32} />,
                title: "垂直深耕",
                tag: "10年+ 行业经验",
                desc: "专注科研院所、特种设备检测、商业地产三大垂直领域，深入了解业务流程与行业规范，提供的解决方案与业务需求1:1精准匹配。"
              },
              {
                number: "03",
                icon: <Users size={32} />,
                title: "全栈服务",
                tag: "一站式交付",
                desc: "从需求调研、方案设计、UI/UX设计到系统研发、测试部署、运维运营，提供全生命周期IT服务，无需对接多家供应商，省心省力。"
              },
              {
                number: "04",
                icon: <Award size={32} />,
                title: "标杆背书",
                tag: "100% 交付率",
                desc: "服务中国赛宝实验室、广州特种设备检测研究院、太古汇、恒隆地产、雀巢等头部企业，所有项目按时交付验收，客户续约率超过90%。"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="flex gap-6 p-8 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  {/* Number Badge */}
                  <div className="relative shrink-0">
                    <div className="text-6xl font-bold text-slate-100 group-hover:text-primary/10 transition-colors">
                      {item.number}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-primary text-slate-600 group-hover:text-white transition-all duration-300 flex items-center justify-center">
                        <span className="[&_svg]:w-8 [&_svg]:h-8 [&_svg]:transition-colors [&_svg]:duration-300">
                          {React.cloneElement(item.icon as React.ReactElement, {
                            className: 'w-8 h-8 text-current'
                          })}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                      <span className="shrink-0 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold">
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-primary/30" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Matrix */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
        </div>

        <div className="container-custom relative z-10">
          <SectionHeader
            light
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
                color: "from-blue-500 to-cyan-400",
                glow: "shadow-blue-500/50"
              },
              {
                icon: <Code size={24} />,
                name: "定制开发",
                desc: "基于微服务架构，为企业量身打造高可用、可扩展的核心业务系统。",
                color: "from-indigo-500 to-purple-500",
                glow: "shadow-indigo-500/50"
              },
              {
                icon: <Smartphone size={24} />,
                name: "移动App开发",
                desc: "覆盖iOS/Android原生及跨平台开发，打造极致流畅的移动端交互体验。",
                color: "from-purple-500 to-pink-500",
                glow: "shadow-purple-500/50"
              },
              {
                icon: <MessageSquare size={24} />,
                name: "微信小程序开发",
                desc: "充分利用微信生态优势，快速构建轻量化、高转化的业务触达入口。",
                color: "from-emerald-500 to-teal-400",
                glow: "shadow-emerald-500/50"
              },
              {
                icon: <Globe size={24} />,
                name: "响应式网站建设",
                desc: "适配全终端的品牌门户建设，兼顾视觉美感与SEO优化。",
                color: "from-sky-500 to-blue-400",
                glow: "shadow-sky-500/50"
              },
              {
                icon: <Rocket size={24} />,
                name: "行业解决方案定制",
                desc: "针对科研、特检、地产等垂直赛道，提供1:1匹配业务的闭环方案。",
                color: "from-orange-500 to-amber-400",
                glow: "shadow-orange-500/50"
              },
              {
                icon: <Zap size={24} />,
                name: "H5营销活动开发",
                desc: "创意交互与高性能渲染结合，助力企业实现社交裂变与品牌传播。",
                color: "from-yellow-500 to-orange-400",
                glow: "shadow-yellow-500/50"
              },
              {
                icon: <Shield size={24} />,
                name: "系统运维保障",
                desc: "7*24小时全方位监控与技术支持，确保企业数字化资产安全稳定运行。",
                color: "from-rose-500 to-pink-400",
                glow: "shadow-rose-500/50"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Card with glassmorphism effect */}
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-8 overflow-hidden">
                  {/* Animated gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Floating glow effect */}
                  <motion.div
                    className={`absolute -right-16 -top-16 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    animate={i % 2 === 0 ? { scale: [1, 1.2, 1], rotate: [0, 90, 0] } : { scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  />

                  <div className="relative z-10 space-y-5">
                    {/* Icon with animated background */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg ${item.glow}`}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {React.cloneElement(item.icon as React.ReactElement, {
                        className: 'text-white',
                        size: 24
                      })}
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary/80 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {item.name}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors">
                        {item.desc}
                      </p>
                    </div>

                    {/* Animated underline on hover */}
                    <div className="h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent overflow-hidden">
                      <motion.div
                        className={`h-full w-full bg-gradient-to-r ${item.color}`}
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '0%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.8 }}
                      />
                    </div>
                  </div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom accent */}
          <div className="mt-16 flex justify-center">
            <motion.div
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
              <span className="text-sm text-slate-400">全方位数字化解决方案</span>
            </motion.div>
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
            description="紧跟人工智能浪潮，我们将先进的AI技术转化为可落地的业务应用，助力企业从「数字化」迈向「智能化」。"
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
                desc: "开发具备任务规划、工具调用能力的智能体，自动化处理重复性业务流程，实现从「人找工具」到「工具找人」的转变。",
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

      {/* Solutions Preview */}
      <section className="py-24 bg-slate-50" id="solutions-preview">
        <div className="container-custom">
          <SectionHeader
            subtitle="Industry Solutions"
            title="聚焦核心赛道的专题级解决方案"
            description="深入行业场景，为企业量身定制可进化的数字化专题方案"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {solutions.map((solution, i) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-all relative">
                  <div className="group-hover:opacity-0 transition-opacity [&>svg]:text-blue-500 [&>svg]:stroke-current">
                    {React.cloneElement(solution.icon as React.ReactElement, {
                      size: 24
                    })}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity [&>svg]:text-white [&>svg]:stroke-current">
                    {React.cloneElement(solution.icon as React.ReactElement, {
                      size: 24
                    })}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{solution.title}</h3>
                <p className="text-sm text-slate-600 line-clamp-2 mb-4">{solution.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.modules.slice(0, 2).map((module, j) => (
                    <span key={j} className="px-2 py-1 rounded-md bg-slate-100 text-xs text-slate-600">
                      {module}
                    </span>
                  ))}
                  {solution.modules.length > 2 && (
                    <span className="px-2 py-1 rounded-md bg-slate-100 text-xs text-slate-500">
                      +{solution.modules.length - 2}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all"
            >
              查看全部解决方案
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            subtitle="Our Partners"
            title="值得信赖的合作伙伴"
            description="携手行业领军企业，共创数字化未来"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { name: "中国赛宝实验室", type: "科研机构", logo: "/logos/ceprei.png" },
              { name: "广州特种设备检测研究院", type: "检测机构", logo: "/logos/gzsei.png" },
              { name: "雀巢", type: "食品饮料", logo: "/logos/nestle.jpeg" },
              { name: "恒隆地产", type: "商业地产", logo: "/logos/hanglung.png" },
              { name: "太古汇", type: "商业地产", logo: "/logos/taikoo.jpeg" },
              { name: "香港新世界", type: "商业地产", logo: "/logos/newworld.png" }
            ].map((partner, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group h-full"
              >
                <div className="h-full p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 hover:bg-white hover:shadow-xl transition-all flex flex-col">
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-slate-100 to-slate-50 flex items-center justify-center mb-4 group-hover:from-primary/10 group-hover:to-primary/5 transition-all p-4 shrink-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <Building2 size={40} className="text-slate-400 group-hover:text-primary transition-colors hidden" />
                  </div>
                  <div className="flex-1 flex flex-col justify-end min-h-[3.5rem]">
                    <h4 className="text-sm font-bold text-slate-900 text-center mb-1">{partner.name}</h4>
                    <p className="text-xs text-slate-500 text-center">{partner.type}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
                    <p className="text-slate-600">广州市天河区保利中景大厦2412B</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Phone size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">咨询热线</h4>
                    <p className="text-slate-600">15221195697</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0"><Mail size={24} /></div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">联系邮箱</h4>
                    <p className="text-slate-600">420780598@qq.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 地图 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white p-2 rounded-3xl shadow-2xl border border-slate-100"
            >
              <div className="w-full h-80 rounded-2xl overflow-hidden">
                <iframe
                  src="https://map.baidu.com/search/保利中景大厦/@12959220,4825350,15z?querytype=s&da_src=shareurl&wd=保利中景大厦&c=257&src=0&pn=0&sug=0&l=15&b=(12951220,4817350;12967220,4833350)&from=webmap&biz_forward=%7B%22scaler%22:1,%22styles%22:%22pl%22%7D"
                  title="公司地址"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

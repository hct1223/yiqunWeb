import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  BrainCircuit, Eye, Target, BarChart, Bot, Sparkles,
  Code, Zap, Shield, ArrowRight, CheckCircle, TrendingUp,
  FileSearch, MessageSquare, Database, Globe, Search
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function AI() {
  const services = [
    {
      id: 1,
      icon: <BrainCircuit size={32} />,
      title: "大模型私有化部署",
      subtitle: "Enterprise LLM",
      desc: "基于开源大模型提供私有化部署方案，构建企业专属知识库，解决数据安全顾虑，提升内部知识检索与问答效率。",
      features: ["私有化部署", "RAG架构", "知识库构建", "数据安全保障"],
      color: "from-blue-500 to-cyan-400",
      bgColor: "bg-blue-50"
    },
    {
      id: 2,
      icon: <Eye size={32} />,
      title: "AI-OCR 智能识别",
      subtitle: "Smart OCR",
      desc: "深度定制的OCR识别引擎，支持复杂表格、手写体、多语种票据的高精度识别，已成功应用于商业地产财务审核场景。",
      features: ["高精度识别", "复杂场景适配", "自动化审核", "批量处理"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-50"
    },
    {
      id: 3,
      icon: <Bot size={32} />,
      title: "AI智能体开发",
      subtitle: "AI Agents",
      desc: "开发具备任务规划、工具调用能力的智能体，自动化处理重复性业务流程，实现从「人找工具」到「工具找人」的转变。",
      features: ["流程自动化", "智能客服", "决策辅助", "任务规划"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      id: 4,
      icon: <BarChart size={32} />,
      title: "智能数据洞察",
      subtitle: "Data Intelligence",
      desc: "利用机器学习算法对海量业务数据进行深度挖掘，提供销量预测、故障预警、用户画像等决策支持。",
      features: ["预测性维护", "精准营销", "风险控制", "趋势分析"],
      color: "from-emerald-500 to-teal-400",
      bgColor: "bg-emerald-50"
    }
  ];

  const solutions = [
    {
      icon: <FileSearch size={40} />,
      title: "智能文档处理",
      desc: "自动识别、分类、提取文档关键信息，大幅提升文档处理效率",
      tags: ["OCR识别", "智能分类", "信息提取"]
    },
    {
      icon: <MessageSquare size={40} />,
      title: "智能客服系统",
      desc: "7x24小时在线响应，多轮对话理解，精准解答用户问题",
      tags: ["自然语言处理", "知识库", "多轮对话"]
    },
    {
      icon: <Database size={40} />,
      title: "企业知识库",
      desc: "沉淀企业智慧，构建可检索、可复用的知识管理体系",
      tags: ["向量存储", "语义搜索", "知识图谱"]
    },
    {
      icon: <TrendingUp size={40} />,
      title: "业务预测分析",
      desc: "基于历史数据预测未来趋势，为经营决策提供数据支撑",
      tags: ["时序预测", "异常检测", "趋势分析"]
    },
    {
      icon: <Code size={40} />,
      title: "智能代码助手",
      desc: "辅助开发人员编写代码、代码审查、自动化测试，提升开发效率",
      tags: ["代码生成", "代码审查", "自动化测试"]
    },
    {
      icon: <Shield size={40} />,
      title: "智能风控系统",
      desc: "实时监控业务风险，智能识别异常行为，提前预警潜在风险",
      tags: ["异常检测", "风险评分", "实时监控"]
    }
  ];

  const advantages = [
    {
      number: "01",
      icon: <Sparkles className="text-primary" size={28} />,
      title: "前沿技术",
      desc: "紧跟AI技术发展趋势，深度整合大模型、OCR、智能体等前沿技术，确保方案技术领先。"
    },
    {
      number: "02",
      icon: <Target className="text-primary" size={28} />,
      title: "场景落地",
      desc: "深入了解行业业务场景，将AI技术与实际业务需求深度结合，提供可落地的解决方案。"
    },
    {
      number: "03",
      icon: <Shield className="text-primary" size={28} />,
      title: "数据安全",
      desc: "支持私有化部署，数据完全自主可控，解决企业对数据安全的后顾之忧。"
    },
    {
      number: "04",
      icon: <Zap className="text-primary" size={28} />,
      title: "快速交付",
      desc: "成熟的AI技术栈和丰富的项目经验，确保项目快速落地，快速见效。"
    }
  ];

  const process = [
    {
      step: "01",
      title: "需求分析",
      desc: "深入了解业务场景，识别AI应用机会点",
      icon: <Search size={24} />
    },
    {
      step: "02",
      title: "方案设计",
      desc: "制定AI技术方案，设计系统架构",
      icon: <Code size={24} />
    },
    {
      step: "03",
      title: "模型训练",
      desc: "基于业务数据训练和优化AI模型",
      icon: <BrainCircuit size={24} />
    },
    {
      step: "04",
      title: "系统集成",
      desc: "将AI能力集成到现有业务系统",
      icon: <Globe size={24} />
    },
    {
      step: "05",
      title: "持续优化",
      desc: "监控模型效果，持续迭代优化",
      icon: <TrendingUp size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-bold"
            >
              <Sparkles size={16} />
              AI-Powered Solutions
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              AI赋能，
              <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent">
                重塑企业生产力
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              紧跟人工智能浪潮，我们将先进的AI技术转化为可落地的业务应用，
              助力企业从「数字化」迈向「智能化」。
            </motion.p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            subtitle="Our Services"
            title="核心AI服务"
            description="全方位AI技术能力，助力企业智能化转型"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className={`p-8 rounded-3xl ${service.bgColor} border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all h-full`}>
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">{service.title}</h3>
                      <p className="text-sm text-slate-500 font-medium">{service.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, j) => (
                      <span key={j} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-600">
                        <CheckCircle size={12} className="text-primary" />
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Solutions */}
      <section className="py-24 bg-slate-50" id="solutions">
        <div className="container-custom">
          <SectionHeader
            subtitle="AI Solutions"
            title="AI应用场景"
            description="覆盖多业务场景的智能化解决方案"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 border border-slate-100 hover:border-primary/30 hover:shadow-xl transition-all h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-emerald-500/10 text-primary flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-emerald-500 group-hover:text-white transition-all">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{solution.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {solution.tags.map((tag, j) => (
                      <span key={j} className="px-2.5 py-1 rounded-md bg-slate-100 text-xs text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <SectionHeader
            subtitle="Why Choose Us"
            title="为什么选择我们"
            description="技术实力与行业经验的完美结合"
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {advantages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="flex gap-6 p-8 rounded-2xl border border-slate-100 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                  <div className="relative shrink-0">
                    <div className="text-6xl font-bold text-slate-100 group-hover:text-primary/10 transition-colors">
                      {item.number}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom relative z-10">
          <SectionHeader
            light
            subtitle="Our Process"
            title="AI项目落地流程"
            description="标准化实施流程，确保项目成功交付"
          />

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-6">
              {process.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 text-center hover:bg-white/10 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center text-white mx-auto mb-4">
                      {item.icon}
                    </div>
                    <div className="text-xs font-bold text-primary mb-2">{item.step}</div>
                    <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Connector */}
                  {i < process.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-emerald-500" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white" id="contact">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="max-w-3xl mx-auto">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-emerald-500 flex items-center justify-center text-white mx-auto mb-8">
                <Sparkles size={40} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                准备开启AI智能化转型之旅？
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                让我们与您携手，将AI技术转化为实际生产力，共创企业智能化未来
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all"
                >
                  联系我们
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/cases"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all"
                >
                  查看案例
                  <CheckCircle size={18} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  FlaskConical, ShieldCheck, Building2, Gamepad2,
  Shield, Layers, Zap, CheckCircle, ArrowRight, BarChart,
  Eye, Target, Cpu, MessageSquare, TrendingUp, Award,
  Building, Users, Sparkles, Database
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import { solutions } from '../data/solutions';
import { cn } from '../lib/utils';

const iconMap = {
  'research': <FlaskConical size={28} />,
  'inspection': <ShieldCheck size={28} />,
  'realestate': <Building2 size={28} />,
  'h5game': <Gamepad2 size={28} />,
};

export default function Solutions() {
  // 默认显示第一个解决方案
  const [activeFilter, setActiveFilter] = useState<string>('research');

  const currentSolution = solutions.find(s => s.id === activeFilter)!;

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
              Industry Solutions
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              行业解决方案
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              深入行业场景，为企业量身定制可进化的数字化专题方案
            </motion.p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-16 z-40 shadow-md">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {solutions.map((sol) => (
              <button
                key={sol.id}
                onClick={() => setActiveFilter(sol.id)}
                className={cn(
                  "px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 flex items-center gap-2",
                  activeFilter === sol.id
                    ? "bg-primary text-white shadow-lg shadow-primary/30 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {iconMap[sol.id as keyof typeof iconMap]}
                {sol.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Content */}
      <AnimatePresence mode="wait">
        <motion.section
          key={activeFilter}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
          className="py-16 bg-white"
        >
          <div className="container-custom">
            {/* Header Section */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                    {currentSolution.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary uppercase tracking-widest">{currentSolution.subtitle}</h3>
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{currentSolution.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">{currentSolution.desc}</p>
              </div>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={currentSolution.image}
                  alt={currentSolution.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Pain Points */}
            <div className="mb-16">
              <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                  <Shield size={24} />
                </div>
                行业痛点
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                {currentSolution.painPoints.map((point, i) => (
                  <div key={i} className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      </div>
                      <p className="text-slate-700 font-medium">{point}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 项目背景 - 特种设备检测专属 */}
            {activeFilter === 'inspection' && currentSolution.projectBackground && (
              <div className="mb-16">
                <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Building size={24} />
                  </div>
                  项目背景
                </h4>

                {/* 客户介绍 */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200 mb-6">
                  <h5 className="text-lg font-bold text-slate-900 mb-3">{currentSolution.projectBackground.client}</h5>
                  <p className="text-slate-700 leading-relaxed">{currentSolution.projectBackground.clientDesc}</p>
                </div>

                {/* 需求与挑战 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <h5 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Target size={20} className="text-emerald-600" />
                      项目需求
                    </h5>
                    <ul className="space-y-3">
                      {currentSolution.projectBackground.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                          <span className="text-slate-700 text-sm leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <h5 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Shield size={20} className="text-red-600" />
                      面临挑战
                    </h5>
                    <ul className="space-y-3">
                      {currentSolution.projectBackground.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                          <span className="text-slate-700 text-sm leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 项目背景 - H5游戏专属 */}
            {activeFilter === 'h5game' && currentSolution.projectBackground && (
              <div className="mb-16">
                <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center">
                    <Building size={24} />
                  </div>
                  项目背景
                </h4>

                {/* 客户介绍 */}
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200 mb-6">
                  <h5 className="text-lg font-bold text-slate-900 mb-3">{currentSolution.projectBackground.client}</h5>
                  <p className="text-slate-700 leading-relaxed">{currentSolution.projectBackground.clientDesc}</p>
                </div>

                {/* 需求与挑战 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <h5 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Target size={20} className="text-emerald-600" />
                      项目需求
                    </h5>
                    <ul className="space-y-3">
                      {currentSolution.projectBackground.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                          <span className="text-slate-700 text-sm leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <h5 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Shield size={20} className="text-red-600" />
                      面临挑战
                    </h5>
                    <ul className="space-y-3">
                      {currentSolution.projectBackground.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                          <span className="text-slate-700 text-sm leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 项目背景 - 科研院所专属 */}
            {activeFilter === 'research' && currentSolution.projectBackground && (
              <div className="mb-16">
                <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                    <Building size={24} />
                  </div>
                  项目背景
                </h4>

                {/* 客户介绍 */}
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200 mb-6">
                  <h5 className="text-lg font-bold text-slate-900 mb-3">{currentSolution.projectBackground.client}</h5>
                  <p className="text-slate-700 leading-relaxed">{currentSolution.projectBackground.clientDesc}</p>
                </div>

                {/* 需求与挑战 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <h5 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Target size={20} className="text-emerald-600" />
                      项目需求
                    </h5>
                    <ul className="space-y-3">
                      {currentSolution.projectBackground.requirements.map((req, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                          <span className="text-slate-700 text-sm leading-relaxed">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-slate-200">
                    <h5 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Shield size={20} className="text-red-600" />
                      面临挑战
                    </h5>
                    <ul className="space-y-3">
                      {currentSolution.projectBackground.challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                          <span className="text-slate-700 text-sm leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* 商业地产专属：客群分层差异化运营策略 */}
            {activeFilter === 'realestate' && currentSolution.customerSegments && (
              <div className="mb-16">
                <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 text-violet-600 flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  客群分层差异化运营策略
                </h4>

                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  {/* 左侧：金字塔结构 */}
                  <div className="space-y-3">
                    {currentSolution.customerSegments?.map((segment, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex justify-center"
                      >
                        <div
                          className="shadow-lg cursor-pointer hover:shadow-xl transition-all flex items-center justify-between px-6"
                          style={{
                            background: i === 0
                              ? 'linear-gradient(to right, #f59e0b, #f97316, #f59e0b)'
                              : i === 1
                              ? 'linear-gradient(to right, #3b82f6, #06b6d4, #3b82f6)'
                              : 'linear-gradient(to right, #10b981, #14b8a6, #10b981)',
                            clipPath: i === 0
                              ? 'polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)'
                              : i === 1
                              ? 'polygon(4% 0%, 96% 0%, 100% 100%, 0% 100%)'
                              : 'polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%)',
                            width: i === 0 ? '280px' : i === 1 ? '360px' : '440px',
                            minHeight: '99px'
                          }}
                        >
                          <div className="flex items-center gap-3">
                            {i === 0 && <Award size={18} className="text-white shrink-0" />}
                            {i === 1 && <TrendingUp size={18} className="text-white shrink-0" />}
                            {i === 2 && <Users size={18} className="text-white shrink-0" />}
                            <span className="text-sm font-bold text-white">{segment.title}</span>
                          </div>
                          <span className="text-xs font-medium text-white/90">{segment.target}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* 右侧：分层运营策略 */}
                  <div className="space-y-3">
                    {currentSolution.customerSegments?.map((segment, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="rounded-xl px-5 py-4 border-2 shadow-sm hover:shadow-md transition-all"
                        style={{
                          backgroundColor: i === 0 ? '#fef3c7' : i === 1 ? '#dbeafe' : '#d1fae5',
                          borderColor: i === 0 ? '#f59e0b' : i === 1 ? '#3b82f6' : '#10b981'
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                            style={{
                              background: i === 0
                                ? 'linear-gradient(to right, #f59e0b, #f97316)'
                                : i === 1
                                ? 'linear-gradient(to right, #3b82f6, #06b6d4)'
                                : 'linear-gradient(to right, #10b981, #14b8a6)'
                            }}
                          >
                            {i === 0 && <Award size={18} className="text-white" />}
                            {i === 1 && <TrendingUp size={18} className="text-white" />}
                            {i === 2 && <Users size={18} className="text-white" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h6 className="text-sm font-bold text-slate-900">{segment.title}</h6>
                              <span
                                className="text-xs px-2 py-0.5 rounded-full text-white font-bold"
                                style={{
                                  background: i === 0
                                    ? 'linear-gradient(to right, #f59e0b, #f97316)'
                                    : i === 1
                                    ? 'linear-gradient(to right, #3b82f6, #06b6d4)'
                                    : 'linear-gradient(to right, #10b981, #14b8a6)'
                                }}
                              >
                                {segment.level}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 leading-relaxed">{segment.desc}</p>
                          </div>
                          <div className="text-xs font-medium text-primary">{segment.target}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 解决案设计 - 商业地产、特种设备检测、H5游戏和科研院所 */}
            {(activeFilter === 'realestate' || activeFilter === 'inspection' || activeFilter === 'h5game' || activeFilter === 'research') && currentSolution.solutionDesign && (
              <div className="mb-16">
                <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-500 text-white flex items-center justify-center">
                    <Sparkles size={24} />
                  </div>
                  解决方案设计
                </h4>

                {/* 方案概述 */}
                <div className="bg-gradient-to-br from-primary/5 to-emerald-500/5 rounded-2xl p-8 border border-primary/20 mb-8">
                  <div className="text-center max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                      {currentSolution.solutionDesign.subtitle}
                    </div>
                    <h5 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {currentSolution.solutionDesign.title}
                    </h5>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {currentSolution.solutionDesign.desc}
                    </p>
                    {activeFilter === 'realestate' && (
                      <div className="flex flex-wrap justify-center gap-4 mt-8">
                        <div className="px-6 py-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                          <div className="text-2xl font-bold text-primary mb-1">CDP</div>
                          <div className="text-xs text-slate-500">客户数据平台</div>
                        </div>
                        <div className="text-3xl text-primary/30">+</div>
                        <div className="px-6 py-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                          <div className="text-2xl font-bold text-emerald-500 mb-1">MA</div>
                          <div className="text-xs text-slate-500">营销自动化</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* 方案架构图 - 特种设备检测 */}
                {activeFilter === 'inspection' && (
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
                  <div className="text-center mb-8">
                    <h5 className="text-2xl font-bold text-white mb-2">国产化微服务架构图</h5>
                    <p className="text-slate-400">私有云+自建K8s容器集群，全链路企业级架构</p>
                  </div>

                  {/* 架构图层级 */}
                  <div className="max-w-5xl mx-auto space-y-3">

                    {/* 第5层：接入入口层 */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-5 shadow-lg shadow-orange-500/30 border-2 border-orange-400">
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                              <MessageSquare size={24} className="text-white" />
                            </div>
                            <div>
                              <div className="text-white/80 text-xs font-medium">Layer 5 · Access</div>
                              <h5 className="text-lg font-bold text-white">接入入口层</h5>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 text-xs">
                            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium">Web端(内网/VPN)</span>
                            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium">APP端(公网)</span>
                            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium">外部系统</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 top-full flex flex-col items-center">
                        <div className="w-0.5 h-3 bg-gradient-to-b from-orange-500 to-blue-500" />
                        <ArrowRight size={16} className="text-blue-500 rotate-90 -mt-1" />
                      </div>
                    </motion.div>

                    {/* 第4层：流量接入层 */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="relative"
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-5 shadow-lg shadow-blue-500/30 border-2 border-blue-400">
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                              <Zap size={24} className="text-white" />
                            </div>
                            <div>
                              <div className="text-white/80 text-xs font-medium">Layer 4 · Traffic</div>
                              <h5 className="text-lg font-bold text-white">流量接入层</h5>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2 text-xs">
                            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium">Tengine LB集群</span>
                            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium">负载均衡</span>
                            <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium">流量分发</span>
                          </div>
                        </div>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 top-full flex flex-col items-center">
                        <div className="w-0.5 h-3 bg-gradient-to-b from-blue-500 to-emerald-500" />
                        <ArrowRight size={16} className="text-emerald-500 rotate-90 -mt-1" />
                      </div>
                    </motion.div>

                    {/* 第3层：K8s容器集群 */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-5 shadow-lg shadow-emerald-500/30 border-2 border-emerald-400"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                          <Cpu size={24} className="text-white" />
                        </div>
                        <div>
                          <div className="text-white/80 text-xs font-medium">Layer 3 · K8s Cluster</div>
                          <h5 className="text-lg font-bold text-white">K8s容器集群</h5>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                          <div className="text-white/80 text-xs mb-1">网关后台</div>
                          <div className="text-white text-sm font-medium">API管理</div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                          <div className="text-white/80 text-xs mb-1">动态网关</div>
                          <div className="text-white text-sm font-medium">7大插件</div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                          <div className="text-white/80 text-xs mb-1">业务模块</div>
                          <div className="text-white text-sm font-medium">微服务</div>
                        </div>
                        <div className="bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                          <div className="text-white/80 text-xs mb-1">日志集群</div>
                          <div className="text-white text-sm font-medium">LPG</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* 第2层：基础资源层 */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl p-5 shadow-lg shadow-violet-500/30 border-2 border-violet-400"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                          <Database size={24} className="text-white" />
                        </div>
                        <div>
                          <div className="text-white/80 text-xs font-medium">Layer 2 · Infrastructure</div>
                          <h5 className="text-lg font-bold text-white">基础资源层（国产化）</h5>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {['达梦数据库V8.4', 'Tendis缓存', 'GlusterFS存储', 'RocketMQ', 'Drone CI/CD', 'Docker Registry'].map((item, i) => (
                          <span key={i} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white text-xs font-medium">
                            {item}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* 第1层：对接与容灾 */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-5 shadow-lg shadow-rose-500/30 border-2 border-rose-400"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                          <Shield size={24} className="text-white" />
                        </div>
                        <div>
                          <div className="text-white/80 text-xs font-medium">Layer 1 · Integration & DR</div>
                          <h5 className="text-lg font-bold text-white">对接系统与容灾备份</h5>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium">市局监察系统</span>
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium">短信系统</span>
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium">省非税系统</span>
                        <span className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium">定时备份(18:00/0:00)</span>
                      </div>
                    </motion.div>

                  </div>

                  {/* 图例说明 */}
                  <div className="mt-6 pt-5 border-t border-white/10">
                    <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-amber-500" />
                        <span>接入层：Web/APP/外部系统</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span>流量层：负载均衡</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                        <span>K8s层：微服务集群</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-violet-500" />
                        <span>资源层：国产化中间件</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500" />
                        <span>集成层：政务对接+容灾</span>
                      </div>
                    </div>
                  </div>
                </div>
                )}

                {/* 方案架构图 - 仅商业地产 */}
                {activeFilter === 'realestate' && (
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12">
                  <div className="text-center mb-8">
                    <h5 className="text-2xl font-bold text-white mb-2">系统架构层级图</h5>
                    <p className="text-slate-400">CDP + MA 双核心驱动，全链路数字化营销闭环</p>
                  </div>

                  {/* 层级化架构图 */}
                  <div className="max-w-4xl mx-auto space-y-4">

                    {/* 第4层：渠道触达层 */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl p-6 shadow-lg shadow-purple-500/30 border-2 border-purple-400">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                              <MessageSquare size={28} className="text-white" />
                            </div>
                            <div>
                              <div className="text-white/80 text-sm font-medium">Layer 4</div>
                              <h5 className="text-xl font-bold text-white">渠道触达层</h5>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {['企微', '公众号', '小程序', '短信', 'APP'].map((channel, i) => (
                              <span key={i} className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
                                {channel}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* 连接线箭头 */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full flex flex-col items-center">
                        <div className="w-0.5 h-3 bg-gradient-to-b from-purple-500 to-emerald-500" />
                        <ArrowRight size={16} className="text-emerald-500 rotate-90 -mt-1" />
                      </div>
                    </motion.div>

                    {/* 第3层：CRM会员管理系统 */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="relative"
                    >
                      <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl p-6 shadow-lg shadow-emerald-500/30 border-2 border-emerald-400">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                              <Users size={28} className="text-white" />
                            </div>
                            <div>
                              <div className="text-white/80 text-sm font-medium">Layer 3</div>
                              <h5 className="text-xl font-bold text-white">CRM会员管理系统</h5>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {['全渠道会员', '积分权益', '优惠券', '会员卡', '储值管理'].map((feature, i) => (
                              <span key={i} className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* 连接线箭头 */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full flex flex-col items-center">
                        <div className="w-0.5 h-3 bg-gradient-to-b from-emerald-500 to-blue-500" />
                        <ArrowRight size={16} className="text-blue-500 rotate-90 -mt-1" />
                      </div>
                    </motion.div>

                    {/* 第2层：MA营销自动化平台 */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="relative"
                    >
                      <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-6 shadow-lg shadow-blue-500/30 border-2 border-blue-400">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                              <Zap size={28} className="text-white" />
                            </div>
                            <div>
                              <div className="text-white/80 text-sm font-medium">Layer 2</div>
                              <h5 className="text-xl font-bold text-white">MA营销自动化平台</h5>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {['单次触发', '实时触发', '周期触发', '纪念日触发', '外部信号触发'].map((trigger, i) => (
                              <span key={i} className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
                                {trigger}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      {/* 连接线箭头 */}
                      <div className="absolute left-1/2 -translate-x-1/2 top-full flex flex-col items-center">
                        <div className="w-0.5 h-3 bg-gradient-to-b from-blue-500 to-indigo-500" />
                        <ArrowRight size={16} className="text-indigo-500 rotate-90 -mt-1" />
                      </div>
                    </motion.div>

                    {/* 第1层：CDP客户数据平台 - 基础层 */}
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 shadow-lg shadow-indigo-500/30 border-2 border-indigo-400">
                        <div className="flex items-center justify-between flex-wrap gap-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                              <Database size={28} className="text-white" />
                            </div>
                            <div>
                              <div className="text-white/80 text-sm font-medium">Layer 1 · Foundation</div>
                              <h5 className="text-xl font-bold text-white">CDP客户数据平台</h5>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {['全域数据打通', 'ID-Mapping', '用户画像', '标签体系', '客群圈选'].map((capability, i) => (
                              <span key={i} className="px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg text-white text-sm font-medium">
                                {capability}
                              </span>
                            ))}
                          </div>
                        </div>
                        {/* 数据流指示 */}
                        <div className="mt-4 pt-4 border-t border-white/20">
                          <div className="flex items-center justify-center gap-2 text-white/70 text-sm">
                            <ArrowRight size={16} />
                            <span>数据向上流动支撑上层应用，决策向下传导指导数据采集</span>
                            <ArrowRight size={16} className="rotate-180" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* 图例说明 */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-violet-500" />
                        <span>触达层：多渠道用户触点</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-emerald-500" />
                        <span>管理层：会员运营管理</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-blue-500" />
                        <span>自动化层：营销流程自动化</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-indigo-500" />
                        <span>数据层：客户数据资产化</span>
                      </div>
                    </div>
                  </div>
                </div>
                )}
              </div>
            )}

            {/* 商业地产、特种设备检测、H5游戏和科研院所专属内容 */}
            {(activeFilter === 'realestate' || activeFilter === 'inspection' || activeFilter === 'h5game' || activeFilter === 'research') && (
              <>
                {/* 核心能力与服务 */}
                <div className="mb-16">
                  <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 flex items-center justify-center">
                      <Cpu size={24} />
                    </div>
                    核心能力与服务
                  </h4>

                  {/* 服务模块 */}
                  <div className="mb-8">
                    <h5 className="text-lg font-bold text-slate-700 mb-4">核心服务模块</h5>
                    <div className="flex flex-wrap gap-3">
                      {currentSolution.modules.map((module, i) => (
                        <div key={i} className="px-5 py-3 rounded-xl bg-primary/5 border-2 border-primary/20 text-primary font-bold hover:bg-primary hover:text-white transition-all cursor-default">
                          {module}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 核心能力 */}
                  <div>
                    <h5 className="text-lg font-bold text-slate-700 mb-4">技术能力</h5>
                    <div className="grid md:grid-cols-3 gap-6">
                      {currentSolution.coreCapabilities?.map((capability, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all"
                        >
                          <h5 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-slate-200">{capability.category}</h5>
                          <ul className="space-y-3">
                            {capability.items.map((item, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                <span className="text-slate-600 text-sm leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 实施阶段规划 - 落地保障 */}
                <div className="mb-16">
                  <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center">
                      <Target size={24} />
                    </div>
                    项目实施三阶段规划
                  </h4>
                  <div className="space-y-4">
                    {currentSolution.implementationStages?.map((stage, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-6"
                      >
                        <div className="flex flex-col items-center">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-emerald-500 text-white flex items-center justify-center font-bold text-lg">
                            {i + 1}
                          </div>
                          {i < (currentSolution.implementationStages?.length || 0) - 1 && (
                            <div className="w-0.5 flex-1 bg-gradient-to-b from-primary to-emerald-500 my-2" />
                          )}
                        </div>
                        <div className="flex-1 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                          <div className="mb-4">
                            <h5 className="text-lg font-bold text-slate-900">{stage.stage}</h5>
                          </div>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h6 className="text-sm font-bold text-slate-700 mb-2">核心工作</h6>
                              <ul className="space-y-1.5">
                                {stage.works.map((work, j) => (
                                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                    <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                                    {work}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h6 className="text-sm font-bold text-slate-700 mb-2">交付成果</h6>
                              <ul className="space-y-1.5">
                                {stage.deliverables.map((deliverable, j) => (
                                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                                    <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
                                    {deliverable}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* 核心商业价值 - 价值证明 */}
                <div className="mb-16">
                  <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center">
                      <Award size={24} />
                    </div>
                    核心商业价值
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    {currentSolution.businessValues?.map((value, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200"
                      >
                        <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center mb-4">
                          <Award size={24} />
                        </div>
                        <h5 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h5>
                        <p className="text-slate-700 leading-relaxed text-sm">{value.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Customer Cases */}
            <div className="mb-16">
              <h4 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <Building size={24} />
                </div>
                客户案例
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                {currentSolution.cases?.map((caseItem, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Building size={24} />
                      </div>
                      <div className="flex-1">
                        <h5 className="text-xl font-bold text-slate-900 mb-2">{caseItem.title}</h5>
                        <p className="text-slate-600 leading-relaxed">{caseItem.desc}</p>
                      </div>
                    </div>
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-2 text-emerald-600">
                        <TrendingUp size={20} />
                        <span className="font-bold">{caseItem.result}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
              需要定制化解决方案？
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
              我们的专业团队将深入了解您的业务需求，为您量身打造最适合的数字化解决方案
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
                to="/cases"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all flex items-center gap-2"
              >
                <BarChart size={18} />
                查看更多案例
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

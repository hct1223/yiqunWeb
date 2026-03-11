import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  Target, Eye, Heart, Award, Zap, Code, MapPin,
  Phone, Mail, Send, ArrowRight, CheckCircle, Building2,
  Globe, Rocket, Clock
} from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function About() {
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
              About Us
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold text-white"
            >
              关于我们
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-slate-400 max-w-2xl mx-auto"
            >
              企业数字化应用落地服务专家
            </motion.p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-24 bg-white">
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
                subtitle="Company Overview"
                title="公司简介"
              />
              <p className="text-slate-600 leading-relaxed text-lg">
                广州蚁群信息科技有限公司成立于<span className="text-primary font-bold">2016年</span>，是一家以技术创新为驱动、专注于企业数字化应用落地服务的高新技术企业。
              </p>
              <p className="text-slate-600 leading-relaxed">
                我们聚焦科研院所、特种设备检测、商业地产等核心赛道，提供需求调研、方案设计、研发交付、运维运营一站式IT服务，凭借深厚的行业经验、强大的技术实力，已为数十家行业头部企业定制贴合业务的信息化系统。
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 text-center"
                >
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm text-slate-600">行业深耕</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-emerald-500/10 border border-emerald-500/20 text-center"
                >
                  <div className="text-3xl font-bold text-emerald-500 mb-2">100+</div>
                  <div className="text-sm text-slate-600">落地项目</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl bg-gradient-to-br from-blue-500/5 to-blue-500/10 border border-blue-500/20 text-center"
                >
                  <div className="text-3xl font-bold text-blue-500 mb-2">90%</div>
                  <div className="text-sm text-slate-600">客户续约率</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                  alt="Our Team"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-2xl shadow-xl text-white hidden md:block"
              >
                <div className="flex items-center gap-3">
                  <Award size={32} />
                  <div>
                    <div className="text-2xl font-bold">高新技术企业</div>
                    <div className="text-xs opacity-80">技术实力认证</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Capabilities */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container-custom relative z-10">
          <SectionHeader
            light
            subtitle="Service Capabilities"
            title="服务能力"
            description="全栈技术服务，覆盖多元数字化需求"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Globe size={24} />,
                name: "设计咨询",
                desc: "深度调研业务需求，提供专业的数字化转型路径规划与UI/UX设计",
                color: "from-blue-500 to-cyan-400"
              },
              {
                icon: <Code size={24} />,
                name: "定制开发",
                desc: "基于微服务架构，为企业量身打造高可用、可扩展的核心业务系统",
                color: "from-indigo-500 to-purple-500"
              },
              {
                icon: <Rocket size={24} />,
                name: "移动应用",
                desc: "覆盖iOS/Android原生及跨平台开发，打造极致流畅的移动端体验",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: <Zap size={24} />,
                name: "H5营销",
                desc: "创意交互与高性能渲染结合，助力企业实现社交裂变与品牌传播",
                color: "from-emerald-500 to-teal-400"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="relative h-full bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <div className="relative z-10 space-y-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white">{item.name}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-12">
              <SectionHeader
                centered={false}
                subtitle="Contact Us"
                title="联系我们"
                description="如果您有数字化转型相关需求与疑问，欢迎随时联系我们"
              />
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">公司地址</h4>
                    <p className="text-slate-600">广州市天河区保利中景大厦2412B</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">咨询热线</h4>
                    <p className="text-slate-600">15221195697</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail size={24} />
                  </div>
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              准备开启数字化转型之旅？
            </h2>
            <p className="text-slate-400 mb-8 max-w-2xl mx-auto text-lg">
              让我们与您携手，共创企业数字化未来
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/solutions"
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl transition-all flex items-center gap-2"
              >
                查看解决方案
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/cases"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl transition-all flex items-center gap-2"
              >
                客户案例
                <Award size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

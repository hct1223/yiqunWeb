import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img
                src="/logos/ants.png"
                alt="蚁群科技"
                className="w-12 h-8 object-contain"
              />
              <span className="text-white font-bold text-xl">蚁群科技</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              广州蚁群信息科技有限公司（2016年成立），高新技术企业，专注企业数字化应用落地，服务中国赛宝、太古汇等数十家头部企业。
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <MessageSquare size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <Phone size={18} />
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6">核心链接</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">关于我们</Link></li>
              <li><Link to="/solutions" className="hover:text-primary transition-colors">行业解决方案</Link></li>
              <li><Link to="/cases" className="hover:text-primary transition-colors">客户案例</Link></li>
              <li><Link to="/ai" className="hover:text-primary transition-colors">AI应用</Link></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">联系我们</a></li>
              <li><a href="/#top" className="hover:text-primary transition-colors">返回顶部</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">联系我们</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>广州市天河区保利中景大厦2412B</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>15221195697</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>420780598@qq.com</span>
              </li>
            </ul>
          </div>

          {/* QR Code */}
          <div>
            <h4 className="text-white font-bold mb-6">咨询入口</h4>
            <div className="bg-white p-2 rounded-lg inline-block mb-2">
              <img
                src="/logos/ewm.png"
                alt="微信咨询二维码"
                className="w-24 h-24 object-contain"
              />
            </div>
            <p className="text-xs text-slate-500">扫码添加商务顾问，获取一对一专业咨询</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>Copyright © 2025 广州蚁群信息科技有限公司 版权所有</p>
        </div>
      </div>
    </footer>
  );
}

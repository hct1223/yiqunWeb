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
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">
                蚁
              </div>
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
              <li><a href="#about" className="hover:text-primary transition-colors">关于我们</a></li>
              <li><a href="#solutions" className="hover:text-primary transition-colors">行业解决方案</a></li>
              <li><a href="#cases" className="hover:text-primary transition-colors">客户案例</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">联系我们</a></li>
              <li><a href="#top" className="hover:text-primary transition-colors">返回顶部</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">联系我们</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0" />
                <span>广东省广州市天河区</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>xxx-xxxxxxx</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>xxx@yiqunkeji.com</span>
              </li>
            </ul>
          </div>

          {/* QR Code */}
          <div>
            <h4 className="text-white font-bold mb-6">咨询入口</h4>
            <div className="bg-white p-2 rounded-lg inline-block mb-2">
              <div className="w-24 h-24 bg-slate-100 flex items-center justify-center text-slate-400 text-[10px] text-center p-2">
                微信咨询二维码<br/>(备注「官网咨询」)
              </div>
            </div>
            <p className="text-xs text-slate-500">扫码添加商务顾问，获取一对一专业咨询</p>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>Copyright © 2025 广州蚁群信息科技有限公司 版权所有</p>
          <div className="flex gap-6">
            <Link to="#" className="hover:text-slate-300">隐私政策</Link>
            <Link to="#" className="hover:text-slate-300">友情链接</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

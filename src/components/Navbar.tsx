import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: '首页', path: '/' },
  { name: '行业解决方案', path: '/solutions' },
  { name: '客户案例', path: '/cases' },
  { name: 'AI应用', path: '/ai' },
  { name: '关于我们', path: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // 判断是否在首页
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 在非首页页面，始终显示白色背景
  const shouldShowSolidBg = !isHomePage || scrolled;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    // 路由路径不需要特殊处理，React Router会处理
    if (path.startsWith('/#')) {
      // 首页锚点链接
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    } else if (path === '/') {
      // 首页链接，滚动到顶部
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
    } else {
      // 其他页面链接，关闭移动菜单
      setIsOpen(false);
    }
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      shouldShowSolidBg ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    )}>
      <div className="container-custom flex items-center justify-between">
        <a href="#top" onClick={(e) => handleNavClick(e, '/#top')} className="flex items-center gap-2 group">
          <img
            src="/logos/ants.png"
            alt="蚁群科技"
            className="w-16 h-10 object-contain group-hover:rotate-12 transition-transform"
          />
          <div className="flex flex-col">
            <span className={cn("font-bold text-lg leading-none", !shouldShowSolidBg ? "text-white" : "text-slate-900")}>
              蚁群科技
            </span>
            <span className={cn("text-[10px] tracking-widest opacity-70 uppercase", !shouldShowSolidBg ? "text-white" : "text-slate-500")}>
              YI QUN TECHNOLOGY
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                !shouldShowSolidBg ? "text-white/90" : "text-slate-600"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("lg:hidden p-2 rounded-md", !shouldShowSolidBg && isHomePage ? "text-white" : "text-slate-900")}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  className="text-lg font-medium py-2 flex items-center justify-between text-slate-600"
                >
                  {item.name}
                  <ChevronRight size={18} className="opacity-50" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

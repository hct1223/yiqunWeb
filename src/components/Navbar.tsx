import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { name: '首页', path: '/#top' },
  { name: '行业解决方案', path: '/#solutions' },
  { name: '关于我们', path: '/#about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith('/#')) {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    )}>
      <div className="container-custom flex items-center justify-between">
        <a href="#top" onClick={(e) => handleNavClick(e, '/#top')} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:rotate-12 transition-transform">
            蚁
          </div>
          <div className="flex flex-col">
            <span className={cn("font-bold text-lg leading-none", !scrolled ? "text-white" : "text-slate-900")}>
              蚁群科技
            </span>
            <span className={cn("text-[10px] tracking-widest opacity-70 uppercase", !scrolled ? "text-white" : "text-slate-500")}>
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
                !scrolled ? "text-white/90" : "text-slate-600"
              )}
            >
              {item.name}
            </a>
          ))}
          <a href="#contact" onClick={(e) => handleNavClick(e, '/#contact')} className={cn(
            "px-5 py-2 rounded-full text-sm font-semibold transition-all",
            scrolled 
              ? "bg-primary text-white hover:bg-primary-dark" 
              : "bg-white text-primary hover:bg-slate-100"
          )}>
            立即咨询
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={cn("lg:hidden p-2 rounded-md", !scrolled && location.pathname === '/' ? "text-white" : "text-slate-900")}
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
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '/#contact')}
                className="mt-4 bg-primary text-white text-center py-3 rounded-xl font-bold"
              >
                立即咨询
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

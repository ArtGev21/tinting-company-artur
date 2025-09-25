"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Chrome as Home, User, Briefcase, FileText, Divide as LucideIcon, Menu, X, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface NavItem {
  name: string
  url: string
   icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export default function Navigation() {
  const pathname = usePathname()
  const navItems: NavItem[] = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Services", url: "/services", icon: Briefcase },
    { name: "Contact", url: "/contact", icon: FileText },
  ]

  const router = useRouter();
  const [activeTab, setActiveTab] = useState(navItems[0].name)
  const [isMobile, setIsMobile] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    // Sync active tab with current pathname
    const activeItem = navItems.find((item) => item.url === pathname)
    if (activeItem) {
      setActiveTab(activeItem.name)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [pathname, navItems])

  const handleLogout = async () => {
    try {
      await fetch('/api/admin/logout', { method: 'POST' });
      // Clear any client-side storage
      if (typeof window !== 'undefined') {
        sessionStorage.clear();
        localStorage.clear();
      }
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
      router.push('/');
    }
  };

  // Show logout button only on admin dashboard
  const showLogout = pathname === '/admin/dashboard';

  return (
    <div className="fixed w-full top-0 z-50 mb-6 px-4 sm:px-12 pt-4 sm:pt-6 flex justify-between items-center">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-3 bg-secondary-900 border border-border backdrop-blur-lg py-1 px-2 rounded-full shadow-lg"
      >
        <Image src="/logo.png" alt="Logo" width={150} height={40} className="rounded-full" />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        <div className="hidden md:flex justify-between gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer text-md font-semibold px-6 py-2 rounded-full transition-colors",
                  "hover:bg-gray-200",
                  isActive && "bg-muted text-primary"
                )}
              >
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-t-full">
                      <div className="absolute w-12 h-6 bg-primary/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-primary/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </Link>
            )
          })}
        </div>
        {showLogout && (
          <div className="hidden md:flex justify-between bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
            <button
              onClick={handleLogout}
              className="flex gap-1 px-2 text-sm font-semibold text-primary hover:bg-gray-200 transition-colors rounded-full py-2 items-center"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        )}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md bg-background/5 border border-border backdrop-blur-lg shadow-lg text-primary"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-2 left-2 bg-background/5 backdrop-blur-lg border border-border rounded-xl shadow-lg p-4 mt-2 md:hidden flex flex-col space-y-3 z-40">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeTab === item.name

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => {
                  setActiveTab(item.name)
                  setMenuOpen(false)
                }}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
                  "hover:bg-gray-200",
                  isActive && "bg-muted font-semibold"
                )}
              >
                <Icon width={18} height={18} />
                <span>{item.name}</span>
              </Link>
            )
          })}
          {showLogout && (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-md transition-colors hover:bg-gray-200"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Users2,
  ArrowLeftRight,
  Package,
  Wallet,
  Bell,
  FileText,
  Menu,
  X
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", icon: LayoutGrid, label: "Painel", color: "text-red-500" },
  {
    href: "/cadastros",
    icon: Users2,
    label: "Cadastros",
    color: "text-orange-500"
  },
  {
    href: "/movimentacao",
    icon: ArrowLeftRight,
    label: "Movimentação",
    color: "text-green-500"
  },
  {
    href: "/estoque",
    icon: Package,
    label: "Controle de Estoque",
    color: "text-purple-500"
  },
  {
    href: "/caixa",
    icon: Wallet,
    label: "Controle de Caixa",
    color: "text-yellow-500"
  },
  { href: "/alertas", icon: Bell, label: "Alertas", color: "text-blue-500" },
  {
    href: "/relatorios",
    icon: FileText,
    label: "Relatórios",
    color: "text-gray-500"
  }
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const NavItems = () => (
    <ul className="space-y-2">
      {navItems.map(({ href, icon: Icon, label, color }) => (
        <li key={href}>
          <Link
            href={href}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ease-in-out ${
              pathname === href
                ? "bg-pink-100 text-pink-700"
                : "text-gray-700 hover:bg-pink-100"
            }`}
            onClick={() => isMobile && setIsOpen(false)}
          >
            <Icon className={`h-5 w-5 ${color}`} />
            <span className="font-medium">{label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );

  const LogoSection = () => (
    <div className="p-4 flex flex-col items-center relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-pink-300 opacity-70"
        style={{
          filter: "blur(30px)",
          animation: "blob 7s infinite"
        }}
      />
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-9BMFGVhi8nr7p7NSyJNnEJIEUIKO3n.png"
        alt="Voluntários Pela Vida Logo"
        width={150}
        height={150}
        className="relative z-10"
      />
    </div>
  );

  const PixSection = () => (
    <div className="p-4">
      <div className="bg-red-600 text-white p-3 rounded-lg text-center">
        <p className="font-bold">AJUDE CHAVE PIX E-MAIL</p>
        <p className="text-sm mt-1 break-words">
          voluntariospelavidasempre@gmail.com
        </p>
      </div>
    </div>
  );

  const SidebarContent = () => (
    <div className="flex flex-col h-full bg-pink-50">
      <LogoSection />
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <NavItems />
      </nav>
      <PixSection />
    </div>
  );

  return (
    <>
      {isMobile ? (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed top-4 left-4 z-50 lg:hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
            <SidebarContent />
          </SheetContent>
        </Sheet>
      ) : (
        <aside className="hidden lg:flex w-64 min-h-screen bg-pink-50 flex-col shadow-lg">
          <SidebarContent />
        </aside>
      )}
    </>
  );
}

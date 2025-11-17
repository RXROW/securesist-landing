"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Globe,
  Clock,
  Sparkles
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/about" },
      { label: "Careers", href: "/contact" },
      { label: "Press Center", href: "/press-center" },
    ],
    solutions: [
      { label: "Cybersecurity Training", href: "/solutions" },
      { label: "Awareness Programs", href: "/solutions" },
      { label: "Compliance Tools", href: "/solutions" },
      { label: "Risk Assessment", href: "/solutions" },
    ],
    resources: [
      { label: "Blog", href: "/press-center" },
      { label: "Case Studies", href: "/solutions" },
      { label: "Whitepapers", href: "/solutions" },
      { label: "Webinars", href: "/solutions" },
    ],
    support: [
      { label: "Help Center", href: "/contact" },
      { label: "Contact Support", href: "/contact" },
      { label: "Training Resources", href: "/solutions" },
      { label: "API Documentation", href: "/solutions" },
    ],
  };

 
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/securesist",
      label: "Facebook",
      bg: "bg-gradient-to-r from-blue-800 to-blue-700"
    },
    {
      icon: Twitter,
      href: "https://www.twitter.com/securesist",
      label: "Twitter",
      bg: "bg-gradient-to-r from-sky-600 to-blue-500"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/securesist",
      label: "LinkedIn",
      bg: "bg-gradient-to-r from-blue-900 to-blue-800"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/securesist",
      label: "Instagram",
      bg: "bg-gradient-to-r from-pink-700 via-red-600 to-yellow-500"
    },
  ];
  
  return (
    <footer className="bg-white text-slate-900">
      {/* Main Footer Content */}
      <div className="border-b border-slate-200">
        <div className="container py-16">
          <div className="grid gap-8 lg:grid-cols-12">
            {/* Brand Section */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <Link href="/" className="group flex items-center gap-3 transition-all duration-300 hover:scale-105">
                  <div className="relative">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-lg transition-all duration-300 group-hover:shadow-blue-500/25">
                      <Shield className="h-7 w-7 text-white" />
                    </div>
                    <div className="absolute -inset-1 rounded-xl bg-blue-600 opacity-0 blur transition-all duration-300 group-hover:opacity-20" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl font-bold text-blue-400">
                      SecureSist
                    </span>
                    <span className="text-sm font-medium text-slate-500">
                      CYBERSECURITY
                    </span>
                  </div>
                </Link>
              </div>
              
              <p className="mb-6 leading-relaxed text-slate-600">
                Transform your organization's cybersecurity posture with intelligent, 
                role-based training that keeps your team engaged and secure.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>info@securesist.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>123 Security Street, Tech City, TC 12345</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-8">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {/* Company Links */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-slate-900">Company</h3>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.label}>
                        <Link 
                          href={link.href}
                          className="text-slate-600 transition-colors hover:text-blue-600"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions Links */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-slate-900">Solutions</h3>
                  <ul className="space-y-3">
                    {footerLinks.solutions.map((link) => (
                      <li key={link.label}>
                        <Link 
                          href={link.href}
                          className="text-slate-600 transition-colors hover:text-blue-600"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources Links */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-slate-900">Resources</h3>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link) => (
                      <li key={link.label}>
                        <Link 
                          href={link.href}
                          className="text-slate-600 transition-colors hover:text-blue-600"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support Links */}
                <div>
                  <h3 className="mb-4 text-lg font-semibold text-slate-900">Support</h3>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link) => (
                      <li key={link.label}>
                        <Link 
                          href={link.href}
                          className="text-slate-600 transition-colors hover:text-blue-600"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
      {/* Bottom Footer */}
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
          {/* Copyright and Meta Techs Badge */}
          <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6">
            <p className="text-sm text-slate-500">
              © {currentYear} SECURESIST. All rights reserved.
            </p>
         
          </div>
         
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                aria-label={social.label}
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${social.bg} text-white transition-all duration-300 hover:scale-110`}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
           
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;

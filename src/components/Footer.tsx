"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
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
    { icon: Facebook, href: "https://www.facebook.com/securesist", label: "Facebook" },
    { icon: Twitter, href: "https://www.twitter.com/securesist", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/securesist", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/securesist", label: "Instagram" },
  ];
  
  return (
    <footer className="bg-slate-950 text-slate-50">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image 
                src="/logo.png" 
                alt="SecureSist Logo" 
                width={130} 
                height={130}
              />
            </Link>
            
            <p className="mb-6 text-slate-300 text-sm leading-relaxed">
              Transform your organization's cybersecurity posture with intelligent, 
              role-based training that keeps your team engaged and secure.
            </p>
            
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:info@securesist.com" className="hover:text-blue-400 transition-colors">
                  info@securesist.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+15551234567" className="hover:text-blue-400 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>123 Security Street, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(footerLinks).map(([key, links]) => (
                <div key={key}>
                  <h3 className="mb-4 text-sm font-semibold text-white uppercase tracking-wider">
                    {key}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link.label}>
                        <Link 
                          href={link.href}
                          className="text-sm text-slate-300 hover:text-blue-400 transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-800">
        <div className="container py-6">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="text-sm text-slate-400">
              © {currentYear} SECURESIST. All rights reserved.
            </p>
            
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="h-9 w-9 flex items-center justify-center rounded-lg bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

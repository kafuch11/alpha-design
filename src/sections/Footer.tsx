
const Footer = () => {
  const links = [
    {
      label: "Resume",
      href: "/resuma",
      icon: "📄",
    },
    {
      label: "Email",
      href: "mailto:example@example.com",
      icon: "✉️",
    },
    {
      label: "GitHub",
      href: "https://github.com/yourusername",
      icon: "🐙",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
      icon: "💼",
      external: true,
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="footer flex flex-col items-center justify-center">
      <div className="footer-top text-center mb-6">
        <h2 className="footer-title">Thanks for visiting</h2>
        <p className="footer-subtitle">Let's connect and build something great together.</p>
      </div>

      <div className="footer-links flex flex-wrap justify-center gap-4 mb-6">
        {links.map((link, idx) => (
          <a
            key={idx}
            href={link.href}
            className="footer-link-card"
            {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <span className="footer-link-icon">{link.icon}</span>
            <span className="footer-link-label">{link.label}</span>
          </a>
        ))}
      </div>

      <div className="footer-bottom text-center text-sm text-gray-400">
        <p>&copy; {year} Your Name. All rights reserved.</p>
        <p>Made with 💙 and physics precision.</p>
      </div>
    </footer>
  );
};

export default Footer;
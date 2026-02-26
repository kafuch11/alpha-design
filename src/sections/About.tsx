
const About = () => {
  const aboutSections = [
    {
      title: "Who I Am",
      icon: "👨‍🎓",
      cols: 6,
      rows: 4,
      content: "Physics Bachelor's student with a passion for understanding the universe. By day, I solve equations and explore the laws of nature. By night, I transform ideas into interactive digital experiences. This unique blend of analytical thinking and creative problem-solving defines my approach to web development.",
      highlight: true
    },
    {
      title: "My Journey",
      icon: "🚀",
      cols: 6,
      rows: 4,
      content: "Self-taught web developer who started from curiosity and grew through building real projects. I've learned React, TypeScript, Tailwind CSS, and modern web technologies. Every project has been a stepping stone, combining physics logic with elegant UI/UX design.",
      highlight: true
    },
    {
      title: "Education",
      icon: "📚",
      cols: 4,
      rows: 3,
      items: [
        "Physics Bachelor's Degree",
        "Self-taught Web Developer",
        "Continuous Learning Mindset"
      ]
    },
    {
      title: "Tech Stack",
      icon: "⚙️",
      cols: 4,
      rows: 3,
      items: [
        "React & TypeScript",
        "Tailwind CSS & Vite",
        "Modern Web Tech"
      ]
    },
    {
      title: "What Drives Me",
      icon: "⚡",
      cols: 4,
      rows: 3,
      items: [
        "Creating intuitive UX",
        "Problem-solving mindset",
        "Continuous innovation"
      ]
    },
    {
      title: "Vision",
      icon: "🎯",
      cols: 6,
      rows: 3,
      content: "Building web applications that merge scientific precision with beautiful design. I aim to create digital experiences that are not just functional, but inspiring—combining the rigor of physics with the creativity of web design."
    }
  ];

  const stats = [
    { label: "Physics Background", value: "✓" },
    { label: "Self-Taught Dev", value: "✓" },
    { label: "Projects Built", value: "∞" }
  ];

  return (
    <div id="about" className="section-cont flex flex-col items-center justify-center overflow-hidden">
      {/* Stats Section */}
      <div className="w-full max-w-[1000px] mb-6 ">
        <div className="flex gap-4 justify-center flex-wrap px-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="about-stat-badge">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid Section */}
      <div className="section-card w-full max-w-[1000px]  grid grid-cols-12 gap-4">
        {aboutSections.map((item, index) => (
            <div 
              key={index} 
              className={`about-cards col-span-${item.cols} row-span-${item.rows} ${item.highlight ? 'about-highlight' : ''} about-card-h${index}`}
            >
              <div className="about-card-header">
                <span className="about-icon">{item.icon}</span>
                <h3 className="about-title">{item.title}</h3>
              </div>
              
              {item.content && (
                <p className="about-content">{item.content}</p>
              )}
              
              {item.items && (
                <ul className="about-items-list">
                  {item.items.map((listItem, i) => (
                    <li key={i} className="about-list-item">
                      <span className="item-dot">→</span>
                      {listItem}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
    </div>
  )
}

export default About;


import { useState } from "react";
import rightWoman from "@/assets/logos/Right Woman.png";
import cbLineChart from "@/assets/logos/CB Line Chart.png";
import cbBarChart from "@/assets/logos/CB Bar Chart.png";
import pegaPhone from "@/assets/logos/Pega Phone.png";
import pegaLaptop from "@/assets/logos/Pega Laptop.png";
import nbImages from "@/assets/logos/NB Images.png";
import msImages from "@/assets/logos/MS Images.png";
import experienceLineTop from "@/assets/logos/Experience Line Top.svg";
import experienceLineBottom from "@/assets/logos/Experience Line Bottom.svg";
import msLogoFinal from "@/assets/logos/Morgan Stanley Logo FInal.png";
import cbSocialMedia1 from "@/assets/logos/Social Media_ClearBridge 1.png";
import animationCB from "@/assets/logos/Animation Image CB copy.png";
import animationPega from "@/assets/logos/Animation Image Pega copy.png";
import animationNB from "@/assets/logos/Animation Image NB copy.png";
import animationMS from "@/assets/logos/Animation Image MS copy.png";

export default function Index() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 0,
      name: "ClearBridge",
      title: "Streamlined production through large-scale data automation",
      description:
        "Automated data visualization at scale using Seismic to streamline production, delivering data-driven presentations, white papers, blog posts, engagement reports, social media graphics, and webinars",
      bg: "bg-[#00848E]",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fe93b2a78ba78436581c5c53fa3d50c75%2F5f682e5df42d4689b3e5f8f327c6eed4?format=webp&width=800",
      images: [animationCB],
    },
    {
      id: 1,
      name: "Pega",
      title: "Designed and developed strategic contents",
      description:
        "Elevated Pega's business value by translating complex technical concepts—such as the Layer Cake architecture and Real-Time Intelligence—into clear, easy-to-understand visuals, supported by concise writing across presentations, executive briefs, and website content",
      bg: "bg-[#001F5F]",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fe93b2a78ba78436581c5c53fa3d50c75%2F11381bbabba047c08bc10919628efbef?format=webp&width=800",
      images: [animationPega],
    },
    {
      id: 2,
      name: "Neuberger Berman",
      title: "Ensured consistency with branding standards",
      description:
        "Built a cohesive brand system through minimalist typography, conceptual imagery, and color across presentations, data visualizations, fact sheets, thought leadership, and social media.",
      bg: "bg-[#003D5C]",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fe93b2a78ba78436581c5c53fa3d50c75%2Feb1bdd58726e45ec9e6d0967b8b451d5?format=webp&width=800",
      images: [animationNB],
    },
    {
      id: 3,
      name: "Morgan Stanley",
      title: "Analyzed business competitiveness and constructed market positioning",
      description:
        "Persuaded audiences by visualizing dynamic imagery that represents positioning and demonstrates how it solves problems or elevates value through data-driven charts and infographics.",
      bg: "bg-[#00447C]",
      logo: "https://cdn.builder.io/api/v1/image/assets%2Fe93b2a78ba78436581c5c53fa3d50c75%2Fba29ce9e16ee45d787f681d95d7497df?format=webp&width=800",
      images: [animationMS],
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-[#FAFDFF] font-exo">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:space-y-10 text-center lg:text-left">
              <div className="space-y-3">
<p className="text-brand-blue text-xl md:text-2xl tracking-wide">
  DESIGN <span className="text-brand-text">by</span> KAY KANG
</p>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-brand-text leading-tight">
                  Where Creativity
                  <br />
                  Meets Tomorrow
                </h1>
                <p className="text-xl md:text-2xl text-brand-text/80">
                  Every element earns its place, paving the way forward
                </p>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="flex justify-center">
              <img
                src={rightWoman}
                alt="Kay Kang"
                className="max-w-full h-auto transform md:scale-150 lg:scale-175 md:-translate-x-16 lg:-translate-x- md:translate-y-12 lg:translate-y-15 origin-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section - Company Logos */}
      <section className="py-6 md:py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-brand-text font-bold text-lg md:text-xl mb-4 tracking-wide">
            EXPERIENCE
          </h2>

          <div className="py-3 md:py-4">
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-center">
                <img
                  src={experienceLineTop}
                  alt="Experience line top"
                  className="w-full max-w-8xl object-contain"
                />
              </div>

              <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6 md:gap-10 lg:gap-12">
                <a
                  href="https://www.clearbridge.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center h-5 md:h-7 lg:h-7"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe93b2a78ba78436581c5c53fa3d50c75%2F2abfc6628339442c840e27662ba1b291?format=webp&width=1000"
                    alt="ClearBridge"
                    className="h-full w-auto object-contain opacity-85"
                  />
                </a>
                <a
                  href="https://www.pega.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center h-5 md:h-7 lg:h-7"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe93b2a78ba78436581c5c53fa3d50c75%2F15153e50c9a943749bc2c12c24e830e2?format=webp&width=1000"
                    alt="Pega"
                    className="h-full w-auto object-contain opacity-85"
                  />
                </a>
                <a
                  href="https://www.pgim.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center h-5 md:h-7 lg:h-7"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe93b2a78ba78436581c5c53fa3d50c75%2Fd7353e6d9fd74856bc64b97233c9dfa5?format=webp&width=1000"
                    alt="PGIM"
                    className="h-full w-auto object-contain opacity-85"
                  />
                </a>
                <a
                  href="https://www.nb.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center h-5 md:h-7 lg:h-7"
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe93b2a78ba78436581c5c53fa3d50c75%2F4f385292e8f748548de37bdba2af1ef3?format=webp&width=1000"
                    alt="Neuberger Berman"
                    className="h-full w-auto object-contain opacity-85"
                  />
                </a>
                <a
                  href="https://www.morganstanley.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center h-4 md:h-5 lg:h-5"
                >
                  <img
                    src={msLogoFinal}
                    alt="Morgan Stanley"
                    className="h-full w-auto object-contain opacity-85"
                  />
                </a>
              </div>

              <div className="flex justify-center">
                <img
                  src={experienceLineBottom}
                  alt="Experience line bottom"
                  className="w-full max-w-8xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-10 md:py-14 lg:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <p
            className="text-2xl md:text-3xl text-center text-brand-text/80"
            style={{ lineHeight: 1.8 }} // try 1.6, 2.0, etc.
          >
            Rooted in{" "}
            <span className="text-brand-blue font-normal">minimalism,</span>{" "}
            the best communication starts with simplicity whether it's data or
            presentation. Playful and{" "}
            <span className="text-brand-blue font-normal">whimsical,</span> yet
            never pretentious, great design has a quiet confidence.{" "}
            <span className="text-brand-blue font-normal">Consistency</span>{" "}
            across every medium protects and carries a brand's story.
          </p>
        </div>
      </section>

      {/* Capacity Section */}
      <section className="py-12 md:py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-brand-text font-bold text-lg md:text-xl mb-6 tracking-wide">
            CAPACITY
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Presentation Design & Data Visualization */}
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col items-center space-y-4 min-h-[230px] justify-between">
                <div className="w-24 h-24 rounded-full bg-brand-dark-blue flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe93b2a78ba78436581c5c53fa3d50c75%2F21e88133057e4ad99594c1ae976bc83d?format=webp&width=800"
                    alt="Presentation Design"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-brand-dark-blue font-bold text-xl md:text-2xl">
                  Presentation Design & Data Visualization
                </h3>
                <svg width="17" height="7" viewBox="0 0 17 7" className="opacity-40">
                  <path d="M0 0L8.64407 7L17 0" stroke="#475766" />
                </svg>
              </div>
              <p className="mt-6 text-brand-blue text-lg md:text-xl leading-relaxed">
                Identify the business's unique differentiators, present the
                problem, and show how that advantage solves it
              </p>
            </div>

            {/* Web Design & Social Media Design */}
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col items-center space-y-4 min-h-[230px] justify-between">
                <div className="w-24 h-24 rounded-full bg-brand-dark-blue flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe93b2a78ba78436581c5c53fa3d50c75%2Fb2ca87178d274d8d9123732f1b11d3f1?format=webp&width=800"
                    alt="Web Design"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-brand-dark-blue font-bold text-xl md:text-2xl">
                  Web Design & Social Media Design
                </h3>
                <svg width="17" height="7" viewBox="0 0 17 7" className="opacity-40">
                  <path d="M0 0L8.64407 7L17 0" stroke="#475766" />
                </svg>
              </div>
              <p className="mt-6 text-brand-blue text-lg md:text-xl leading-relaxed">
                Using engaging animation and video, respond quickly to emerging
                issues
              </p>
            </div>

            {/* Marketing Collateral Design */}
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col items-center space-y-4 min-h-[230px] justify-between">
                <div className="w-24 h-24 rounded-full bg-brand-dark-blue flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe93b2a78ba78436581c5c53fa3d50c75%2F5483c2e7d65949829878199c05404e29?format=webp&width=800"
                    alt="Marketing"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-brand-dark-blue font-bold text-xl md:text-2xl">
                  Marketing Collateral Design
                </h3>
                <svg width="17" height="7" viewBox="0 0 17 7" className="opacity-40">
                  <path d="M0 0L8.64407 7L17 0" stroke="#475766" />
                </svg>
              </div>
              <p className="mt-6 text-brand-blue text-lg md:text-xl leading-relaxed">
                Apply consistent design standards across typography, imagery,
                and color to establish a cohesive brand
              </p>
            </div>

            {/* Content Development & Writing */}
            <div className="flex flex-col items-center text-center">
              <div className="flex flex-col items-center space-y-4 min-h-[230px] justify-between">
                <div className="w-24 h-24 rounded-full bg-brand-dark-blue flex items-center justify-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fe93b2a78ba78436581c5c53fa3d50c75%2F6eb7a6074fd5458daf2660c06a34d310?format=webp&width=800"
                    alt="Content Development"
                    className="w-16 h-16"
                  />
                </div>
                <h3 className="text-brand-dark-blue font-bold text-xl md:text-2xl">
                  Content Development & Writing
                </h3>
                <svg width="17" height="7" viewBox="0 0 17 7" className="opacity-40">
                  <path d="M0 0L8.64407 7L17 0" stroke="#475766" />
                </svg>
              </div>
              <p className="mt-6 text-brand-blue text-lg md:text-xl leading-relaxed">
                Developing strategic narratives, transform and expand business
                value by articulating vision, differentiation, and impact
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24">
        {/* Heading stays constrained */}
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-brand-text font-bold text-lg md:text-xl mb-12 tracking-wide">
            FEATURED PROJECTS
          </h2>
        </div>

        {/* Full-bleed carousel (no rounded corners) */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentProject * 100}%)` }}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                className={`w-full flex-shrink-0 overflow-hidden ${project.bg} text-white`}
              >
                <div className="min-h-[420px] md:min-h-[520px] lg:min-h-[600px] flex items-start">
                  {/* Inner content constrained and centered */}
                  <div className="max-w-7xl mx-auto w-full px-6 py-12 md:py-16">
                    <div className="max-w-5xl ml-0 mr-auto">
                      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Left Content */}
                        <div className="max-w-xl space-y-6 lg:space-y-8">
                          <div className="h-8 md:h-9 flex items-center">
                            {project.logo && (
                              <img
                                src={project.logo}
                                alt={project.name}
                                className={`max-h-6 md:max-h-7 w-auto transform ${
                                  project.name === "Neuberger Berman"
                                    ? "-translate-y-6 md:-translate-y-7"
                                    : project.name === "Morgan Stanley"
                                    ? "translate-y-3 md:translate-y-5"
                                    : ""
                                }`}
                              />
                            )}
                          </div>

                          <div
                            className={`space-y-4 ${
                              project.name === "Neuberger Berman"
                                ? "-translate-y-4 md:-translate-y-5" // raise NB text
                                : project.name === "Morgan Stanley"
                                ? "translate-y-3 md:translate-y-5"    // lower MS text
                                : ""
                            }`}
                          >
                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-normal leading-snug">
                              {project.title}
                            </h3>
                            <p
                              className="text-lg md:text-xl opacity-90"
                              style={{ lineHeight: 2 }}
                            >
                              {project.description}
                            </p>
                          </div>
                        </div>

                        {/* Right Content - Project Images */}
                        {project.images && project.images.length > 0 && (
                          <div className="relative h-80 md:h-[420px] lg:h-[460px] flex items-center overflow-visible">
                            <img
                              src={project.images[0]}
                              alt={`${project.name} work`}
                              className={`w-full h-full object-contain rounded-lg opacity-90 transform ${
                                project.name === "ClearBridge"
                                  ? "translate-x-34 md:translate-x-32 translate-y-200 md:translate-y-200 scale-125"
                                  : project.name === "Pega"
                                  ? "translate-x-34 md:translate-x-32 scale-150 md:scale-150"
                                  : "translate-x-34 md:translate-x-32 scale-125"
                              } ${project.name === "Neuberger Berman" ? "object-right" : ""}`}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
            <button
              onClick={prevProject}
              className="bg-white rounded-full p-3 transition-colors"
              aria-label="Previous project"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-black"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`transition-all ${
                    index === currentProject
                      ? "bg-white w-8 h-2"
                      : "bg-white/50 hover:bg-white/70 w-2 h-2"
                  } rounded-full`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="bg-white rounded-full p-3 transition-colors"
              aria-label="Next project"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-black"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Experience Statement */}
      <section className="py-16 md:py-24 flex items-center">
        <div className="w-full flex flex-col items-center px-6 text-center space-y-4 -translate-y-8 md:-translate-y-10">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-normal text-brand-text/80 whitespace-nowrap">
            With 10+ years of experience,
          </h2>
          <p className="text-xl md:text-2xl text-brand-text/80">
            I transform vision into real-world value
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t-2 border-brand-blue">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            {/* Left - Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/kay-k-96982b89"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-text/80 hover:text-brand-blue transition-colors"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fe93b2a78ba78436581c5c53fa3d50c75%2F2277178359c144448fcda1c396ee951d?format=webp&width=800"
                  alt="LinkedIn"
                  className="h-5"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/16ShUr7sKLXTGjCqxuMdis54kbCkp7d8_/view"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-text/80 hover:text-brand-blue transition-colors"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  className="text-brand-dark-blue"
                >
                  <rect
                    width="28"
                    height="28"
                    rx="4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                  />
                  <path
                    d="M10 10H18M10 14H18M10 18H15"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
                <span className="font-medium text-lg md:text-xl hidden sm:inline">
                  Portfolio
                </span>
              </a>
            </div>

            {/* Right - Contact Info */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-brand-text/80">
              <a
                href="mailto:gkang914@gmail.com"
                className="text-lg md:text-xl hover:text-brand-blue transition-colors"
              >
                gkang914@gmail.com
              </a>
              <a
                href="tel:9145227154"
                className="text-lg md:text-xl hover:text-brand-blue transition-colors"
              >
                914 522 7154
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

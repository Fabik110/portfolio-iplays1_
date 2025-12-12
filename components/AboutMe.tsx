'use client'

export default function AboutMe() {
  return (
    <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300">
      <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
      <div className="space-y-4 text-cyan-100">
        <p className="text-lg leading-relaxed">
          Welcome to my portfolio! I'm <span className="font-semibold text-white">iplays1_</span>, 
          a developer passionate about creating clean, functional, and beautiful applications.
        </p>
        <p className="text-lg leading-relaxed">
          This portfolio showcases a collection of small, bug-free applications that demonstrate 
          various programming concepts and technologies. Each project includes both a live demo 
          and source code for you to explore.
        </p>
        <p className="text-lg leading-relaxed">
          Feel free to check out the projects below, and if you're interested in connecting, 
          you can find me on Discord, my username is iplays1_!
        </p>
      </div>
    </div>
  )
}


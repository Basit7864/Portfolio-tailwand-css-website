import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div data-aos="zoom-in-up">
          <h2 className="text-4xl md:text-5xl">Technologies I work with</h2>
          <p className="text-#ccd0cf-500 pt-2">
          I'm a graphic designer and I design logos, brochures, web designing, flyers, business cards, invitation cards, & much more designs new 
          to relate with graphic designing.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-2  text-3xl sm:text-4xl" style={{color:"#ccd0cf"}}>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
            </div>
            <div className="space-y-2">
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

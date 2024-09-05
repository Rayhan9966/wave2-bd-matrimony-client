import { Parallax } from "react-parallax";

const Cover = ({img,title}) => {
    return (
      <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
  >
     <div
        className="hero min-h-[700px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppeercase">{title}</h1>
            <p className="mb-5">
            A dedicated professional with excellent communication skills,
             committed to personal growth and team collaboration.
              Enthusiastic, adaptable, and goal-oriented with a passion for continuous learning and development.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
  </Parallax>
       
    );
};

export default Cover;
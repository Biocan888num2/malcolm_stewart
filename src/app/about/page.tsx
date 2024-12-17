
import ParticlePills from '../../components/ParticlePills';

const About = () => {
  return (
    // <div className="w-full h-screen overflow-hidden">
      <ParticlePills>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 z-10">
          <div className="about-title-div">
            <h1 className="inter-extrabold bg-transparent">About</h1>
            <p className="inter-extrabold bg-transparent">Just a Junior Developer striving to improve...</p>
            <br></br>
            <h2 className="inter-extrabold bg-transparent">...these are a few of my favorite things.</h2>
          </div>
        </div>
      </ParticlePills>
    // </div>
  );
};

export default About;



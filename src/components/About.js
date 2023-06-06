import React from "react";
import founder1 from 'C:/Users/hp/Desktop/DeepLeafFront/src/components/founder1.png';
import founder2 from 'C:/Users/hp/Desktop/DeepLeafFront/src/components/founder2.png';
import '../index.css';

function About() {
  return (
    <div className="container mx-auto px-4 py-8">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 pr-8">
          <p className="text-lg mb-6 ">
            DeepLeaf is an agricultural deep learning lab that is focused on leveraging the latest in AI technology to revolutionize the way we grow crops. We believe that by using deep learning to analyze plant images and data, we can help farmers and growers detect plant diseases, nutrient deficiencies, and other issues earlier and more accurately than ever before, leading to better yields and more sustainable farming practices.
          </p>
          <br></br>
          <p className="text-lg mb-6">
            Our team is made up of experts in deep learning, computer vision, and agriculture, all of whom are passionate about using technology to make a real-world impact. We are committed to developing cutting-edge AI models and tools that are easy to use and accessible to anyone, whether you are a large-scale commercial farmer or a small-scale grower.
          </p>
          <br></br>
          <p className="text-lg mb-6">
            At DeepLeaf, we believe that by combining the power of AI with the knowledge and expertise of farmers and growers, we can create a more sustainable and efficient agricultural industry. We are proud to be at the forefront of this exciting new field and are dedicated to continuing to innovate and improve the way we grow our food.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4">Founders</h2>
            <ul className="list-disc pl-6">
              <div className="mb-4 text-center">
                <img src={founder1} alt="Founder 1" />
                <h3 className="text-lg font-bold">El Mahdi Aboulmanadel</h3>
                <p>Co-Founder & CEO</p>
              </div>
              <div className="mb-4 text-center">
                <img src={founder2} alt="Founder 2" />
                <h3 className="text-lg font-bold">Yahya El Akil</h3>
                <p>Co-Founder & CFO</p>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

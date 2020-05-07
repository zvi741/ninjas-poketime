import React from 'react';
import Rainbow from '../hoc/Rainbow';

const About = () => {
  return (
    <div className="container">
      <h4 className="center">About</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident numquam obcaecati ut est ex, et qui officiis ad porro nihil impedit, eaque sequi in odio accusamus tempora a. Nemo, ratione.</p>
    </div>
  );
};

export default Rainbow(About);
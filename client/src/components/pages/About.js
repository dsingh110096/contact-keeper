import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About This App</h1>
      <h4 className='mb-1'>
        This is a Fullstack Web App based on reactjs,nodejs,express,context.api etc. for keeping
        contacts
      </h4>
      <p>
        Bacically this app keeps tracks of contacts of users, they can create contacts, can
        update,delete contacts etc
      </p>

      <p className='p my-1' style={{ backgroundColor: 'orange', color: 'white' }}>
        <strong>Version: </strong> 1.0.0
      </p>
    </div>
  );
};

export default About;

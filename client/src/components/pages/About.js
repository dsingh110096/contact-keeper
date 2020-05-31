import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1>About This App</h1>
      <p>App to Keep Track Of Contacts Of A User</p>
      <p>
        Based on :{' '}
        <strong>React, ReactDom, Router, Context Api, Node.js,React-trasition-group</strong>{' '}
      </p>
      <p>Version 1.0.0</p>
      <h3>Developer Info:</h3>
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src='https://avatars1.githubusercontent.com/u/15675693?v=4'
            alt='Dheerendra Singh'
            className='round-img'
            style={{ width: '150px' }}
          />
          <h1>Dheerendra Singh</h1>
          <p>Location: New Delhi, India</p>
        </div>
        <div>
          <h3>Bio</h3>
          <p style={{ marginBottom: '5px' }}>
            Full Stack Developer, Specialized in JavaScript and It's Frameworks, CSS Frameworks.
          </p>
          <h3>Profiel Links</h3>
          <ul>
            <li>
              <i className='fab fa-github' />{' '}
              <a href='https://github.com/dsingh110096' target='_blank' rel='noopener noreferrer'>
                dsingh110096
              </a>
            </li>
            <li>
              <i className='fab fa-linkedin-in' />{' '}
              <a
                href='https://www.linkedin.com/in/dheerendra-singh-7210b0128/'
                target='_blank'
                rel='noopener noreferrer'
              >
                dheerendra-singh-7210b0128
              </a>
            </li>
            <li>
              <i className='fab fa-facebook' />{' '}
              <a
                href='https://www.facebook.com/theGodOfCourage'
                target='_blank'
                rel='noopener noreferrer'
              >
                theGodOfCourage
              </a>
            </li>
            <li>
              <i className='fab fa-instagram' />{' '}
              <a
                href='https://www.instagram.com/dheerendra3036/'
                target='_blank'
                rel='noopener noreferrer'
              >
                dheerendra3036
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default About;

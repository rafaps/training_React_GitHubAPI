import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoTop from '../../assets/logo-top.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoTop} alt="Github Explorer" />
      <Title>Explore GitHub Repositories</Title>

      <Form>
        <input placeholder="Repository name" />
        <button type="submit">Search</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/40831468?s=460&u=fa610e6913b00230d5cef786c81743e83e581112&v=4"
            alt="GitHub Avatar"
          />

          <div>
            <strong>Rocketseat/test</strong>
            <p>Easy peasy little </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/40831468?s=460&u=fa610e6913b00230d5cef786c81743e83e581112&v=4"
            alt="GitHub Avatar"
          />

          <div>
            <strong>Rocketseat/test</strong>
            <p>Easy peasy little </p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/40831468?s=460&u=fa610e6913b00230d5cef786c81743e83e581112&v=4"
            alt="GitHub Avatar"
          />

          <div>
            <strong>Rocketseat/test</strong>
            <p>Easy peasy little </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;

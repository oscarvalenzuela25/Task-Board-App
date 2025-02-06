import { FC } from 'react';
import { Route } from 'wouter';
import Home from '../features/Home/pages/home';
import verifyParams from './HOC/verifyParams';

const HomeRoutes: FC = () => {
  return (
    <>
      <Route path="/:uuid" component={verifyParams(Home)} />
      <Route path="/" component={verifyParams(Home)} />
    </>
  );
};

export default HomeRoutes;

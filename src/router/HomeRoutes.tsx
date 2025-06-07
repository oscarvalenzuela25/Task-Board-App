import { FC } from "react";
import { Route } from "wouter";
import Home from "../features/home/pages/mainPage";
import verifyParams from "./HOC/verifyParams";

const HomeRoutes: FC = () => {
  return (
    <>
      <Route path="/:uuid" component={verifyParams(Home)} />
      <Route path="/" component={verifyParams(Home)} />
    </>
  );
};

export default HomeRoutes;

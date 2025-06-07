import { FC } from "react";
import BaseLayout from "../../layouts/BaseLayout";
import HomeBody from "./components/HomeBody";
import HomeTitle from "./components/HomeTitle";

const MainPage: FC = () => {
  return (
    <BaseLayout>
      <div className="flex flex-col gap-10 px-3 w-full sm:px-0 sm:w-3/4 md:w-1/2 lg:w-5/8 xl:w-3/8 pb-10">
        <HomeTitle />
        <HomeBody />
      </div>
    </BaseLayout>
  );
};

export default MainPage;

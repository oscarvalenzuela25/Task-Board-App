import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { AddTaskBoardUseCase } from "../../../../../API/application/useCases/taskBoard/AddTaskBoardUseCase";
import { v4 as uuidv4 } from "uuid";
import useGetTaskBoards from "../infrastructure/hooks/useGetTaskBoards";
import { useQueryClient } from "@tanstack/react-query";

const useNavbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showOptionDrawer, setOptionDrawer] = useState(false);
  const [, navigate] = useLocation();
  const queryClient = useQueryClient();

  const { taskBoards, getTaskBoardsIsFetching } = useGetTaskBoards();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && savedTheme === "dark") {
      setIsDarkMode((prev) => !prev);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const handleThemeSwitch = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleGoToTaskBoard = (uuid: string) => {
    navigate(uuid);
  };

  const handleShowOptionDrawer = () => {
    setOptionDrawer(true);
  };

  const handleCloseOptionDrawer = () => {
    setOptionDrawer(false);
  };

  const handleCreateNewTaskBoard = async () => {
    const uuid = uuidv4();
    const addTaskBoardUseCase = new AddTaskBoardUseCase();
    await addTaskBoardUseCase.execute({
      uuid,
      title: "My New Task Board",
      createdAt: new Date(),
    });
    navigate(`/${uuid}`, { replace: true });
    queryClient.invalidateQueries({
      queryKey: ["getTaskBoards"],
      exact: false,
    });
  };

  return {
    isDarkMode,
    taskBoards,
    getTaskBoardsIsFetching,
    showOptionDrawer,
    handleThemeSwitch,
    handleGoToTaskBoard,
    handleShowOptionDrawer,
    handleCloseOptionDrawer,
    handleCreateNewTaskBoard,
  };
};

export default useNavbar;

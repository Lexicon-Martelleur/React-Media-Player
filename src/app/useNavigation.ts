import { useState } from "react";
import { pageType } from "../routes/routes";

export const useNavigation = () => {
  const [pageStack, setPageStack] = useState<{
    page: pageType,
    pageTitle: string
  }[]>([]);
  
  const navigateTo = (page: pageType, pageTitle: string, action?: () => void) => {
    action != null && action()
    setPageStack(prevPageStack => [...prevPageStack, { page, pageTitle}]);
  }

  const prevPage = () => {
    if (isStartPage()) { return }
    setPageStack
    setPageStack(prevPageStack => prevPageStack.slice(0, -1));
  }

  const isPage = (page: pageType): boolean => {
    return pageStack[pageStack.length - 1]?.page === page
  }

  const isStartPage = (): boolean => {
    return pageStack.length === 0;
  }

  const getCurrentPageTitle = (): string => {
    return pageStack[pageStack.length - 1]?.pageTitle ?? "My Media Player";
  }

  return {
    getCurrentPageTitle,
    navigateTo,
    prevPage,
    isPage,
    isStartPage
  }
}

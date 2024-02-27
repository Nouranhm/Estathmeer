// useNavigation.ts
import { useRouter } from "next/router";

export const useNavigation = () => {
  const router = useRouter();

  const navigateToPage = (page: string) => {
    router.push(`/${page}`);
  };

  return {
    navigateToPage,
  };
};

import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const { data, error } = useData<Platform[]>("/platforms/lists/parents");
  console.log("usePlatforms data:", data);
  console.log("usePlatforms error:", error);
  return { data, error };
};

export default usePlatforms;

import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const { data, error } = useData<Platform[]>("/platforms/lists/parents");

  if (error || !data) {
    console.error('Error loading platforms:', error);
    return { data: [], error };
  }

  return { data, error };
};

export default usePlatforms;

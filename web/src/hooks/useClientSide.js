export const useClientSide = () => {
  const isClientSide = typeof window !== 'undefined';
  return isClientSide;
};

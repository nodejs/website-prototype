const intersectionObserverMock = () => ({
  observe: () => null,
  unobserve: () => null,
});
window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

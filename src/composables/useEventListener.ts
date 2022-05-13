const useEventListener = (target: HTMLElement, event: string, callback: EventListenerOrEventListenerObject) => {
  onMounted(() => {
    target.addEventListener(event, callback);
  });
  onBeforeUnmount(() => {
    target.removeEventListener(event, callback);
  });
};
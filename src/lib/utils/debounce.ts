export default function debounce<T extends (...args: Parameters<T>) => void>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => Promise<void> | void {
    let timerId: ReturnType<typeof setTimeout>;
  
    return function(...args: Parameters<T>) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }
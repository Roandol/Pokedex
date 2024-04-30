export const lazyLoadLastItem = (query: string, func: () => void) => {
    return () => {
        const lastItem = document.querySelector(query);
        
        if (lastItem && (lastItem.getBoundingClientRect().bottom - 1000) <= window.innerHeight) {
            func();
        }
    }
};
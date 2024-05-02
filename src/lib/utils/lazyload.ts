export const lazyLoadLastItem = (query: string, func: () => Promise<void>) => {
    let loadmore = true;
    return async () => {
        if (!loadmore) return;
        const lastItem = document.querySelector(query);

        if (lastItem && (lastItem.getBoundingClientRect().bottom) <= window.innerHeight) {
            loadmore = false;

            await func();

            loadmore = true;
        }
    }
};
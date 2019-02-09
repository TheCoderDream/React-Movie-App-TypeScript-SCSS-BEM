export const overviewShorter = (value: string): string  => {
    if (value.length <= 291) {
        return value;
    }

    return value.slice(0, 288) + '...';
};
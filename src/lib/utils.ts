export const disableScroll = () => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = "hidden";
};

export const enableScroll = () => {
    if (typeof window === "undefined") return;
    document.body.style.overflow = "auto";
};

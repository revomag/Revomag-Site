/**
 * Determines if the user is visiting the site using a mobile device or a desktop computer
 */
export const isMobileDevice = (): boolean => {
    const deviceDetails = navigator.userAgent;
    const regExpList = /android|iphone|kindle|ipad|mobile/i;
    return regExpList.test(deviceDetails);
};

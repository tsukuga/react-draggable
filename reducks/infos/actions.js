export const CREAET_NEW_ELEMENT = "CREAET_NEW_ELEMENT";
export const createNewElementAction = (nowCount) => {
    return {
        type: "CREAET_NEW_ELEMENT",
        payload: nowCount
    }
};
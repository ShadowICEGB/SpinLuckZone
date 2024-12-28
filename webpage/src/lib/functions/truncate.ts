/**
 * @description 
 * The `truncate` function takes a string and a specified length as input and returns a truncated version of the string 
 * if its length exceeds the provided limit. If the string is shorter than or equal to the specified length, 
 * it returns the original string. This function is useful for displaying short previews of text, such as in a UI 
 * where space is limited and you want to avoid overflowing content.
 *
 * The function appends an ellipsis ("...") to the truncated string to indicate that the content has been shortened.
 * 
 * @function
 * @param {string} text - The input text string to be truncated.
 * @param {number} length - The maximum allowed length of the string.
 * @returns {string} - A string that is truncated to the specified length, with an ellipsis if necessary.
 * 
 * @example
 * truncate("This is a long sentence that needs to be shortened.", 20);
 * Returns: "This is a long se..."
 *
 * @module utilities
 */
export const truncate = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + "..." : text;
};

export const textCutter = (text, cutTextAfterNb, appendText = "...") => {
  if (text.length > cutTextAfterNb) {
    return text.slice(0, cutTextAfterNb) + appendText;
  }
  return text;
}
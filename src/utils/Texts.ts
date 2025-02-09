export class Texts {
  static cleanText(text: string): string {
    return text.trim();
  }

  static maxLength(text: string, length: number): string {
    const newText = text.trim();
    return newText.length > length
      ? `${text.trim().slice(0, length)}...`
      : newText;
  }
}

export function typeWriterEffect(text, setter) {
    let index = 0;
    function type() {
      if (index < text.length) {
        setter((prev) => prev + text.charAt(index));
        index++;
        setTimeout(type, 100);
      }
    }
    type();
  }
  
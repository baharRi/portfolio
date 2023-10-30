import React, { useEffect, useState } from "react";

export function TypingText() {
  const [dynamicText, setDynamicText] = useState("");
  const texts = ["Bahar.", "AtomIQ:", "Svoosh:", "P4L:"];
  const [textIndex, setTextIndex] = useState(0);
  const charIndex = dynamicText.length;

  useEffect(() => {
    const delay = charIndex < texts[textIndex].length ? 150 : 1000;

    if (charIndex < texts[textIndex].length) {
      const timeoutId = setTimeout(() => {
        setDynamicText(texts[textIndex].substring(0, charIndex + 1));
      }, delay);

      return () => {
        clearTimeout(timeoutId);
      };
    } else {
      const timeoutId = setTimeout(() => {
        if (textIndex < texts.length - 1) {
          setTextIndex(textIndex + 1);
        }
      }, 1000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [dynamicText, charIndex]);

  return (
    <h1>
      <span className="stopBlinking">{dynamicText}</span>&nbsp;
    </h1>
  );
}

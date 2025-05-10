import { useEffect, useState } from "react";

export default function Header() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Ajroudi Mohamed Aymen";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText.charAt(index));
      index++;
      if (index >= fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval); // nettoie au démontage
  }, []);

  return (
    <header className="bg-slate-800 text-white p-8 text-center">
      <h1 className="text-2xl font-bold">{displayedText}</h1>
      <p>Étudiant en cybersécurité - Développeur Full Stack</p>
    </header>
  );
}

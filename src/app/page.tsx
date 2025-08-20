"use client";

import { useState } from "react";
import Image from "next/image";

type Alphabet = {
  letter: string;
  word: string;
  image: string;
};

const alphabets: Alphabet[] = [
  { letter: "A", word: "Apple", image: "/images/A.png" },
  { letter: "B", word: "Balloon", image: "/images/B.png" },
  { letter: "C", word: "Cat", image: "/images/C.png" },
  { letter: "D", word: "Dog", image: "/images/D.png" },
  { letter: "E", word: "Elephant", image: "/images/E.png" },
  { letter: "F", word: "Fish", image: "/images/F.png" },
  { letter: "G", word: "Giraffe", image: "/images/G.png" },
  { letter: "H", word: "Hippo", image: "/images/H.png" },
  { letter: "I", word: "Ice cream", image: "/images/I.png" },
  { letter: "J", word: "Jam", image: "/images/J.png" },
  { letter: "K", word: "Kangaroo", image: "/images/K.png" },
  { letter: "L", word: "Lion", image: "/images/L.png" },
  { letter: "M", word: "Monkey", image: "/images/M.png" },
  { letter: "N", word: "Nose", image: "/images/N.png" },
  { letter: "O", word: "Orange", image: "/images/O.png" },
  { letter: "P", word: "Pig", image: "/images/P.png" },
  { letter: "Q", word: "Queen", image: "/images/Q.png" },
  { letter: "R", word: "Rabbit", image: "/images/R.png" },
  { letter: "S", word: "Sun", image: "/images/S.png" },
  { letter: "T", word: "Tiger", image: "/images/T.png" },
  { letter: "U", word: "Umbrella", image: "/images/U.png" },
  { letter: "V", word: "Violin", image: "/images/V.png" },
  { letter: "W", word: "Whale", image: "/images/W.png" },
  { letter: "X", word: "X-ray", image: "/images/X.png" },
  { letter: "Y", word: "Yak", image: "/images/Y.png" },
  { letter: "Z", word: "Zebra", image: "/images/Z.png" },
];

export default function AlphabetPage() {
  const [current, setCurrent] = useState<Alphabet | null>(null);

  const speak = (letter: string, word: string) => {
    // ตั้ง current
    setCurrent(alphabets.find((a) => a.letter === letter) || null);

    // หยุดการพูดตัวก่อนหน้า
    speechSynthesis.cancel();

    const utteranceText = `${letter} ${word}`;

    // พูดซ้ำ 3 ครั้ง
    for (let i = 0; i < 3; i++) {
      const utterance = new SpeechSynthesisUtterance(utteranceText);
      utterance.lang = "en-US";
      utterance.rate = 0.7;
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center gap-8 p-4">
      <h1 className="text-3xl font-bold">📖 Learn A to Z</h1>

      {/* ปุ่มเป็นรูป */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {alphabets.map((a) => (
          <button
            key={a.letter}
            onClick={() => speak(a.letter, a.word)}
            className={`p-3 rounded-2xl shadow-md transition border-2
              ${
                current?.letter === a.letter
                  ? "border-blue-500 scale-105"
                  : "border-transparent"
              }`}
          >
            <Image
              src={a.image}
              alt={a.letter}
              width={90}
              height={90}
              className="rounded-lg"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

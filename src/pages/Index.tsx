import { useState, useRef, useCallback } from "react";
import valentineBg from "@/assets/valentine-bg.jpg";

const loveMessages = [
  "I love you so much! 💕",
  "You make my heart skip a beat! 💓",
  "You're the best thing that ever happened to me! 🥰",
  "Forever yours, my Valentine! 💘",
];

const Index = () => {
  const [answered, setAnswered] = useState(false);
  const noBtnRef = useRef<HTMLButtonElement>(null);

  const moveNoButton = useCallback(() => {
    if (!noBtnRef.current) return;
    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 60;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noBtnRef.current.style.position = "fixed";
    noBtnRef.current.style.left = `${x}px`;
    noBtnRef.current.style.top = `${y}px`;
  }, []);

  if (answered) {
    return (
      <div
        className="flex min-h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${valentineBg})` }}
      >
        <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
        <div className="relative z-10 mx-4 max-w-lg animate-bounce-in rounded-3xl bg-card/90 p-10 text-center shadow-2xl backdrop-blur-md">
          <div className="mb-4 text-7xl">💖</div>
          <h1
            className="mb-4 text-5xl font-bold text-primary"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Yaaay!
          </h1>
          {loveMessages.map((msg, i) => (
            <p
              key={i}
              className="mb-2 text-lg text-foreground"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {msg}
            </p>
          ))}
          <div className="mt-6 flex justify-center gap-2 text-4xl">
            {["❤️", "💕", "💗", "💘", "💝"].map((h, i) => (
              <span
                key={i}
                className="inline-block animate-float"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                {h}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${valentineBg})` }}
    >
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[2px]" />
      <div className="relative z-10 mx-4 max-w-md rounded-3xl bg-card/90 p-10 text-center shadow-2xl backdrop-blur-md">
        <div className="mb-4 text-6xl">💌</div>
        <h1
          className="mb-2 text-5xl font-bold text-primary"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Hey Handsome!
        </h1>
        <p className="mb-8 text-xl text-foreground">
          Will you be my Valentine? 🥺
        </p>
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={() => setAnswered(true)}
            className="rounded-2xl bg-primary px-10 py-4 text-xl font-bold text-primary-foreground shadow-lg transition-transform hover:scale-110 active:scale-95"
          >
            Yes! 💖
          </button>
          <button
            ref={noBtnRef}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            className="rounded-2xl bg-muted px-10 py-4 text-xl font-bold text-muted-foreground shadow-lg transition-all"
          >
            No 😢
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;

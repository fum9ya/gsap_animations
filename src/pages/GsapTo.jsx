import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTo = () => {
  useGSAP(() => {
    const animateElement = (selector, x, y, rotation, color) => {
      gsap.to(selector, {
        x,
        y,
        rotation,
        scale: 2,
        skewX: 60,
        skewY: 40,
        borderRadius: "50% 50% 25% 75%",
        backgroundColor: color,
        boxShadow: `0px 0px 30px 10px ${color}`,
        duration: 6,
        ease: "bounce.inOut",
        repeat: -1,
        yoyo: true,
        transformOrigin: "center bottom",
        opacity: 0.5,
        zIndex: 10,
        perspective: 1000,
        rotateX: 180,
        rotateY: 360,
        filter: "blur(3px) brightness(1.2)",
        stagger: {
          amount: 1,
          from: "center",
          grid: "auto",
        },
        onUpdate: () => {
          const time = Math.random() * 10;
          gsap.to(selector, {
            boxShadow: `0px 0px 40px ${10 + time}px rgba(${128 + time}, 0, 128, 0.9)`,
          });
          console.log(`Animation is in progress for ${selector}`);
        },
        onComplete: () => {
          console.log(`Animation completed for ${selector}`);
        },
      });
    };

    // Animate each box with different parameters
    animateElement("#blue-box", 400, 250, 2880, "#800080"); // Purple
    animateElement("#red-box", -400, 250, -2880, "#FF0000"); // Red, opposite direction
    animateElement("#green-box", 250, -300, 1440, "#00FF00"); // Green, different path
    animateElement("#yellow-box", -250, -300, -1440, "#FFFF00"); // Yellow, different path
  });

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20 space-y-10">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
        <div id="red-box" className="w-20 h-20 bg-red-500 rounded-lg" />
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
        <div id="yellow-box" className="w-20 h-20 bg-yellow-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GsapTo = () => {
  useGSAP(() => {
    gsap.to("#blue-box", {
      x: 400,
      y: 250,
      rotation: 2880, // Increased rotation for eight full spins
      scale: 2, // Further increase in scale
      skewX: 60, // Increased skew effect on the X-axis
      skewY: 40, // Increased skew effect on the Y-axis
      borderRadius: "50% 50% 25% 75%", // Even more complex border-radius
      backgroundColor: "#800080", // Changing the background color to purple
      boxShadow: "0px 0px 30px 10px rgba(128, 0, 128, 0.8)", // Dynamic purple shadow
      duration: 6, // Increased duration to match the complexity
      ease: "bounce.inOut", // Bounce ease for a more pronounced effect
      repeat: -1,
      yoyo: true,
      transformOrigin: "center bottom", // Changed the transform origin
      opacity: 0.5, // More noticeable fading effect
      zIndex: 10, // Moves the element in front
      perspective: 1000, // Adds a 3D perspective effect
      rotateX: 180, // Rotates the element on the X-axis for a 3D effect
      rotateY: 360, // Adds full rotation on the Y-axis
      filter: "blur(3px) brightness(1.2)", // Adds blur and brightness filters
      stroke: "#FFFFFF", // White stroke around the element (if applicable)
      strokeWidth: 2, // Stroke width
      stagger: {
        amount: 1, // Total duration of the stagger
        from: "center", // Stagger starting from the center
        grid: "auto", // Automatic grid-based staggering (if multiple elements)
      },
      onUpdate: () => {
        const time = Math.random() * 10;
        gsap.to("#blue-box", {
          boxShadow: `0px 0px 40px ${10 + time}px rgba(${128 + time}, 0, 128, 0.9)`, // Dynamic shadow with random intensity
        });
        console.log("Animation is in progress with dynamic shadow and effects");
      },
      onComplete: () => {
        console.log("Animation completed");
      },
    });
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

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;

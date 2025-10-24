import { useEffect, useRef, useState } from "react";

const variantClasses = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

export default function Reveal({ children, className = "", as: Component = "div", variant = "up" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const variantClass = variantClasses[variant] ?? variantClasses.up;

  return (
    <Component
      ref={ref}
      className={`reveal ${variantClass} ${isVisible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </Component>
  );
}

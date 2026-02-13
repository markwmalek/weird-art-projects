import { useEffect, useState } from 'react';

export default function HeroSvg() {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    fetch('/images/home/hero.svg')
      .then((res) => res.text())
      .then((svg) => {
        // Add animation classes to Lindsay and Mark groups
        let modifiedSvg = svg
          // Remove XML declaration if present
          .replace(/<\?xml[^?]*\?>\s*/g, '')
          // Add class to Lindsay group (id="f")
          .replace(/id="f"(\s+data-name="Lindsay")/g, 'id="f"$1 class="face face--left"')
          // Add class to Mark group (id="g")
          .replace(/id="g"(\s+data-name="Mark")/g, 'id="g"$1 class="face face--right"');

        setSvgContent(modifiedSvg);
      });
  }, []);

  return (
    <div
      className="hero-svg-container"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}

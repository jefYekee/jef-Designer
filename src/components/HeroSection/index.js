import React, { useEffect, useRef } from 'react';
import { Bio } from '../../data/constants';
import {
  HeroContainer,
  HeroContent,
  Badge,
  DotPulse,
  HeroHeadline,
  Word,
  TypewriterWrap,
  Cursor,
  HeroCTA,
  WorkButton,
  ContactButton,
  StatRow,
  Stat,
  StatNum,
  StatLabel,
  GridLines,
  GlowOrb,
} from './HeroStyle';

const HeroSection = () => {
  const canvasRef = useRef(null);
  const twRef = useRef(null);

  // Particle network animation
  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = canvas.parentElement;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = hero.offsetWidth;
      canvas.height = hero.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dots = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.4 + 0.15,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = canvas.width;
        if (d.x > canvas.width) d.x = 0;
        if (d.y < 0) d.y = canvas.height;
        if (d.y > canvas.height) d.y = 0;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 199, 239, ${d.alpha})`;
        ctx.fill();
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(0, 199, 239, ${0.1 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  // Typewriter animation
  useEffect(() => {
    const roles = Bio.roles;
    let ri = 0, ci = 0, deleting = false;
    let timeout;

    const typeIt = () => {
      const word = roles[ri];
      if (!deleting) {
        ci++;
        twRef.current && (twRef.current.textContent = word.slice(0, ci));
        if (ci === word.length) {
          deleting = true;
          timeout = setTimeout(typeIt, 1600);
          return;
        }
        timeout = setTimeout(typeIt, 80);
      } else {
        ci--;
        twRef.current && (twRef.current.textContent = word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % roles.length;
          timeout = setTimeout(typeIt, 400);
          return;
        }
        timeout = setTimeout(typeIt, 45);
      }
    };
    timeout = setTimeout(typeIt, 800);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <HeroContainer id="hero">
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />
      <GridLines />
      <GlowOrb />

      <HeroContent>
        <Badge>
          <DotPulse />
          Front-End Dev &amp; Brand Designer
        </Badge>

        <HeroHeadline>
          <Word delay="0s">I solve</Word>{' '}
          <Word delay="0.12s" className="outline">business</Word>
          <br />
          <Word delay="0.24s">problems with</Word>
          <br />
          <Word delay="0.36s" className="accent-fill">design &amp; code</Word>
        </HeroHeadline>

        <TypewriterWrap>
          <span ref={twRef} />
          <Cursor />
        </TypewriterWrap>

        <HeroCTA>
          <WorkButton href="#projects">View My Work ↗</WorkButton>
          <ContactButton href="#contact">Get In Touch</ContactButton>
        </HeroCTA>

        <StatRow>
          <Stat>
            <StatNum>5<span>+</span></StatNum>
            <StatLabel>Years exp</StatLabel>
          </Stat>
          <Stat>
            <StatNum>10<span>+</span></StatNum>
            <StatLabel>Projects</StatLabel>
          </Stat>
          <Stat>
            <StatNum>100<span>%</span></StatNum>
            <StatLabel>Client rated</StatLabel>
          </Stat>
        </StatRow>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
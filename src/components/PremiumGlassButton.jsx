import React, { useRef, useState, useEffect } from 'react';

/**
 * PremiumGlassButton Component
 * Features:
 * 1. Native WebGL pill Signed Distance Field (SDF) shader
 * 2. Multi-octave Fractal Brownian Motion (FBM) liquid distortion on hover
 * 3. Chromatic edge rim & specular light reflections
 * 4. Interactive pair of mouse-tracking eyes
 * 5. Strictly self-contained on button elements only.
 */

const VERTEX_SHADER = `
attribute vec2 position;
varying vec2 vUv;
void main() {
    vUv = (position + 1.0) * 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision highp float;
varying vec2 vUv;
uniform float uTime;
uniform float uHover;
uniform float uClick;
uniform vec3 uBaseColor;
uniform vec3 uGlassColor;
uniform vec2 uResolution;

// Hash function for pseudo-randomness
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

// Simplex-style noise
float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

// Fractal Brownian Motion for liquid distortion
float fbm(vec2 p) {
    float f = 0.0;
    float amp = 0.5;
    for(int i = 0; i < 4; i++) {
        f += amp * noise(p);
        p *= 2.0;
        amp *= 0.5;
    }
    return f;
}

void main() {
    float aspect = uResolution.x / max(uResolution.y, 0.001);
    vec2 p = vUv * 2.0 - 1.0;
    p.x *= aspect;

    vec2 center = vec2(0.5);
    vec2 dirToCenter = normalize(vUv - center + vec2(0.0001));
    float distToCenter = length(vUv - center);

    // 1. SDF (Signed Distance Field) for Pill Shape
    float r = 1.0; 
    vec2 b = vec2(max(aspect - 1.0, 0.0), 0.0);
    vec2 d = abs(p) - b;
    float dist = length(max(d, 0.0)) + min(max(d.x, d.y), 0.0) - r;
    float innerDist = clamp(abs(dist), 0.0, 1.0);

    // 2. Liquid Noise Field
    float t = uTime;
    vec2 noiseUv = vUv * vec2(2.0, 1.0); 
    
    vec2 warp = vec2(fbm(noiseUv + t * 0.5), fbm(noiseUv + t * 0.5 + 12.34)) * mix(0.0, 0.4, uHover);
    warp -= dirToCenter * uClick * 0.25 * smoothstep(0.8, 0.0, distToCenter);
    
    float n1 = fbm(noiseUv + warp + vec2(t, 0.0));
    float n2 = fbm(noiseUv + warp + vec2(n1, t * 1.2));

    // 3. Glassy Rim & Specular Highlights
    float rimWidth = mix(0.15, 0.35, n2) * mix(1.0, 1.4, uHover);
    rimWidth += uClick * 0.15;
    float rim = smoothstep(rimWidth, 0.0, innerDist);
    
    float specDist = abs(innerDist - 0.12 + n1 * 0.08);
    float specular = smoothstep(0.03, 0.0, specDist);

    float rightBias = smoothstep(0.2, 1.0, vUv.x);
    rim *= mix(0.6, 1.5, rightBias);
    specular *= mix(0.5, 2.0, rightBias);

    // 4. Subtle Micro Particle Sparkles
    vec2 starUv = vUv * vec2(aspect * 6.0, 6.0);
    starUv.x -= uTime * 0.2; 
    starUv.y += sin(uTime * 0.5 + starUv.x) * mix(0.2, 0.6, uHover); 
    starUv += dirToCenter * uClick * 1.5;

    vec2 id = floor(starUv);
    vec2 gv = fract(starUv) - 0.5;
    float nStar = hash(id);
    float star = 0.0;
    
    float starThreshold = mix(0.94, 0.86, uHover); 
    
    if (nStar > starThreshold) { 
        float sizeMod = mix(0.5, 2.5, hash(id + 13.37)); 
        vec2 localWiggle = vec2(
            sin(uTime * 2.0 + nStar * 50.0),
            cos(uTime * 2.3 + nStar * 40.0)
        ) * 0.25 * uHover;

        float starDist = length(gv - localWiggle) * sizeMod;
        star = smoothstep(0.12, 0.0, starDist);
        star += smoothstep(0.25, 0.0, starDist) * 0.3;

        float twinklePhase = uTime * mix(5.0, 15.0, hash(id + 42.0));
        star *= sin(twinklePhase + nStar * 100.0) * 0.5 + 0.5; 
        star *= smoothstep(0.05, 0.2, innerDist); 
    }

    // 5. Composite Colors
    vec3 color = uBaseColor;
    float innerLiquid = smoothstep(0.2, 0.9, n2) * (1.0 - innerDist) * mix(0.2, 0.45, uHover);
    color += uGlassColor * innerLiquid;
    color += uGlassColor * rim * mix(0.6, 1.2, uHover);
    color += vec3(1.0) * specular * mix(0.8, 2.0, uHover);
    color += vec3(1.0) * star * mix(0.8, 1.5, uHover);

    // Click Surge Flash
    color += uGlassColor * rim * uClick * 0.8;
    color += vec3(1.0) * specular * uClick * 1.5;
    color += uGlassColor * exp(-distToCenter * 6.0) * uClick * 0.6;
    color *= smoothstep(1.5, 0.2, length(vUv - 0.5));

    gl_FragColor = vec4(color, 1.0);
}
`;

function hexToRgb(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map(x => x + x).join('');
  const num = parseInt(c, 16);
  return [(num >> 16) / 255, ((num >> 8) & 255) / 255, (num & 255) / 255];
}

export default function PremiumGlassButton({
  children = 'Click me',
  onClick,
  type = 'button',
  baseColor = '#000000',
  glassColor = '#D9D9D9',
  hoverSpeed = 0.65,
  borderRadius = 999,
  className = '',
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = null,
  showEye = false,
  hoverGlow = 'red', // 'red' | 'white' | 'none'
  textColor = '#999999',
}) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const eyeRef = useRef(null);
  const [pupil, setPupil] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const hoverRef = useRef(false);
  const clickRef = useRef(0);
  const [isIntersecting, setIsIntersecting] = useState(true);

  // Dynamic eye tracking following mouse position
  useEffect(() => {
    if (!showEye) return;
    const handleMouseMove = (e) => {
      if (!eyeRef.current) return;
      const rect = eyeRef.current.getBoundingClientRect();
      const eyeX = rect.left + rect.width / 2;
      const eyeY = rect.top + rect.height / 2;

      const deltaX = e.clientX - eyeX;
      const deltaY = e.clientY - eyeY;
      const angle = Math.atan2(deltaY, deltaX);

      const maxDistance = 2.4; // Max pupil travel in px
      const rawDist = Math.hypot(deltaX, deltaY);
      const dist = Math.min(maxDistance, rawDist / 35);

      setPupil({
        x: Math.cos(angle) * dist,
        y: Math.sin(angle) * dist,
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [showEye]);

  // Viewport intersection observer for 60fps GPU performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: '60px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // WebGL Renderer setup
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { antialias: false, alpha: false });
    if (!gl) return;

    function compileShader(src, type) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, src);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.warn(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vs = compileShader(VERTEX_SHADER, gl.VERTEX_SHADER);
    const fs = compileShader(FRAGMENT_SHADER, gl.FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn(gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
        -1,  1,
         1, -1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, 'uTime');
    const uHoverLoc = gl.getUniformLocation(program, 'uHover');
    const uClickLoc = gl.getUniformLocation(program, 'uClick');
    const uBaseColorLoc = gl.getUniformLocation(program, 'uBaseColor');
    const uGlassColorLoc = gl.getUniformLocation(program, 'uGlassColor');
    const uResolutionLoc = gl.getUniformLocation(program, 'uResolution');

    const baseRgb = hexToRgb(baseColor);
    const glassRgb = hexToRgb(glassColor);

    let currentHover = 0;
    let currentClick = 0;
    let accumulatedTime = 0;
    let lastTime = performance.now();
    let animId;

    function resize() {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    }

    resize();
    const resizeObserver = new ResizeObserver(resize);
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    function render(time) {
      if (!isIntersecting) {
        animId = requestAnimationFrame(render);
        return;
      }

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const targetHover = hoverRef.current ? 1.0 : 0.0;
      currentHover += (targetHover - currentHover) * (delta * 4.0);

      if (clickRef.current > 0) {
        currentClick = clickRef.current;
        clickRef.current = 0;
      }
      currentClick += (0.0 - currentClick) * (delta * 6.0);

      const speedFactor = 0.15 + (hoverSpeed - 0.15) * currentHover;
      accumulatedTime += delta * speedFactor;

      gl.useProgram(program);
      gl.uniform1f(uTimeLoc, accumulatedTime);
      gl.uniform1f(uHoverLoc, currentHover);
      gl.uniform1f(uClickLoc, currentClick);
      gl.uniform3f(uBaseColorLoc, baseRgb[0], baseRgb[1], baseRgb[2]);
      gl.uniform3f(uGlassColorLoc, glassRgb[0], glassRgb[1], glassRgb[2]);
      gl.uniform2f(uResolutionLoc, canvas.width, canvas.height);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animId = requestAnimationFrame(render);
    }

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(positionBuffer);
    };
  }, [baseColor, glassColor, hoverSpeed, isIntersecting]);

  const sizeStyles = {
    sm: 'px-6 py-3 text-xs sm:text-sm',
    md: 'px-8 sm:px-9 py-3.5 sm:py-4 text-xs sm:text-sm tracking-wider',
    lg: 'px-10 sm:px-12 py-4 sm:py-5 text-sm sm:text-base tracking-wider',
  };

  const handlePointerDown = () => {
    clickRef.current = 1.0;
    if (containerRef.current) {
      containerRef.current.style.transform = 'scale(0.96)';
    }
  };

  const handlePointerUp = () => {
    if (containerRef.current) {
      containerRef.current.style.transform = 'scale(1)';
    }
  };

  return (
    <button
      ref={containerRef}
      type={type}
      onClick={onClick}
      onMouseEnter={() => {
        hoverRef.current = true;
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        hoverRef.current = false;
        setIsHovered(false);
        handlePointerUp();
      }}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      style={{
        position: 'relative',
        borderRadius: `${borderRadius}px`,
        cursor: 'pointer',
        boxSizing: 'border-box',
        backgroundColor: baseColor,
        boxShadow: isHovered
          ? hoverGlow === 'none'
            ? 'inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.90), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.32), 0 12px 36px -6px rgba(0,0,0,0.9)'
            : hoverGlow === 'white'
            ? 'inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.90), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.32), 0 12px 36px -6px rgba(0,0,0,0.9), 0 0 20px rgba(255, 255, 255, 0.15)'
            : 'inset 0 1.5px 2px 0 rgba(255, 255, 255, 0.90), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.35), inset 0 0 0 1px rgba(255, 255, 255, 0.32), 0 12px 36px -6px rgba(0,0,0,0.9), 0 0 25px rgba(215, 25, 32, 0.25)'
          : 'inset 0 1.5px 1.5px 0 rgba(255, 255, 255, 0.65), inset 0 -1px 1px 0 rgba(255, 255, 255, 0.22), inset 0 0 0 1px rgba(255, 255, 255, 0.20), 0 10px 30px -10px rgba(0,0,0,0.75), 0 0 16px rgba(255, 255, 255, 0.06)',
        transition:
          'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease',
        zIndex: 1,
      }}
      className={`group select-none inline-flex items-center justify-center font-display font-medium tracking-normal overflow-hidden ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {/* Top Specular Light Rim */}
      <span
        aria-hidden="true"
        className="absolute top-0 left-6 right-6 h-[1.5px] bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none z-10 opacity-75 group-hover:opacity-100 group-hover:via-white transition-opacity duration-300"
      />
      {/* Bottom Subtle Rim Reflection */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-10 opacity-60 group-hover:opacity-85 transition-opacity duration-300"
      />

      {/* Native WebGL Shader Canvas (Self-contained on button only) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          borderRadius: `${borderRadius}px`,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
          }}
        />
      </div>

      {/* Button Label & Mouse-Tracking Eyes */}
      <span
        style={{
          position: 'relative',
          zIndex: 1,
          color: isHovered ? '#FFFFFF' : textColor,
          pointerEvents: 'none',
          textAlign: 'center',
          textShadow: isHovered
            ? '0px 2px 10px rgba(255, 255, 255, 0.40)'
            : '0px 1px 6px rgba(153, 153, 153, 0.15)',
        }}
        className="flex items-center justify-center gap-2.5 transition-transform duration-300 group-hover:scale-[1.02]"
      >
        <span>
          {showEye && typeof children === 'string'
            ? children.replace(/\s*(→|->|-->|&rarr;)\s*$/, '').trim()
            : children}
        </span>

        {/* Interactive Eye-Follow Element */}
        {showEye && (
          <span
            ref={eyeRef}
            className="inline-flex items-center gap-1 shrink-0 ml-1 transition-transform duration-300 group-hover:scale-105"
            aria-hidden="true"
          >
            {/* Left Eye */}
            <span
              style={{
                backgroundColor: isHovered ? 'rgba(217, 217, 217, 0.88)' : 'rgba(217, 217, 217, 0.75)',
              }}
              className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shadow-inner overflow-hidden shrink-0 border border-black/30 transition-colors duration-200"
            >
              <span
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#111111] relative flex items-center justify-center transition-transform duration-75 ease-out"
                style={{
                  transform: `translate(${pupil.x}px, ${pupil.y}px)`,
                }}
              >
                <span className="absolute -top-0.5 -right-0.5 w-0.5 h-0.5 rounded-full bg-white opacity-80" />
              </span>
            </span>

            {/* Right Eye */}
            <span
              style={{
                backgroundColor: isHovered ? 'rgba(217, 217, 217, 0.88)' : 'rgba(217, 217, 217, 0.75)',
              }}
              className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center shadow-inner overflow-hidden shrink-0 border border-black/30 transition-colors duration-200"
            >
              <span
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#111111] relative flex items-center justify-center transition-transform duration-75 ease-out"
                style={{
                  transform: `translate(${pupil.x}px, ${pupil.y}px)`,
                }}
              >
                <span className="absolute -top-0.5 -right-0.5 w-0.5 h-0.5 rounded-full bg-white opacity-80" />
              </span>
            </span>
          </span>
        )}

        {/* Optional Custom Icon */}
        {icon && <span className="inline-flex shrink-0 ml-1">{icon}</span>}
      </span>
    </button>
  );
}


declare module 'canvas-confetti' {
  interface ConfettiOptions {
    /**
     * The number of confetti to launch. More is always fun... but be cool, there's a lot of math involved.
     * @default 50
     */
    particleCount?: number;
    /**
     * How quickly the confetti will start flying.
     * @default 45
     */
    startVelocity?: number;
    /**
     * How far off center the confetti can go, in px.
     * @default 55
     */
    spread?: number;
    /**
     * How fast the confetti will rotate, in degrees.
     * @default 90
     */
    ticks?: number;
    /**
     * How quickly the particles will lose speed.
     * @default 0.9
     */
    decay?: number;
    /**
     * How quickly the particles will change size.
     * @default 0.9
     */
    scalar?: number;
    /**
     * How high the confetti will go in relation to its starting position.
     * @default 2
     */
    gravity?: number;
    /**
     * How quickly the particles will start flying.
     * @default { x: 0, y: 0.5 }
     */
    origin?: {
      x: number;
      y: number;
    };
    /**
     * An array of colors to use for the confetti. If this value is omitted, a random color will be picked from the default color list for each confetti.
     */
    colors?: string[];
    /**
     * An array of shapes for the confetti. The default is to use both squares and circles, but you could set this to just squares or just circles if you wanted.
     */
    shapes?: ('square' | 'circle')[];
    /**
     * A range for confetti to stagger their start time. Each confetti will start at some random value between 0 and this number.
     */
    zIndex?: number;
    /**
     * Disable showing the default white background.
     */
    disableForReducedMotion?: boolean;
  }

  function confetti(options?: ConfettiOptions): Promise<null>;

  namespace confetti {
    function reset(): void;
  }

  export = confetti;
}

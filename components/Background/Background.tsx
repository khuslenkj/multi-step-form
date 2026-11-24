import FluxLines from '../FluxLines';

export const Background = () => {

  return (

    <div style={{ width: '100%', height: '100vh', position: 'absolute', backgroundColor: 'black'}}>
  <FluxLines
    colors={["#ffffff","#ffffff","#ffffff"]}
    glow={2}
    rimWidth={0.2}
    lineWidth={1}
    flowDirection="down"
    mouseInteraction
    clickSwirl
    speed={0.5}
    scale={1.6}
    turbulence={1}
    fluidity={0.1}
    sharpness={2.5}
    shimmer={1.5}
    mouseStrength={1}
    mouseRadius={0.35}
    intro
    lightMode={false}
/>
</div>
)
  }
  
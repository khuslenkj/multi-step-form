import GlassSurface from "./GlassSurface"

export const GlassTemplate = () => {
  return (
    <GlassSurface
  width={320}
  height={76}
  borderRadius={38}
  distortionScale={-180}
  displace={0.5}
  backgroundOpacity={0.1}
>
  <span>Your content</span>
</GlassSurface>
  )
}

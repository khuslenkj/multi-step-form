import MicroSlats from '@/components/Background/MicroSlats';
import { Background } from '@/components/Background/Background';
import { GlassBackground } from '@/components/glass/GlassBackground';


export default function Home() {
  return (
<div style={{ width: '100%', height: '100vh', position: 'relative' }}>
  <Background/>
    <GlassBackground/>
</div>
  );
}

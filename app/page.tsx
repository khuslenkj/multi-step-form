import MicroSlats from '@/components/Background/MicroSlats';
import { Background } from '@/components/Background/Background';
import { GlassTemplate } from '@/components/glass/GlassTemplate';
import { FluxLinesFlow } from '@/components/FluxLines';


export default function Home() {
  return (
<div className='w-full h-screen relatve flex justify-center items-center'>
  <Background/>
  <GlassTemplate/>
</div>
  );
}

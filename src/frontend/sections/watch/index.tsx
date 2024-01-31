import { Button } from "@/frontend/components/ui/button";

export default function ProductWatchPage() {
  return (
    <div className="w-full h-screen flex flex-col justify-center">
      <h1>Chapter 1: First Sight</h1>
      <div className="mt-10">
        <p className="text-2xl">
          In the dim light of the jazz bar, amidst the soft caress of blues
          against the soul, she appeared like a vision – a silhouette that
          commanded the room with an effortless grace. The clink of glasses and
          the murmur of conversations faded into a distant murmur as Elise moved
          through the space, her presence a melody that resonated with an
          alluring harmony. As she approached, the warm undertones of amber
          lighting caressed her features, revealing the delicate contours of her
          face. A tress of her auburn hair slipped from behind her ear, a
          serpentine curl that beckoned touch, and the corner of her lips tilted
          in a knowing smile that suggested she held secrets too sumptuous to
          tell. With each step, her perfume wafted over, a blend of jasmine and
          wild rose, as intoxicating as the bourbon cradled in my hand. It was a
          scent that spoke of warm summer nights, of skin against skin, and of
          whispers that clung to the heart long after dawn. Tonight, the story
          began. At first sight.
        </p>
      </div>
      <div className="mt-20">
        <h2>Pick a path</h2>
        <div className="flex mt-5 gap-10">
          <Button variant={'ghost'}>Ignore feeling</Button>
          <Button variant={'outline'}>Confess deep connection</Button>
          <Button>Confess deep connection</Button>
        </div>
      </div>
    </div>
  );
}

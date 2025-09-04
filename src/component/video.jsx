export default function HeroVideo() {
  return (
    <div className="w-full h-[500px] flex items-center justify-center bg-black">
      <video
        src='\src\assets\cowvideos.mp4'  
        autoPlay
        muted
        loop
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>
  );
}

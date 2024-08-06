import './Fullscreen.css';

export default function Fullscreen({ image, setFullscreen }: { image?: string, setFullscreen: (image?: string) => void }) {
    if (!image) return null;
    return (
        <div id='fullscreen-container' tabIndex={-1} onClick={() => setFullscreen()}>
            <img src={image} alt='' />
        </div>
    )
}

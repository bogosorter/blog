import './Image.css';

export default function Image({ src, setFullscreen, aspectRatio, border = false }: { src: string, setFullscreen: (image?: string) => void, aspectRatio?: number, border?: boolean }) {
    return (
        <div className='image-container' style={border? { boxShadow: '0 0 2px black' } : undefined}>
            <img
                className='image'
                src={src}
                alt=''
                onClick={() => setFullscreen(src)}
                style={{ aspectRatio }}
            />
        </div>
    );
}
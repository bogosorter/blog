import './Post.css';

export default function Post({ children }: { children: React.ReactNode }) {
    return (
        <div className='post'>
            {children}
        </div>
    );
}
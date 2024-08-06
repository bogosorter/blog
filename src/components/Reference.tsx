import { useState } from 'react';
import { CheckLg, Link45deg } from 'react-bootstrap-icons';
import './Reference.css';

export default function Reference({ reference }: { reference: string }) {

    const [copied, setCopied] = useState(false);

    function copy() {
        const baseUrl = window.location.origin + window.location.pathname;
        navigator.clipboard.writeText(baseUrl + '#' + reference);

        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
    }

    return (
        <div id={reference} className='reference' tabIndex={-1} onClick={copy}>
            {copied? <CheckLg size={20} /> : <Link45deg size={20} />}
        </div>
    );
}
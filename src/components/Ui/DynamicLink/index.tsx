import Link from 'next/link';
import { LinkInterface } from '@/interfaces/LinkInterface';

const DynamicLink = ({ level = 'p', ariaLabel, title, children, className, href }: LinkInterface) => {
    const levelClassMap: { [key: string]: string } = {
        '1': 'display',
        '2': 'heading-l',
        '3': 'heading-m',
        '4': 'heading-s',
        '5': 'heading-xs',
        '6': 'sub-heading',
        'p': 'body-regular',
        'p-bold': 'body-bold',
        'span': 'body-regular',
        'span-bold': 'body-bold'
    };

    const levelClasses = level === 'image' ? '' : levelClassMap[level] || '';

    return (
        <Link           
            href={href} 
            title={title}
            aria-label={ariaLabel}
            className={`ease duration-300 outline-magenta/0 outline focus:outline-magenta/50 outline-offset-2 outline-4 rounded-lg ${levelClasses} ${className || ''}`}
        >
            {children}
        </Link>
    );
};

export default DynamicLink;

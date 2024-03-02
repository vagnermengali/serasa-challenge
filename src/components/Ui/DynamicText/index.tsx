import React from 'react';
import { DynamicTextInterface } from '@/interfaces/DynamicTextInterface';

const DynamicText = ({ level = 'p', ariaLabel, title, children, className }: DynamicTextInterface) => {
    const isHeading = level !== 'p';
    const isBold = level === 'p-bold';
    const ariaLevel = isHeading ? level : null;
    const role = isHeading ? 'heading' : null;

    const levelClassMap: { [key: string]: string } = {
        '1': 'display',
        '2': 'heading-l',
        '3': 'heading-m',
        '4': 'heading-s',
        '5': 'heading-xs',
        '6': 'sub-heading',
        'p': 'body-regular',
        'p-bold': 'body-bold'
    };

    const Tag = isBold ? 'p' : isHeading ? `h${level}` : 'p';

    const tagProps = {
        role,
        'aria-label': ariaLabel,
        'aria-level': ariaLevel,
        title,
        className: `${levelClassMap[level] || ''} ${className || ''}`,
    };

    const tagPropsTwo = {
        'aria-label': ariaLabel,
        title,
        className: `${levelClassMap[level] || ''} ${className || ''}`,
    };

    return (
        <>
            {!isHeading || isBold ? (
                <>
                    {React.createElement(Tag, tagPropsTwo, children)}
                </>
            ) : (
                <>
                    {React.createElement(Tag, tagPropsTwo, children)}
                </>
            )}
        </>
    );
};

export default DynamicText;

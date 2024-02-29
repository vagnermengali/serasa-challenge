import React from 'react';
import { DynamicTextInterface } from '@/interfaces/DynamicTextInterface';

const DynamicTextComponent = ({ level = 'p', ariaLabel, title, children }: DynamicTextInterface) => {
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
        className: levelClassMap[level] || '',
        title
    };

    return (
        <>
            {React.createElement(Tag, tagProps, children)}
        </>
    );
};

export default DynamicTextComponent;

import React, { Component } from 'react';

const Icon = ({glyph, className = 'icon', width = 16, height = 16}) => (
    <svg className={className} width={width} height={height}>
        <use xlinkHref={glyph} />
    </svg>
)

export default Icon;

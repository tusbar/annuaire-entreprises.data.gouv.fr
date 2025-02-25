import React, { PropsWithChildren, ReactNode } from 'react';

const left = (orientation: 'left' | 'right' | 'center', width = 250) => {
  switch (orientation) {
    case 'right':
      return `calc(50% - ${width}px);`;
    case 'left':
      return `50%`;
    case 'center':
    default:
      return `calc(50% - ${Math.round(width / 2)}px)`;
  }
};

const InformationTooltip: React.FC<
  PropsWithChildren<{
    label: ReactNode | string;
    orientation?: 'left' | 'right' | 'center';
    width?: number;
    inlineBlock?: boolean;
  }>
> = ({
  children,
  label,
  orientation = 'center',
  width = 250,
  inlineBlock = true,
}) => (
  <>
    <span className="wrapper">
      {children}
      <div className={`tooltip ${orientation}`}>{label}</div>
    </span>
    <style jsx>{`
      .wrapper {
        cursor: help;
        position: relative;
        display: ${inlineBlock ? 'inline-block' : 'block'};
      }

      .wrapper .tooltip {
        font-size: 0.9rem;
        background: #444;
        border-radius: 5px;
        border-bottom-right-radius: ${orientation === 'right' ? 0 : 5}px;
        border-bottom-left-radius: ${orientation === 'left' ? 0 : 5}px;
        bottom: calc(100% + 10px);
        color: #fff;
        left: ${left(orientation, width)};
        display: block;
        visibility: hidden;
        padding: 10px;
        width: ${width}px;
        pointer-events: none;
        position: absolute;
        z-index: 100;
      }

      /* This bridges the gap so you can mouse into the tooltip without it disappearing */
      .wrapper .tooltip:before {
        bottom: -10px;
        content: ' ';
        display: block;
        height: 20px;
        left: 0;
        position: absolute;
        width: 100%;
      }

      /*small triangle */
      .wrapper .tooltip.center:after,
      .wrapper .tooltip.left:after,
      .wrapper .tooltip.right:after {
        bottom: -5px;
        content: ' ';
        height: 0;
        position: absolute;
        width: 0;
      }

      .wrapper .tooltip.center:after {
        border-left: solid transparent 5px;
        border-right: solid transparent 5px;
        border-top: solid #444 5px;
        left: 50%;
      }
      .wrapper .tooltip.left:after {
        border-bottom: solid transparent 5px;
        border-right: solid transparent 5px;
        border-left: solid #444 5px;
        left: 0;
      }
      .wrapper .tooltip.right:after {
        border-bottom: solid transparent 5px;
        border-left: solid transparent 5px;
        border-right: solid #444 5px;
        right: 0;
      }

      .wrapper:hover .tooltip {
        visibility: visible;
        pointer-events: auto;
      }
    `}</style>
  </>
);

export default InformationTooltip;

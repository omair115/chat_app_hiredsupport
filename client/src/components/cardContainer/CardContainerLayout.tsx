import React from 'react';
import { DataCardLayoutContainer } from './CardContainerLayout.styled';

interface Props {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  ref?:any
}

const CardContainerLayout: React.FC<Props> = ({
  children,
  style,
  className,
  onClick,
  ref
}) => (
  <DataCardLayoutContainer
    style={style}
    className={className}
    onClick={onClick}
    ref={ref}
  >
    {children}
  </DataCardLayoutContainer>
);

export default CardContainerLayout;

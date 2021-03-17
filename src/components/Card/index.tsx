import React, { memo } from 'react';
import { CardMain, MetaCard } from './styled'

interface Props extends React.ComponentProps<'div'> {
  title?: string,
  footer?: React.ReactNode,
  extra?: React.ReactNode,
  cover?: React.ReactNode,
  children?: React.ReactNode,
  actions?: any,
  style?: React.CSSProperties

}
interface PropsMeta extends React.ComponentProps<'div'> {
  title?: string,
  discription?: string,
  avatar?: React.ReactNode,
}
export const Meta: React.FC<PropsMeta> = ({ title, discription, avatar }) => (
  <MetaCard>
  <div className="card-avatar">
    {avatar}
  </div>
  <div className="card-meta-detail">
    <h4 className="meta-title">{title}</h4>
    <div className="meta-description"><p>{discription}</p></div>
  </div>
    
  </MetaCard>
);
const Card: React.FC<Props> = (props) => {
  const { title, extra, cover, children, actions } = props;
  console.log('render card',actions);
  
  return (
    <CardMain {...props}>
      <div className="cover" >{cover}</div>
      <div className="card-title"><h4>{title}</h4> {extra}</div>
      
      <div className="card-body">
        {children}
      </div>
      
      {actions && <ul className="card-actions">{actions.map((Component: any, index: any) => (
         <React.Fragment key={index}>
           <li className="action-item"> { Component }</li>
         
        </React.Fragment>
      ))}</ul>}
    </CardMain>


  );

}

export default Card


import React from 'react';

class NameCard extends React.Component {
   render() {
       const {name,age,favorite} = this.props;
       return (
           <div>
               <p>{name}</p>
               <p>{age}</p>
               <p>{
                   favorite.map((tag,index)=>(
                       <span key={index}>{tag}</span>
                   ))
               }</p>
           </div>
       )
   }
};

export default NameCard;

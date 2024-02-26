import React from 'react'

const Collections = (props) => {
    const{title,img1,img2,img3,img4} = props.gentsFashion
  return (
    <div className='collectionSection'>
      <h2>{title}</h2>
    <div className="menImg">
        <img src={img1} alt="1st men img"  />
        <img src={img2} alt="1st men img"  />
        <img src={img3} alt="1st men img"  />
        <img src={img4} alt="1st men img"  />
    </div>

    </div>
  )
}

export default Collections

import React from 'react'

const WomenCollection = (props) => {
    const {title,img1,img2,img3,img4} = props.ladiesFashion
  return (
    <div className="collectionSection">
        <h2>{title}</h2>
        <img src='items - Copy\d078705c172a131d88c67bd19986172d.jpg' alt="Banner-1" />
        <div className="menImg">
        <img src={img1} alt="1st men img"  />
        <img src={img2} alt="1st men img"  />
        <img src={img3} alt="1st men img"  />
        <img src={img4} alt="1st men img"  />
        </div>
    </div>
  )
}

export default WomenCollection

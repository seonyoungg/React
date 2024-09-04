import React from 'react'

const styles = {
    box : {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 300,
        height: 300,
        border: '1px dashed black'
    },
    img : {
        position: 'relative',
        width: 200,
        height: 200,
        objectFit : 'contain'
    },
    imgCenter: {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform : 'translate(-50%, -50%)',
    }
}
const Box = (props) => {
    const resultStyle = (result)=>{
        if(result === "WIN"){
            return { border : '2px dashed blue'}
            }else if(result === "LOSE"){
                return { border : '2px dashed red'}
            }else {
                return { border : '2px dashed green'}
            }
    }
  return (
    <div style={{...styles.box,...resultStyle(props.result)}}>
        <h2>{props.title}</h2>
        <div style={styles.img}>
            <img style={styles.imgCenter} src={props.item && props.item.img}/>
        </div>
        <h3>
            Result : {props.result}
        </h3>
    </div>
  )
}

export default Box
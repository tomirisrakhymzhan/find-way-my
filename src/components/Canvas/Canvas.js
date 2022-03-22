import React from "react";

export default function Canvas(props){
    
    
    const canvasRef = React.useRef(null)
    React.useEffect(()=>{
        const canvas = canvasRef.current
        canvas.width = 200;
        canvas.height = 200;
        const context = canvas.getContext('2d')
    }, [])
    return(
        <canvas ref={canvasRef} ></canvas>
    );
}
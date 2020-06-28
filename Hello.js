import React, {useState,useEffect} from 'react';
import {Rnd} from 'react-rnd'
import './style.css';

const Draggable = () =>{

  const [infos,setPostion] = useState(
    {
     width:100,height:200,x:100,y:200,
    }
  );

  const [styles,setStyle] = useState(
    {
      textAlign: "left",
      fontWeight: 'normal',
      visible: false
    }
  )

  useEffect(()=>{console.log(infos),console.log(styles)},[infos,styles])

  return( 
    <>
       <Rnd
        className="box"　style={styles}
        size={{ width: infos.width, height: infos.height }}
        position={{ x: infos.x, y: infos.y }}
        onDragStop={(e,d)=>{
          setPostion({...d,...styles})
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setPostion({
                    width: ref.style.width,
                    height: ref.style.height,
                    ...position,
                    ...styles
                    });
        }}
        resizeGrid={[1, 1]}
        dragGrid={[1, 1]}
         >
        疲れた
        </Rnd>
        <Resize resize={()=>setPostion({...infos,x:100,y:200})}/>
        <ChangeStyle elementName="left"   element={()=>setStyle({...styles,textAlign:"left"})}/>
        <ChangeStyle elementName="center" element={()=>setStyle({...styles,textAlign:"center"})}/>
        <ChangeStyle elementName="right"  element={()=>setStyle({...styles,textAlign:"right"})}/>
        <ChangeStyle elementName="B"      element={()=>setStyle({...styles,fontWeight:"bold"})}/>

    </>
  )
}

const Resize = (props)=>{
    return <button className="box" type="button" onClick={props.resize}>サイズ変更</button>
}


const ChangeStyle = (props)=>{
    return <button className="box" type="button" onClick={props.element}>{props.elementName}</button>
}

export default Draggable
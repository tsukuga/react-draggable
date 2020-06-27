import React, {useState,useEffect} from 'react';
import {Rnd} from 'react-rnd'
import './style.css';

const Draggable = () =>{

  const [infos,setPostion] = useState(
    {
     width:100,height:200,x:100,y:200,
    }
  );

  useEffect(()=>{console.log(infos.x)},[infos.x])

  return( 
    <>
       <Rnd
        className="box"
        size={{ width: infos.width, height: infos.height }}
        position={{ x: infos.x, y: infos.y }}
        onDragStop={(e,d)=>{
          setPostion({...d})
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setPostion({
                    width: ref.style.width,
                    height: ref.style.height,
                    ...position
                    });
        }}
        resizeGrid={[1, 1]}
        dragGrid={[10, 10]}
         >
        
        </Rnd>

        <Resize resize={()=>setPostion({x:100,y:200})}/>
    </>
  )
}

const Resize = (props)=>{

    return <button className="box" type="button" onClick={props.resize}>サイズ変更</button>
  
}

export default Draggable
import React, {useState,useEffect} from 'react';
import {Rnd} from 'react-rnd'
import './style.css';

const Draggable = () =>{

  const [infos,setPostion] = useState(
    {
     width:100,height:200,x:100,y:200,
     style: {
        textAlign: "center",
        fontWeight: 'normal',
        visible: false
      },
    }
  );

  useEffect(()=>{console.log(infos.x)},[infos.x])

  return( 
    <>
       <Rnd
        className="box"　style={infos.style}
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
        疲れた
        </Rnd>

        <Resize resize={()=>setPostion({x:100,y:200})}/>
        <ChangeStyle Bold={()=>setPostion({style：{center:'center'}})/>

    </>
  )
}

const Resize = (props)=>{
    return <button className="box" type="button" onClick={props.resize}>サイズ変更</button>
}


const ChangeStyle = (props)=>{
    return <button className="box" type="button" onClick={props.resize}>B</button>
}

export default Draggable
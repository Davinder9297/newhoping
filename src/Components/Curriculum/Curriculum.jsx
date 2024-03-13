import React, {useState} from 'react'
import "./Curriculum.css"
import arrowIcon from "../../Assets/arrow.png";
import folderIcon from "../../Assets/folder.png";



function Curriculum(props) {
let {data}=props;
const [clicked, setclicked] = useState(false)
// console.log(data);
// let {BeforeSubscriptiondata}=useContext(globalProvider)
// console.log(BeforeSubscriptiondata());
// console.log(temp);
  const [isVisible, setIsVisible] = useState({
    lesson1: false,
    lesson2: false,
  });

  const toggleVisibility = (displayLesson) => {
    setIsVisible(prev => ({
      ...prev,
      [displayLesson]: !prev[displayLesson]
    }));
  };

  function ClickSection(id) {
    if (!clicked) {
      setclicked(true);
      let inner = document.getElementById(id);
      // console.log(inner);
      inner.style.display = "none";
    } else {
      setclicked(false);
      let inner = document.getElementById(id);

      // console.log(inner);
      inner.style.display = "block";
    }
  }
  return (
    <div className='curriculum' id='curriculum'>
      <p>Fast track your journey to become a skilled developer in just 6 months with our best Full Stack Developer Course.</p>

      <div className='curriculum-lessons'>
{
  data?.map((item,ind)=>{
    let {lessons}=item;
    return(<>
    <div className='lesson-container' onClick={() => ClickSection(ind)}>

<div className='lesson-container-title' >
    <div className='lesson-container-title-left'>
      <div className='icon-arrow' ><img src={arrowIcon} /></div>
      <p className={'para-color'}>{item.chapter_name}</p>
    </div>

    <div className='lesson-container-title-right'>
      <p>{item.lessons.length} lessons</p>
      <p>45 Mins</p>
    </div>
</div>


<div id={ind} className={`lesson-container-contents `}>

{
  lessons?.map((it)=>{
    return(<>
    <div className='lesson-container-content'>
      <div className='lesson-container-content-left'>
        <div className='icon-arrow'><img src={folderIcon}/></div>
        <p>{it.lesson_name}</p>
      </div>
      <div className='lesson-container-content-right'>
        <button>Preview</button>
        <p>{it.duration}</p>
      </div>
  </div>
    </>)
  })
  }
</div>

</div>
    </>)
  })
}      
     </div>
    </div>
  )
}

export default Curriculum;

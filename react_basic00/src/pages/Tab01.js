import { useState } from "react";

const TabData = [
    { id: 1, title: "menu01", content: "content01" },
    { id: 2, title: "menu02", content: "content02" },
    { id: 3, title: "menu03", content: "content03" },
];

const Tab = () => {
    const [num, setNum] = useState(0)
    return (
        <>
            <ul>
                {
                    TabData.map((el, idx) => (
                        <li key={el.id}
                        onClick={()=>{
                            setNum(idx)
                        }}
                        >{el.title}</li>
                    ))
                }
            </ul>
            <div className="content">
                {TabData[num].content}
            </div>
        </>
    )
};

export default Tab;

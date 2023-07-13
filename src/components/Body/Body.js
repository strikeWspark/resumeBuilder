import React, { useState } from "react";
import Editor from "../Editor/Editor";
import style from './body.module.css'

function Body () {

    const colors = ["#239ce2", "#48bb78", "#0bc5ea", "#a0aec0", "#ed8936"];

    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievement: "Achivements",
        summary: "Summary",
        other: "Other"
    }

    const [resumeInformation,setResumeInformation] = useState({
        [sections.basicInfo]: {
            id: sections.basicInfo,
            sectionTitle: sections.basicInfo,
            detail:{}
        },
        [sections.workExp]: {
            id: sections.workExp,
            sectionTitle: sections.workExp,
            details: []
        },
        [sections.project]: {
            id: sections.project,
            sectionTitle: sections.project,
            details: []
        },
        [sections.education]:{
            id: sections.education,
            sectionTitle: sections.education,
            details: []
        },
        [sections.achievement]: {
            id: sections.achievement,
            sectionTitle:sections.achievement,
            details: []
        },
        [sections.summary]: {
            id: sections.summary,
            sectionTitle: sections.summary,
            detail: ""
        },
        [sections.other]: {
            id: sections.other,
            sectionTitle: sections.other,
            detail: ""
        }
    })

    const [activeColor,setActiveColor] = useState(colors[0])
    return (
         <>

            <div className={style.container}>
                <p className={style.heading}>Resume Builder</p>
                <div className={style.toolbar}>
                    <div className={style.colors}>
                            {colors.map((item) => (
                                <span 
                                key={item}
                                style={{backgroundColor: item}}
                                className={`${style.color} ${
                                    activeColor === item?style.active:""
                                }`}
                                onClick={() => setActiveColor(item)}
                                />
                            ))}
                    </div>
                    <button>Download</button>
                </div>

                <Editor
                    sections = {sections}
                    information={resumeInformation}/>
            </div>
         </>
        
    )
}

export default Body;
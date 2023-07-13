import React, { useState } from "react";
import InputControl from "../InputControl/InputControl";
import style from './editor.module.css'

function Editor (props){
    const sections = props.sections;
    const information = props.information;

    const [activeSectionKey,setActiveSectionKey] = useState(Object.keys(sections)[0])
    const [activeInformation,setActiveInformation] = useState(
        information[sections[Object.keys(sections)[0]]]
    )
    const [values,setValues] = useState({
        name: activeInformation?.detail?.name  || "",
        title: activeInformation?.detail?.title || "",
        linkedin: activeInformation?.detail?.linkedin || "",
        github: activeInformation?.detail?.github || "",
        phone: activeInformation?.detail?.phone || "",
        email: activeInformation?.detail?. email || ""
    })
    const basicInfoBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl 
                    label="Name"
                    placeholder="Enter your full name e.g. Saurabh"
                    value={values.name}
                    onChange={(event) => 
                    setValues((prev) => ({...props,name:event.target.value}))
                    }
                    />
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter your title e.g. Backend Developer"
                    onChange={(event) => 
                    setValues((prev) => ({...prev,title:event.target.value}))
                }
                />
            </div>
            <div className={style.row}>
                <InputControl
                    label="LinkedIn URL"
                    value={values.linkedin}
                    placeholder="LinkedIn Profile Link"
                    onChange={(event) =>
                        setValues((prev) => ({...prev,linkedin:event.target.value}))
                    }
                />

                <InputControl
                    label="Github Link"
                    value={values.github}
                    placeholder="Enter Github Profile Link"
                    onChange={(event) => 
                        setValues((prev) => ({prev,github:event.target.value}))
                    }
                />
            </div>

            <div className={style.row}>
                <InputControl
                    label="Mobile"
                    value={values.phone}
                    placeholder="Enter Mobile No."
                    onChange={(event) =>
                        setValues((prev) => ({...prev,phone: event.target.value}))
                    }
                />

                <InputControl
                    label="Email"
                    value={values.email}
                    placeholder="Enter Email"
                    onChange={(event) =>
                        setValues((prev) => ({...prev,email:event.target.value}))
                    }
                />
            </div>
        </div>
    );

    const workExpBody = (
        <div className={style.detail}>
            <div className={style.row}>
                <InputControl
                    label="Title"
                    value={values.title}
                    placeholder="Enter title e.g. FrontEnd developer"
                    onChange={(event) => 
                        setValues((prev) => ({...prev,title: event.target.value}))
                    }
                /> 

                <InputControl
                    label="Company Name"
                    placeholder="e.g. Salesforce"
                    defaultValue={values.companyName}
                    onChange={(event) =>
                        setValues((prev) => ({...prev,companyName:event.target.value}))
                    }
                /> 
            </div>

            <div className={style.row}>
                <InputControl
                    label="Certificate Link"
                    placeholder="Enter Certificate Link"
                    value={values.certificateLink}
                    onChange={(event) => 
                        setValues((prev) => ({...prev,certificateLink: event.target.value}))
                    }
                    />
                
                <InputControl
                    label="Location"
                    placeholder="Enter Location e.g. Hyderabad"
                    value={values.location}
                    onChange={(event) =>
                        setValues((prev) => ({...prev,location:event.target.value}))
                    }
                />
            </div>

            <div className={style.row}>
                <InputControl   
                    label="Start Date"
                    type="date"
                    value={values.startDate}
                    placeholder="Enter Start date of work"
                    onChange={(event) => 
                        setValues((prev) => ({...prev,startDate: event.target.value}))
                    }
                />

                <InputControl   
                    label="End Date"
                    type="date"
                    value={values.endDate}
                    placeholder="Enter End date of work"
                    onChange={(event) => 
                        setValues((prev) => ({...prev,endDate: event.target.value}))
                    }
                />

                
            </div>
        </div>
    )

    const generateBody = () => {
        
        switch(sections[activeSectionKey]){
            case sections.basicInfo:
                return basicInfoBody;
            case sections.workExp:
                return workExpBody;
            default:
                return null;
        }
        
    }
    return (
        
        <div className={style.container}>
            <div className={style.heading}>
                {Object.keys(sections)?.map((key) => (
                    <div 
                        className={`${style.section} ${
                           activeSectionKey === key ? style.active : "" 
                        }`}
                        key = {key}
                        onClick = {() => setActiveSectionKey(key)}
                        >
                        {sections[key]}

                    </div>
                    
                ))}
                
                
            </div>
            {generateBody()}
        </div>
        
  
    )
}

export default Editor;
import React from "react";

type AccardionPropsType = {
    titleValue: string,
    collapsed: boolean
}

function Accordion(props: AccardionPropsType) {
    console.log('Accordion rendering')
    return props.collapsed ?
        (<div>
            <AccordionTitle title={props.titleValue}/>
            <AccordionBody body={props.titleValue}/>
        </div>)
        :
        (<div>
            <AccordionTitle title={props.titleValue}/>
        </div>)
}

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3>{props.title}</h3>
    )
}


function AccordionBody(props: any) {
    return (
        <ul>
            <li>{props.body} 1</li>
            <li>{props.body} 2</li>
            <li>{props.body} 3</li>
        </ul>
    )
}


export default Accordion
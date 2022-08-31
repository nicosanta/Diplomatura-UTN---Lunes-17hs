import React from 'react'; 

const NovedadItem = (props) => {
    const {title, body, imagen} = props;

    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{body}</h2>
            <img src={imagen}></img>
            <div dangerouslySetInnerHTML={{__html:body}} />
            <hr/>
        </div>
    );
}

export default NovedadItem;
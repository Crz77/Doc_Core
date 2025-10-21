import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './loss-tree.css';
import lossTreeJson from '../../files/loss-tree.json'; 

function TreeItem({ data, lossIds, setLossIds, checkboxState, setCheckboxState }) {
    const [collapsed, setCollapsed] = useState(true);

    const hasChildren = data.childs && data.childs.length > 0;

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const toggleIds = () => {
        const loss_id = data.loss_id;

        if (lossIds.includes(loss_id)) {
            setLossIds(lossIds.filter((id) => id !== loss_id));
        } else {
            setLossIds((prevLossIds) => [...prevLossIds, loss_id]);
        }
    };

    const toggleCheckbox = () => {
        const newCheckboxState = { ...checkboxState };
        newCheckboxState[data.loss_id] = !newCheckboxState[data.loss_id];
        setCheckboxState(newCheckboxState);
    };

    return (
        <>
            <div>
                    {hasChildren && (collapsed ? (
                        <div onClick={toggleCollapsed} className='collapsed-list'>
                            <FontAwesomeIcon icon="folder"/>
                            <span  className='loss-item' loss_id={data.loss_id}>
                                {' ' + data.loss_description_display}
                            </span>
                        </div>
                    ) : (
                        <div onClick={toggleCollapsed} className='uncollapsed-list'>
                            <FontAwesomeIcon icon="folder-open"/>
                            <span className='loss-item' loss_id={data.loss_id}>
                                {' ' + data.loss_description_display}
                            </span>
                        </div>
                    ))}
                    {!hasChildren && (
                        <div onClick={(e) => {
                            // Verhindere, dass der Klick doppelt verarbeitet wird, wenn direkt auf die Checkbox geklickt wird
                            if (e.target.type !== 'checkbox') {
                                toggleIds();
                                toggleCheckbox();
                            }
                        }}>
                            <input
                                type="checkbox"
                                checked={checkboxState[data.loss_id] || false}
                                onClick={(e) => e.stopPropagation()} // Verhindert, dass der Klick vom übergeordneten `div` behandelt wird
                                onChange={() => {
                                    toggleIds();
                                    toggleCheckbox();
                                } }
                            />
                            <span loss_id={data.loss_id}>{' ' + data.loss_description_display}</span>
                        </div>
                        
                    )}

                {!collapsed && (
                    <ul className='loss-ul'>
                        {data.childs.map((child) => (
                            <li key={child.loss_id}>
                                <div>
                                    <TreeItem   
                                        data={child}
                                        lossIds={lossIds}
                                        setLossIds={setLossIds}
                                        checkboxState={checkboxState}
                                        setCheckboxState={setCheckboxState}
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}

function MailComponents({ lossIds }) {
    return (
        <button className="tooltip id-buttons button button--sm button--secondary" onClick={() => openMail({ lossIds })}>
            <span className='tooltiptext'>Mail mit IDs an <br/> christoph.lengauer@skf.com</span>
            <FontAwesomeIcon icon="envelope" size="lg" />{' '}
        </button>
    );
}

function openMail({ lossIds }) {
    const mailAdress = "mailto:christoph.lengauer@skf.com";
    const subject = "Verlustkatalog Anpassung";
    const body = `Hallo,

    Bitte den Verlustkatalog für Maschine <Name der Maschine> im Bereich <Name des Bereichs oder Channels> anpassen.

    Folgende IDs bitte eintragen:

    ${lossIds}

    Danke,
    <Name einfügen>`;

    const mailtoLink = `${mailAdress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

export default function LossTree() {
    const [lossIds, setLossIds] = useState([]);
    const [checkboxState, setCheckboxState] = useState({});
    const [jsonData, setJsonData] = useState();
    
    

    useEffect(() => {
        setJsonData(lossTreeJson);
        console.log(jsonData);
    }, []);
    
/*     useEffect(() => {
        fetch('http://mes-sty.skf.net/1/api/DataServiceCatalogLossRestV1/get')
        .then(response =>  {
             return response.json()
        })
        .then(data => {
             console.log(data);
             setJsonData(data);
        })
     }, []); */



    function IdContainer() {
        return (
            <>
                <div className="id-container-header">
                    <div className="row">
                        <div className="col col--6">
                            <div className="col-demo">
                                <h3>Verlust IDs</h3>
                            </div>
                        </div>
                        <div className="col col--6">
                            <div className="col-demo">
                                <button onClick={() => navigator.clipboard.writeText(lossIds)} className="tooltip id-buttons button button--sm button--secondary">
                                    <span className='tooltiptext'>In Zwischenablage kopieren</span>
                                    <FontAwesomeIcon icon="clipboard" size="lg" />{' '}
                                </button>
                                <MailComponents lossIds={lossIds}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="id-container-numbers">
                    {lossIds.length > 0 && (
                        lossIds.map(id => id + ", ")
                    )}
                    {lossIds.length == 0 && (
                        <span>Keine IDs ausgewählt</span>
                    )}
                    </div>
            </>
        );
    }

    return (
        <>
            <div className="tree-container">
                {jsonData?.result.childs.map((child) => (
                    <TreeItem
                        key={child.loss_id}
                        data={child}
                        lossIds={lossIds}
                        setLossIds={setLossIds}
                        checkboxState={checkboxState}
                        setCheckboxState={setCheckboxState}
                    />
                ))}
            </div>
            <IdContainer />
        </>
    );
}
import React, { Component } from 'react';
import { ExtensionPoint, useRuntime } from 'vtex.render-runtime'
import styles from './styles.css';


export default class HeaderBikinis extends Component {

    static defaultProps = {
        image: "",
    }


    static uiSchema = {
        image: {
            'ui:widget': 'image-uploader',
        },
    }


    static getSchema = (props) => {
        return {
            properties: {
                image: {
                    default: '',
                    title: 'Imagen Header',
                    type: 'string',
                    widget: {
                        'ui:widget': 'image-uploader',
                    }
                },
            },
            title: 'HeaderJC',
            type: 'object',
        }
    }


    render() {
        const {image}=this.props;

        return (
            <div>
                <ExtensionPoint id="topbar"/>
                <div className={styles.parent}>
                    <img src={image} className={styles.child}/>

                    <div className={styles.child}>
                        <ExtensionPoint id="minicartjc"/>
                    </div>
                </div>

                <ExtensionPoint id="menujc" className=""/>
            </div>
        )
    }
}
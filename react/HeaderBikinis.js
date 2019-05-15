import React, { Component } from 'react';
import { ExtensionPoint, useRuntime } from 'vtex.render-runtime'



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
            <div className="flex justify-center">
                <img src={image}/>

                <ExtensionPoint id="header-topbar" />

            </div>
        )
    }
}
import React, { useEffect } from 'react';
import axios from 'axios';
import Header from './../Header/Header';
import logo from '../../assets/images/NickMansTrap.png';

export default function Home() {

    useEffect(() => {
        const authentication = async () => {
            const body = `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
                <Body>
                    <obtenerToken xmlns="http://com.gs.gsautos.ws.autenticacion">            
                        <arg0 xmlns="">
                            <usuario>ATC0</usuario>
                    <password>2r2kGdeUA0</password>
                        </arg0>
                    </obtenerToken>
                </Body>
            </Envelope>`;

            axios.post("https://serviciosgs.mx/gsautos-ws/soap/autenticacionWS?wsdl", body, { headers: { 'Content-Type': 'text/xml; charset=utf-8' }, responseType: 'text' })
            .then((response) => {
                console.log(response);
            });
            // fetch("https://serviciosgs.mx/gsautos-ws/soap/autenticacionWS?wsdl", {
            //     method: 'POST',
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         'Content-Type': 'text/xml; charset=utf-8',
            //         'Accept-Encoding': 'gzip, deflate, br'
            //     },
            //     body: `<Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
            //     <Body>
            //         <obtenerToken xmlns="http://com.gs.gsautos.ws.autenticacion">            
            //             <arg0 xmlns="">
            //                 <usuario>ATC0</usuario>
            //         <password>2r2kGdeUA0</password>
            //             </arg0>
            //         </obtenerToken>
            //     </Body>
            // </Envelope>`
            // })
            // .then(response => console.log(response));
        };

        authentication().catch(null);
    }, [])

    return (
        <React.Fragment>
            <Header />
            <div className="font-roboto">
                <div className="content row col-5 col-lg-1">
                    <div className="col-3 col-lg-1">
                        <h3 className="display-3">Welcome to NickMan's Trap</h3>
                        <h4>The new front-end development framework.<br />Design responsive web pages, use different websites for different audiences, validate forms</h4>
                    </div>
                    <div className="col-2 col-lg-1">
                        <img className="img" src={logo} alt="Logo" />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
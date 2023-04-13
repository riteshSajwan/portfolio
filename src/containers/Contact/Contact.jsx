import React from 'react';
import './Contact.css'
import { contactMe } from '../../Portfolio';
import { Fade } from 'react-awesome-reveal';
import { BrowserView, MobileView } from 'react-device-detect';

const Contact = () => {

    if (contactMe.display !== true) {
        return null
    }

    return (
        <section className="contact" id="contact">
            <div className="max-width">
                <h2 className="title">Contact me</h2>
                <div className="contact-content">
                    <div className="column left">
                        <BrowserView>
                            <Fade direction="left" duration={1000}>
                                <div className="text">{contactMe.title}</div>
                                <p>{contactMe.subTitle}</p>
                                <div className="icons">
                                    {
                                        contactMe.contact.map((contact, i) => {
                                            
                                            const { contactField, value, icon } = contact
                                            
                                            return (
                                                <div className="row" key={i}>
                                                    <img src={icon} alt="" />
                                                    <div className="info">
                                                        <div className="head">{contactField}</div>
                                                        <div className="sub-title">{value}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Fade>
                        </BrowserView>
                        <MobileView>
                            <Fade direction="bottom" duration={1000}>
                                <div className="text">{contactMe.title}</div>
                                <p>{contactMe.subTitle}</p>
                                <div className="icons">
                                    {
                                        contactMe.contact.map((contact, i) => {
                                            
                                            const { contactField, value, icon } = contact
                                            
                                            return (
                                                <div className="row" key={i}>
                                                    <img src={icon} alt="" />
                                                    <div className="info">
                                                        <div className="head">{contactField}</div>
                                                        <div className="sub-title">{value}</div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Fade>
                        </MobileView>
                    </div>            
                    <div className="column right">
                        <BrowserView >
                            <Fade direction="right" duration={1000}>
                                <div className="text">Message me</div>
                                <br />
                                <form action="MAILTO:riteshsaj8958@gmail.com" method="POST" encType="text/plain">
                                    <div className="fields">
                                        <div className="field name">
                                            <input type="text" name='name' id='name' placeholder="Name" required />
                                        </div>
                                        <div className="field email">
                                            <input type="email" name='email' id='email' placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <input type="text" name='subject' id='subject' placeholder="Subject" required />
                                    </div>
                                    <div className="field textarea">
                                        <textarea cols="30" name='message' id='message' rows="10" placeholder="Message.." required ></textarea>
                                    </div>
                                    <div className="button-area">
                                        <button type="submit">Send message</button>
                                    </div>
                                </form>
                            </Fade>
                        </BrowserView>
                        <MobileView >
                            <Fade direction="bottom" duration={1000}>
                                <div className="text">Message me</div>
                                <br />
                                <form action="MAILTO:sandeeprwt58@gmail.com" method="POST" encType="text/plain">
                                    <div className="fields">
                                        <div className="field name">
                                            <input type="text" name='name' id='name' placeholder="Name" required />
                                        </div>
                                        <div className="field email">
                                            <input type="email" name='email' id='email' placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <input type="text" name='subject' id='subject' placeholder="Subject" required />
                                    </div>
                                    <div className="field textarea">
                                        <textarea cols="30" name='message' id='message' rows="10" placeholder="Message.." required ></textarea>
                                    </div>
                                    <div className="button-area">
                                        <button type="submit">Send message</button>
                                    </div>
                                </form>
                            </Fade>
                        </MobileView>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Contact;

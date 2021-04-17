import React from "react";

import FrontIcons from "./FrontEndIcons"
import BackIcons from "./BackEndIcons"
import TheFutureIcons from "./FutureIcons"

import "./index.css"

export const Icons: React.FC = () => {
    return (
        <div className="myIcons">
            <div className="FrontEndIcons">
                {FrontIcons.map((elt: {img: string}, index: number) => {
                    return (
                        <img
                            src={elt.img}
                            alt="carregando..."
                            className="theFrontIcon"
                            key={index}
                        />
                    )
                })}
            </div>
            <div className="BackEndIcons">
                {BackIcons.map((elt: {img: string}, index: number) => {
                    return (
                        <img
                            src={elt.img}
                            alt="carregando..."
                            className="theBackIcon"
                            key={index}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export const FutureIcons: React.FC = () => {
    return (
        <div className="myFutureIcons">
            {TheFutureIcons.map((elt: {img: string}, index: number) => {
                return (
                    <img
                        src={elt.img} alt="carregando..."
                        className="theFutureIcon"
                        key={index}
                    />
                )
            })}
        </div>
    )
}

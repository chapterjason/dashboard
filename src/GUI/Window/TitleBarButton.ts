/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { Component } from "../Component/Component";

type Handler = (event: Event) => void;

export class TitleBarButton extends Component<HTMLButtonElement> {

    protected text: string;

    protected handler: Handler;

    public constructor(text: string, handler: Handler) {
        super();
        this.text = text;
        this.handler = handler;

        this.element = document.createElement("button");
        this.element.innerText = text;
        this.element.type = "button";
        this.element.addEventListener("click", this.handler);
        this.setStyle("border", "none");
        this.setStyle("backgroundColor", "#333333");
        this.setStyle("color", "#ffffff");
        this.setStyle("padding", "10px");
        this.setStyle("outline", "none");
        this.setStyle("cursor", "pointer");
        this.element.addEventListener("mouseover", () => {
            this.setStyle("backgroundColor", "#434343");
        });

        this.element.addEventListener("mouseout", () => {
            this.setStyle("backgroundColor", "#333333");
        });
    }
}

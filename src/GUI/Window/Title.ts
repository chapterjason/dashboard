/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { Component } from "../Component/Component";

export class Title extends Component {

    public constructor(text: string) {
        super();
        this.element = document.createElement("div");
        this.setStyle("color", "#ffffff");
        this.setStyle("display", "flex");
        this.setStyle("alignItems", "center");
        this.setStyle("padding", "5px");
        this.setStyle("justifyContent", "center");
        this.setStyle("flexGrow", "1");
        this.element.innerText = text;
    }
}

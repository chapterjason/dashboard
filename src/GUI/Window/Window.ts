/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { Component } from "../Component/Component";
import { Position } from "../Position/Position";
import { TitleBar } from "./TitleBar";
import { TitleBarButton } from "./TitleBarButton";

export class Window extends Component {

    protected titleBar: TitleBar;

    public constructor(title: string) {
        super();
        this.element = document.createElement("div");
        this.element.style.position = "absolute";
        this.setWidth(800);
        this.setHeight(600);
        this.setX(500);
        this.setY(500);
        this.setOrigin(new Position(0.5, 0.5));
        this.setStyle("backgroundColor", "#444444");

        this.titleBar = new TitleBar(title);
        this.titleBar.addButton(new TitleBarButton("_", event => {
        }));
        this.titleBar.addButton(new TitleBarButton("[]", event => {
        }));
        this.titleBar.addButton(new TitleBarButton("X", event => {
        }));

        this.element.appendChild(this.titleBar.getElement());

        console.log(this);
    }
}

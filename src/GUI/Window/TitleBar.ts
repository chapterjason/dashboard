/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { Component } from "../Component/Component";
import { Title } from "./Title";
import { TitleBarButtonGroup } from "./TitleBarButtonGroup";
import { TitleBarButton } from "./TitleBarButton";

export class TitleBar extends Component {

    protected title: Title;

    protected buttonGroup: TitleBarButtonGroup;

    public constructor(text: string) {
        super();
        this.element = document.createElement("div");
        this.setStyle("display", "flex");
        this.setStyle("backgroundColor", "#333333");
        this.setStyle("userSelect", "none");
        this.title = new Title(text);
        this.buttonGroup = new TitleBarButtonGroup();
        this.element.appendChild(this.title.getElement());
        this.element.appendChild(this.buttonGroup.getElement());
    }

    public addButton(button: TitleBarButton) {
        this.buttonGroup.addButton(button);
    }
}

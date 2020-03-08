/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { Component } from "../Component/Component";
import { TitleBarButton } from "./TitleBarButton";

export class TitleBarButtonGroup extends Component {

    protected buttons: TitleBarButton[] = [];

    public constructor() {
        super();
        this.element = document.createElement('div');
        this.setStyle("display", "flex");
    }

    public addButton(button: TitleBarButton) {
        this.buttons.push(button);
        this.element.appendChild(button.getElement());
    }

}

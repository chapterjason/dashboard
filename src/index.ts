/*
 * This file is part of the dashboard package.
 *
 * (c) Jason Schilling <jason.schilling@sourecode.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * File that was distributed with this source code.
 */

import { Window } from "./GUI/Window/Window";

const root = document.body;
root.style.setProperty("position", "relative");
root.style.setProperty("font-family", "Tahoma");
root.style.setProperty("font-size", "12px");

const win = new Window("Test");
root.appendChild(win.getElement());

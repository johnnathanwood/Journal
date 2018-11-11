import {dashHtml} from "./dashboard/dashHtml"
import {journal} from "./journal/journal"

document.querySelector("#container").innerHTML = dashHtml()
journal()

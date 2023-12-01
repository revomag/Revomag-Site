import {ReactElement} from "react";
import "./simplePracticeWidget.scss";

/**
 * Renders Simple Practice widget for existing patient login
 * @constructor
 */
export default function SimplePracticeExistingPatientLoginWidget(): ReactElement {
    return (
        <div className="spwidget-button-wrapper">
            <a href="https://nicole-cantello.clientsecure.me/sign-in"
               className="spwidget-button"
               target={"_blank"}
               rel={"noreferrer"}
               data-spwidget-scope-id="16e1b71d-0d3b-49a6-8b10-f17b576b5069"
               data-spwidget-scope-uri="nicole-cantello"
               data-spwidget-application-id="7c72cb9f9a9b913654bb89d6c7b4e71a77911b30192051da35384b4d0c6d505b"
               data-spwidget-scope-global
               data-spwidget-autobind>Existing Patient - Access Client Portal
            </a>
        </div>
    );
}

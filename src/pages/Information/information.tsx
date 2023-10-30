import {ReactElement} from "react";
import Navigation from "../../components/navigation/navigation";

export default function Information(): ReactElement {
    return (
        <>
            <Navigation/>
            <div>This is the Information page. This should actually not be a page, and should instead be a dropdown menu with a bunch of other pages.</div>
        </>
    );
}

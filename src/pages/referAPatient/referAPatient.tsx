import React, {ReactElement} from "react";
import NavBar from "../../components/navBar/navBar";
import './referAPatient.scss';

export default function ReferAPatient(): ReactElement {
    return (
        <>
            <NavBar/>
            <div>This is the Refer A Patient page</div>
        </>
    );
}

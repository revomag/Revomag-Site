import React, { useState, ReactElement, ReactNode } from "react";
import expandIcon from "../../assets/chevronRight.svg";
import collapseIcon from "../../assets/chevronDown.svg";

interface CollapsibleSectionProps {
    title?: string;
    defaultOpen?: boolean;
    children?: ReactNode;
    className?: string;
    outsideToggle?: string;
}

/**
 * Collapsible Container
 * @param title String displayed at top level of menu when open or closed
 * @param defaultOpen Should menu be open on load?
 * @param children Section content
 * @param className
 * @param outsideToggle pass open state of parent collapsible section causing this inner section to close when outer is closed
 * @constructor
 */
export default function CollapsibleSection({
                                               title,
                                               defaultOpen,
                                               children,
                                               className,
                                               outsideToggle,
                                           }: CollapsibleSectionProps): ReactElement {
    const [isOpen, setIsOpen] = useState<boolean>(defaultOpen || false);

    if (outsideToggle === 'open' && isOpen) {
        setIsOpen(false);
    }

    const toggleOpen = (): void => setIsOpen(!isOpen);

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === "Enter") {
            toggleOpen();
        }
    };

    return (
        <div className={className}>
            <div
                className={className + '-collapsible-div'}
                onClick={() => setIsOpen(!isOpen)}
                onKeyDown={onKeyDown}
                role="button"
                tabIndex={0}
                style={{
                    display: 'flex', cursor: 'pointer',
                    width: window.innerWidth <= 768 ? '100%' : 'max(60%, 700px)'
                }}
            >
                <p className={className + '-title'}>{title}</p>
                <img
                    src={isOpen ? collapseIcon : expandIcon}
                    alt={isOpen ? "collapse" : "expand"}
                    style={{height: '15px', paddingTop: '8px', paddingLeft: '8px', paddingRight: '5px', cursor: 'pointer'}}
                />
            </div>
            {isOpen && children}
        </div>
    );
}

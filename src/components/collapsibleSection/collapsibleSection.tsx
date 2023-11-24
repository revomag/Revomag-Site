import React, { useState, ReactElement, ReactNode } from "react";
import collapseIcon from "../../assets/chevron-right-icon.svg";
import expandIcon from "../../assets/chevron-right-icon.svg";

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
                style={{display: 'flex'}}
            >
                <p className={className + '-title'}>{title}</p>
                <img
                    src={isOpen ? collapseIcon : expandIcon}
                    alt={isOpen ? "collapse" : "expand"}
                    style={{height: '11px', paddingTop: '16px', paddingLeft: '8px'}}
                />
            </div>
            {isOpen && children}
        </div>
    );
}

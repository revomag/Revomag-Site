import React, {useEffect} from 'react';

/**
 * Accepts some other component (page) as a prop. When that component is mounted,
 * this function sets the scroll position to 0,0 which is the top of the page.
 * @param WrappedComponent
 */
const withScrollRestoration = (WrappedComponent: React.FC | React.FunctionComponent): React.FC => {
    const ComponentWithScrollRestoration: React.FC = (props) => {
        // Scroll to the top when the component mounts
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);

        return <WrappedComponent {...props} />;
    };

    return Object.assign(ComponentWithScrollRestoration, {
        displayName: `withScrollRestoration(${
            WrappedComponent.displayName || WrappedComponent.name || 'Component'
        })`,
    });
};

export default withScrollRestoration;


import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

interface SimpleButtonProps {
    buttonName: string;
    urlRedirect?: string;
    buttonEffectAsync?: () => Promise<any>;
}

const SimpleButton: React.FC<SimpleButtonProps> = ({
                                                       buttonName,
                                                       urlRedirect,
                                                       buttonEffectAsync,
                                                   }) => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);

    const handleButtonClick = async () => {
        setIsLoading(true);

        if (urlRedirect) {
            history.push(urlRedirect);
        }

        if (buttonEffectAsync) {
            try {
                const res = await buttonEffectAsync();
                console.log(res);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        }
    };

    return (
        <button
            disabled={isLoading}
            onClick={handleButtonClick}
            className="standard-button"
        >
            {isLoading ? 'Loading...' : buttonName}
        </button>
    );
};

export default SimpleButton;

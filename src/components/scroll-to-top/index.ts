import {RouteComponentProps, withRouter} from "react-router";
import React, {useEffect} from "react";

const ScrollToTopComponent: React.FC<RouteComponentProps> = ({ history }) => {
    useEffect(() => {
        const historySubscription = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            historySubscription();
        };
    }, []);

    return null;
};

export const ScrollToTop = withRouter(ScrollToTopComponent);
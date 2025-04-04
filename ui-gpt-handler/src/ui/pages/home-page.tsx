import { MainLayout } from "../layout/main-layout";
import { TabsContainer } from "../components/tabs/tabs-container";
import { useEffect } from "react";
import { PAGE_TITLE } from "../../core/constants/ui";

export const HomePage = () => {
    useEffect(() => {
        document.title = PAGE_TITLE;
    }, []);

    return (
        <MainLayout>
            <TabsContainer />
        </MainLayout>
    );
};
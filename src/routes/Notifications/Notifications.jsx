import React, { useState } from "react";
import { Container, Flex } from '@/shared';
import { NotificationsHeader, NotificationsFilter, NotificationsList, mockNotifications } from "@/features";

export const Notifications = () => {
    const [active, setActive] = useState("All");

    const filtered =
        active === "All"
            ? mockNotifications
            : mockNotifications.filter((n) => n.type === active);

    return (
        <Container>
            <Flex gap="24px" flexdirection="column">
                <NotificationsHeader />
                <NotificationsFilter active={active} onChange={setActive} />
                <NotificationsList notifications={filtered} />
            </Flex>
        </Container>
    );
};

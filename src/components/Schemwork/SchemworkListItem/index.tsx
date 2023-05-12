import React from "react";

interface TProps {
    message: string
}

export const SchemworkListItem = (props: TProps) => {
    return (
        <li>{props.message}</li>
    )
}
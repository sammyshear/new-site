import React from "react";
import Rotary from "components/generic/Rotary";

export default function LatestArticles({articles}) {
    return (
        <>
            Latest Articles
            <Rotary articles={articles}/>
        </>
    );
}

